/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { ReserveConfig, reserveConfigBeet } from '../types/ReserveConfig.js'

/**
 * Arguments used to create {@link Reserve}
 * @category Accounts
 * @category generated
 */
export type ReserveArgs = {
  version: number
  index: number
  exponent: number
  market: web3.PublicKey
  pythOraclePrice: web3.PublicKey
  pythOracleProduct: web3.PublicKey
  tokenMint: web3.PublicKey
  depositNoteMint: web3.PublicKey
  loanNoteMint: web3.PublicKey
  vault: web3.PublicKey
  feeNoteVault: web3.PublicKey
  dexSwapTokens: web3.PublicKey
  dexOpenOrders: web3.PublicKey
  dexMarket: web3.PublicKey
  reserved0: number[] /* size: 408 */
  config: ReserveConfig
  reserved1: number[] /* size: 704 */
  state: number[] /* size: 512 */
}

export const reserveDiscriminator = [43, 242, 204, 202, 26, 247, 59, 127]
/**
 * Holds the data for the {@link Reserve} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Reserve implements ReserveArgs {
  private constructor(
    readonly version: number,
    readonly index: number,
    readonly exponent: number,
    readonly market: web3.PublicKey,
    readonly pythOraclePrice: web3.PublicKey,
    readonly pythOracleProduct: web3.PublicKey,
    readonly tokenMint: web3.PublicKey,
    readonly depositNoteMint: web3.PublicKey,
    readonly loanNoteMint: web3.PublicKey,
    readonly vault: web3.PublicKey,
    readonly feeNoteVault: web3.PublicKey,
    readonly dexSwapTokens: web3.PublicKey,
    readonly dexOpenOrders: web3.PublicKey,
    readonly dexMarket: web3.PublicKey,
    readonly reserved0: number[] /* size: 408 */,
    readonly config: ReserveConfig,
    readonly reserved1: number[] /* size: 704 */,
    readonly state: number[] /* size: 512 */,
  ) {}

  /**
   * Creates a {@link Reserve} instance from the provided args.
   */
  static fromArgs(args: ReserveArgs) {
    return new Reserve(
      args.version,
      args.index,
      args.exponent,
      args.market,
      args.pythOraclePrice,
      args.pythOracleProduct,
      args.tokenMint,
      args.depositNoteMint,
      args.loanNoteMint,
      args.vault,
      args.feeNoteVault,
      args.dexSwapTokens,
      args.dexOpenOrders,
      args.dexMarket,
      args.reserved0,
      args.config,
      args.reserved1,
      args.state,
    )
  }

  /**
   * Deserializes the {@link Reserve} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [Reserve, number] {
    return Reserve.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Reserve} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<Reserve> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Reserve account at ${address}`)
    }
    return Reserve.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU',
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, reserveBeet)
  }

  /**
   * Deserializes the {@link Reserve} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Reserve, number] {
    return reserveBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Reserve} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return reserveBeet.serialize({
      accountDiscriminator: reserveDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Reserve}
   */
  static get byteSize() {
    return reserveBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Reserve} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Reserve.byteSize,
      commitment,
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link Reserve} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === Reserve.byteSize
  }

  /**
   * Returns a readable version of {@link Reserve} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      version: this.version,
      index: this.index,
      exponent: this.exponent,
      market: this.market.toBase58(),
      pythOraclePrice: this.pythOraclePrice.toBase58(),
      pythOracleProduct: this.pythOracleProduct.toBase58(),
      tokenMint: this.tokenMint.toBase58(),
      depositNoteMint: this.depositNoteMint.toBase58(),
      loanNoteMint: this.loanNoteMint.toBase58(),
      vault: this.vault.toBase58(),
      feeNoteVault: this.feeNoteVault.toBase58(),
      dexSwapTokens: this.dexSwapTokens.toBase58(),
      dexOpenOrders: this.dexOpenOrders.toBase58(),
      dexMarket: this.dexMarket.toBase58(),
      reserved0: this.reserved0,
      config: this.config,
      reserved1: this.reserved1,
      state: this.state,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const reserveBeet = new beet.BeetStruct<
  Reserve,
  ReserveArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['version', beet.u16],
    ['index', beet.u16],
    ['exponent', beet.i32],
    ['market', beetSolana.publicKey],
    ['pythOraclePrice', beetSolana.publicKey],
    ['pythOracleProduct', beetSolana.publicKey],
    ['tokenMint', beetSolana.publicKey],
    ['depositNoteMint', beetSolana.publicKey],
    ['loanNoteMint', beetSolana.publicKey],
    ['vault', beetSolana.publicKey],
    ['feeNoteVault', beetSolana.publicKey],
    ['dexSwapTokens', beetSolana.publicKey],
    ['dexOpenOrders', beetSolana.publicKey],
    ['dexMarket', beetSolana.publicKey],
    ['reserved0', beet.uniformFixedSizeArray(beet.u8, 408)],
    ['config', reserveConfigBeet],
    ['reserved1', beet.uniformFixedSizeArray(beet.u8, 704)],
    ['state', beet.uniformFixedSizeArray(beet.u8, 512)],
  ],
  Reserve.fromArgs,
  'Reserve',
)
