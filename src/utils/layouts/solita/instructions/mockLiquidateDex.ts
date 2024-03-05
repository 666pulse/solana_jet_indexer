/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category MockLiquidateDex
 * @category generated
 */
export const mockLiquidateDexStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'MockLiquidateDexInstructionArgs',
)
/**
 * Accounts required by the _mockLiquidateDex_ instruction
 *
 * @property [_writable_] sourceMarketItemMarket
 * @property [_writable_] sourceMarketItemOpenOrders
 * @property [_writable_] sourceMarketItemRequestQueue
 * @property [_writable_] sourceMarketItemEventQueue
 * @property [_writable_] sourceMarketItemBids
 * @property [_writable_] sourceMarketItemAsks
 * @property [_writable_] sourceMarketItemCoinVault
 * @property [_writable_] sourceMarketItemPcVault
 * @property [] sourceMarketItemVaultSigner
 * @property [_writable_] targetMarketItemMarket
 * @property [_writable_] targetMarketItemOpenOrders
 * @property [_writable_] targetMarketItemRequestQueue
 * @property [_writable_] targetMarketItemEventQueue
 * @property [_writable_] targetMarketItemBids
 * @property [_writable_] targetMarketItemAsks
 * @property [_writable_] targetMarketItemCoinVault
 * @property [_writable_] targetMarketItemPcVault
 * @property [] targetMarketItemVaultSigner
 * @property [] toLiquidateItemMarket
 * @property [] toLiquidateItemMarketAuthority
 * @property [_writable_] toLiquidateItemObligation
 * @property [_writable_] toLiquidateItemLoanReserve
 * @property [_writable_] toLiquidateItemLoanReserveVault
 * @property [_writable_] toLiquidateItemLoanNoteMint
 * @property [_writable_] toLiquidateItemLoanAccount
 * @property [] toLiquidateItemCollateralReserve
 * @property [_writable_] toLiquidateItemCollateralReserveVault
 * @property [_writable_] toLiquidateItemDepositNoteMint
 * @property [_writable_] toLiquidateItemCollateralAccount
 * @property [_writable_] toLiquidateItemDexSwapTokens
 * @property [] toLiquidateItemDexProgram
 * @property [] toLiquidateItemTokenProgram
 * @property [] toLiquidateItemRent
 * @category Instructions
 * @category MockLiquidateDex
 * @category generated
 */
export type MockLiquidateDexInstructionAccounts = {
  sourceMarketItemMarket: web3.PublicKey
  sourceMarketItemOpenOrders: web3.PublicKey
  sourceMarketItemRequestQueue: web3.PublicKey
  sourceMarketItemEventQueue: web3.PublicKey
  sourceMarketItemBids: web3.PublicKey
  sourceMarketItemAsks: web3.PublicKey
  sourceMarketItemCoinVault: web3.PublicKey
  sourceMarketItemPcVault: web3.PublicKey
  sourceMarketItemVaultSigner: web3.PublicKey
  targetMarketItemMarket: web3.PublicKey
  targetMarketItemOpenOrders: web3.PublicKey
  targetMarketItemRequestQueue: web3.PublicKey
  targetMarketItemEventQueue: web3.PublicKey
  targetMarketItemBids: web3.PublicKey
  targetMarketItemAsks: web3.PublicKey
  targetMarketItemCoinVault: web3.PublicKey
  targetMarketItemPcVault: web3.PublicKey
  targetMarketItemVaultSigner: web3.PublicKey
  toLiquidateItemMarket: web3.PublicKey
  toLiquidateItemMarketAuthority: web3.PublicKey
  toLiquidateItemObligation: web3.PublicKey
  toLiquidateItemLoanReserve: web3.PublicKey
  toLiquidateItemLoanReserveVault: web3.PublicKey
  toLiquidateItemLoanNoteMint: web3.PublicKey
  toLiquidateItemLoanAccount: web3.PublicKey
  toLiquidateItemCollateralReserve: web3.PublicKey
  toLiquidateItemCollateralReserveVault: web3.PublicKey
  toLiquidateItemDepositNoteMint: web3.PublicKey
  toLiquidateItemCollateralAccount: web3.PublicKey
  toLiquidateItemDexSwapTokens: web3.PublicKey
  toLiquidateItemDexProgram: web3.PublicKey
  toLiquidateItemTokenProgram: web3.PublicKey
  toLiquidateItemRent: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const mockLiquidateDexInstructionDiscriminator = [
  247, 195, 172, 177, 64, 18, 23, 209,
]

/**
 * Creates a _MockLiquidateDex_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category MockLiquidateDex
 * @category generated
 */
export function createMockLiquidateDexInstruction(
  accounts: MockLiquidateDexInstructionAccounts,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = mockLiquidateDexStruct.serialize({
    instructionDiscriminator: mockLiquidateDexInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.sourceMarketItemMarket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemOpenOrders,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemRequestQueue,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemEventQueue,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemBids,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemAsks,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemCoinVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemPcVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.sourceMarketItemVaultSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemMarket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemOpenOrders,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemRequestQueue,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemEventQueue,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemBids,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemAsks,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemCoinVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemPcVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.targetMarketItemVaultSigner,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemMarket,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemMarketAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemObligation,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemLoanReserve,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemLoanReserveVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemLoanNoteMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemLoanAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemCollateralReserve,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemCollateralReserveVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemDepositNoteMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemCollateralAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemDexSwapTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemDexProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.toLiquidateItemRent,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
