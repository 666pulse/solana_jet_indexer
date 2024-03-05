/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { Amount, amountBeet } from '../types/Amount.js'

/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionArgs = {
  bump: number
  amount: Amount
}
/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export const withdrawStruct = new beet.BeetArgsStruct<
  WithdrawInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['amount', amountBeet],
  ],
  'WithdrawInstructionArgs',
)
/**
 * Accounts required by the _withdraw_ instruction
 *
 * @property [] market
 * @property [] marketAuthority
 * @property [_writable_] reserve
 * @property [_writable_] vault
 * @property [_writable_] depositNoteMint
 * @property [**signer**] depositor
 * @property [_writable_] depositAccount
 * @property [_writable_] withdrawAccount
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionAccounts = {
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  reserve: web3.PublicKey
  vault: web3.PublicKey
  depositNoteMint: web3.PublicKey
  depositor: web3.PublicKey
  depositAccount: web3.PublicKey
  withdrawAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const withdrawInstructionDiscriminator = [
  183, 18, 70, 156, 148, 109, 161, 34,
]

/**
 * Creates a _Withdraw_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export function createWithdrawInstruction(
  accounts: WithdrawInstructionAccounts,
  args: WithdrawInstructionArgs,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = withdrawStruct.serialize({
    instructionDiscriminator: withdrawInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.market,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.marketAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.reserve,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.depositNoteMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.depositor,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.depositAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.withdrawAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
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
