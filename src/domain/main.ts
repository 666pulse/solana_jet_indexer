import { StorageStream } from '@aleph-indexer/core'
import {
  IndexerMainDomain,
  IndexerMainDomainWithDiscovery,
  IndexerMainDomainWithStats,
  AccountIndexerConfigWithMeta,
  IndexerMainDomainContext,
  AccountStats,
  BlockchainChain,
} from '@aleph-indexer/framework'
import { AccountType, JetEvent } from '../utils/layouts/index.js'
import {
  GlobalJetStats,
  JetAccountStats,
  JetAccountData,
  JetAccountInfo,
} from '../types.js'
import JetDiscoverer from './discoverer/jet.js'

export default class MainDomain
  extends IndexerMainDomain
  implements IndexerMainDomainWithDiscovery, IndexerMainDomainWithStats
{
  protected stats!: GlobalJetStats

  constructor(
    protected context: IndexerMainDomainContext,
    protected discoverer: JetDiscoverer = new JetDiscoverer(),
  ) {
    super(context, {
      discoveryInterval: 1000 * 60 * 60 * 1,
      stats: 1000 * 60 * 1,
    })
  }

  async discoverAccounts(): Promise<
    AccountIndexerConfigWithMeta<JetAccountInfo>[]
  > {
    const accounts = await this.discoverer.loadAccounts()

    return accounts.map((meta) => {
      return {
        blockchainId: BlockchainChain.Solana,
        account: meta.address,
        meta,
        index: {
          transactions: {
            chunkDelay: 0,
            chunkTimeframe: 1000 * 60 * 60 * 24,
          },
          content: false,
        },
      }
    })
  }

  async getAccounts(
    includeStats?: boolean,
  ): Promise<Record<string, JetAccountData>> {
    const accounts: Record<string, JetAccountData> = {}

    await Promise.all(
      Array.from(this.accounts.solana || []).map(async (account) => {
        const actual = await this.getAccount(account, includeStats)
        accounts[account] = actual as JetAccountData
      }),
    )

    return accounts
  }

  async getAccount(
    account: string,
    includeStats?: boolean,
  ): Promise<JetAccountData> {
    const info = (await this.context.apiClient
      .useBlockchain(BlockchainChain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getAccountInfo',
      })) as JetAccountInfo

    if (!includeStats) return { info }

    const { stats } = (await this.context.apiClient
      .useBlockchain(BlockchainChain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getJetStats',
      })) as AccountStats<JetAccountStats>

    return { info, stats }
  }

  async getAccountEventsByTime(
    account: string,
    startDate: number,
    endDate: number,
    opts: any,
  ): Promise<StorageStream<string, JetEvent>> {
    const stream = await this.context.apiClient
      .useBlockchain(BlockchainChain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getAccountEventsByTime',
        args: [startDate, endDate, opts],
      })

    return stream as StorageStream<string, JetEvent>
  }

  async updateStats(now: number): Promise<void> {
    this.stats = await this.computeGlobalStats()
  }

  async getGlobalStats(addresses?: string[]): Promise<GlobalJetStats> {
    if (!addresses || addresses.length === 0) {
      if (!this.stats) {
        await this.updateStats(Date.now())
      }

      return this.stats
    }

    return this.computeGlobalStats(addresses)
  }

  async computeGlobalStats(
    accountAddresses?: string[],
  ): Promise<GlobalJetStats> {
    console.log(
      `📊 computing global stats for ${accountAddresses?.length} accounts`,
    )
    const accountsStats = await this.getAccountStats<JetAccountStats>(
      BlockchainChain.Solana,
      accountAddresses,
    )

    const globalStats: GlobalJetStats = this.getNewGlobalStats()

    for (const accountStats of accountsStats) {
      if (!accountStats.stats) continue

      const { accesses, accessesByProgramId, startTimestamp, endTimestamp } =
        accountStats.stats.total

      console.log(
        `📊 computing global stats for ${accountStats.account} with ${accesses} accesses`,
      )

      const type = this.discoverer.getAccountType(accountStats.account)

      globalStats.totalAccounts[type]++
      globalStats.totalAccesses += accesses || 0
      if (accessesByProgramId) {
        Object.entries(accessesByProgramId).forEach(([programId, accesses]) => {
          globalStats.totalAccessesByProgramId[programId] =
            (globalStats.totalAccessesByProgramId[programId] || 0) + accesses
        })
      }
      globalStats.startTimestamp = Math.min(
        globalStats.startTimestamp || Number.MAX_SAFE_INTEGER,
        startTimestamp || Number.MAX_SAFE_INTEGER,
      )
      globalStats.endTimestamp = Math.max(
        globalStats.endTimestamp || 0,
        endTimestamp || 0,
      )
    }
    return globalStats
  }

  getNewGlobalStats(): GlobalJetStats {
    return {
      totalAccesses: 0,
      totalAccounts: {
        [AccountType.Market]: 0,
        [AccountType.Obligation]: 0,
        [AccountType.Reserve]: 0,
      },
      totalAccessesByProgramId: {},
      startTimestamp: undefined,
      endTimestamp: undefined,
    }
  }
}
