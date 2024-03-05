/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category InitLoanAccount
 * @category generated
 */
export type InitLoanAccountInstructionArgs = {
  bump: number
}
/**
 * @category Instructions
 * @category InitLoanAccount
 * @category generated
 */
export const initLoanAccountStruct = new beet.BeetArgsStruct<
  InitLoanAccountInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
  ],
  'InitLoanAccountInstructionArgs',
)
/**
 * Accounts required by the _initLoanAccount_ instruction
 *
 * @property [] market
 * @property [] marketAuthority
 * @property [_writable_] obligation
 * @property [] reserve
 * @property [] loanNoteMint
 * @property [_writable_, **signer**] owner
 * @property [_writable_] loanAccount
 * @category Instructions
 * @category InitLoanAccount
 * @category generated
 */
export type InitLoanAccountInstructionAccounts = {
  market: web3.PublicKey
  marketAuthority: web3.PublicKey
  obligation: web3.PublicKey
  reserve: web3.PublicKey
  loanNoteMint: web3.PublicKey
  owner: web3.PublicKey
  loanAccount: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initLoanAccountInstructionDiscriminator = [
  194, 102, 166, 130, 91, 74, 188, 81,
]

/**
 * Creates a _InitLoanAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitLoanAccount
 * @category generated
 */
export function createInitLoanAccountInstruction(
  accounts: InitLoanAccountInstructionAccounts,
  args: InitLoanAccountInstructionArgs,
  programId = new web3.PublicKey('JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU'),
) {
  const [data] = initLoanAccountStruct.serialize({
    instructionDiscriminator: initLoanAccountInstructionDiscriminator,
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
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.loanNoteMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.loanAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
