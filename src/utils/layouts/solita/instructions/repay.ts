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
 * @category Repay
 * @category generated
 */
export type RepayInstructionArgs = {
  amount: Amount
}
/**
 * @category Instructions
 * @category Repay
 * @category generated
 */
export const repayStruct = new beet.BeetArgsStruct<
  RepayInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['amount', amountBeet],
  ],
  'RepayInstructionArgs',
)
/**
 * Accounts required by the _repay_ instruction
 *
 * @property [] market
 * @property [] marketAuthority
 * @property [_writable_] obligation
 * @property [_writable_] reserve
 * @property [_writable_] vault
 * @property [_writable_] loanNoteMint
 * @property [_writable_] loanAccount
 * @property [_writable_] payerAccount
 * @property [**signer**] payer
 * @category Instructions
 * @category Repay
 * @category generated
 */
export type RepayInstructionAccounts = {
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  obligation: web3.PublicKey
  reserve: web3.PublicKey
  vault: web3.PublicKey
  loanNoteMint: web3.PublicKey
  loanAccount: web3.PublicKey
  payerAccount: web3.PublicKey
  payer: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const repayInstructionDiscriminator = [
  234, 103, 67, 82, 208, 234, 219, 166,
]

/**
 * Creates a _Repay_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Repay
 * @category generated
 */
export function createRepayInstruction(
  accounts: RepayInstructionAccounts,
  args: RepayInstructionArgs,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = repayStruct.serialize({
    instructionDiscriminator: repayInstructionDiscriminator,
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
      pubkey: accounts.obligation,
      isWritable: true,
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
      pubkey: accounts.loanNoteMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.loanAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payerAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
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
