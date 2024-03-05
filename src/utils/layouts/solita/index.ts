import { AccountMeta, PublicKey } from '@solana/web3.js'
export * from './accounts/index.js'
export * from './instructions/index.js'
export * from './types/index.js'

import {
  Market,
  MarketArgs,
  Obligation,
  ObligationArgs,
  Reserve,
  ReserveArgs,
} from './accounts/index.js'

import {
  Amount,
  DepositCollateralBumpSeeds,
  InitReserveBumpSeeds,
  ReserveConfig,
  WithdrawCollateralBumpSeeds,
  CacheInvalidError,
  AmountUnits,
  Rounding,
  DexSide,
  SwapKind,
  Side,
  JobCompletion,
} from './types/index.js'

export type InitMarketInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitMarketAccounts = ['market']

export type InitReserveInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitReserveAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'feeNoteVault',
  'dexSwapTokens',
  'dexOpenOrders',
  'dexMarket',
  'tokenMint',
  'tokenProgram',
  'dexProgram',
  'oraclePrice',
  'oracleProduct',
  'depositNoteMint',
  'loanNoteMint',
  'quoteTokenMint',
  'owner',
  'systemProgram',
  'rent',
]

export type UpdateReserveConfigInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateReserveConfigAccounts = ['market', 'reserve', 'owner']

export type InitDepositAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitDepositAccountAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'depositNoteMint',
  'depositor',
  'depositAccount',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type InitCollateralAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitCollateralAccountAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'reserve',
  'depositNoteMint',
  'owner',
  'collateralAccount',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type InitLoanAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitLoanAccountAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'reserve',
  'loanNoteMint',
  'owner',
  'loanAccount',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type InitObligationInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitObligationAccounts = [
  'market',
  'marketAuthority',
  'borrower',
  'obligation',
  'tokenProgram',
  'systemProgram',
]

export type SetMarketOwnerInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const SetMarketOwnerAccounts = ['market', 'owner']

export type SetMarketFlagsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const SetMarketFlagsAccounts = ['market', 'owner']

export type CloseDepositAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CloseDepositAccountAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'depositNoteMint',
  'depositor',
  'depositAccount',
  'receiverAccount',
  'tokenProgram',
]

export type CloseCollateralAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CloseCollateralAccountAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'owner',
  'collateralAccount',
  'depositAccount',
  'tokenProgram',
]

export type CloseLoanAccountInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CloseLoanAccountAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'owner',
  'loanAccount',
  'tokenProgram',
]

export type CloseObligationInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CloseObligationAccounts = [
  'market',
  'marketAuthority',
  'owner',
  'obligation',
]

export type DepositInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const DepositAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'depositNoteMint',
  'depositor',
  'depositAccount',
  'depositSource',
  'tokenProgram',
]

export type DepositTokensInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const DepositTokensAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'depositNoteMint',
  'depositor',
  'depositNoteAccount',
  'depositSource',
  'tokenProgram',
]

export type WithdrawInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const WithdrawAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'depositNoteMint',
  'depositor',
  'depositAccount',
  'withdrawAccount',
  'tokenProgram',
]

export type WithdrawTokensInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const WithdrawTokensAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'vault',
  'depositNoteMint',
  'depositor',
  'depositNoteAccount',
  'withdrawAccount',
  'tokenProgram',
]

export type DepositCollateralInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const DepositCollateralAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'obligation',
  'owner',
  'depositAccount',
  'collateralAccount',
  'tokenProgram',
]

export type WithdrawCollateralInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const WithdrawCollateralAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'obligation',
  'owner',
  'depositAccount',
  'collateralAccount',
  'tokenProgram',
]

export type BorrowInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const BorrowAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'reserve',
  'vault',
  'loanNoteMint',
  'borrower',
  'loanAccount',
  'receiverAccount',
  'tokenProgram',
]

export type RepayInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const RepayAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'reserve',
  'vault',
  'loanNoteMint',
  'loanAccount',
  'payerAccount',
  'payer',
  'tokenProgram',
]

export type LiquidateInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const LiquidateAccounts = [
  'market',
  'marketAuthority',
  'obligation',
  'reserve',
  'collateralReserve',
  'vault',
  'loanNoteMint',
  'loanAccount',
  'collateralAccount',
  'payerAccount',
  'receiverAccount',
  'payer',
  'tokenProgram',
]

export type MockLiquidateDexInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const MockLiquidateDexAccounts = [
  'sourceMarket',
  'targetMarket',
  'toLiquidate',
]

export type RefreshReserveInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const RefreshReserveAccounts = [
  'market',
  'marketAuthority',
  'reserve',
  'feeNoteVault',
  'depositNoteMint',
  'pythOraclePrice',
  'tokenProgram',
]

export type ParsedInstructions =
  | InitMarketInstruction
  | InitReserveInstruction
  | UpdateReserveConfigInstruction
  | InitDepositAccountInstruction
  | InitCollateralAccountInstruction
  | InitLoanAccountInstruction
  | InitObligationInstruction
  | SetMarketOwnerInstruction
  | SetMarketFlagsInstruction
  | CloseDepositAccountInstruction
  | CloseCollateralAccountInstruction
  | CloseLoanAccountInstruction
  | CloseObligationInstruction
  | DepositInstruction
  | DepositTokensInstruction
  | WithdrawInstruction
  | WithdrawTokensInstruction
  | DepositCollateralInstruction
  | WithdrawCollateralInstruction
  | BorrowInstruction
  | RepayInstruction
  | LiquidateInstruction
  | MockLiquidateDexInstruction
  | RefreshReserveInstruction
export type ParsedAccounts = Market | Obligation | Reserve

export type ParsedAccountsData = MarketArgs | ObligationArgs | ReserveArgs

export type ParsedTypes =
  | CacheInvalidError
  | AmountUnits
  | Rounding
  | DexSide
  | SwapKind
  | Side
  | JobCompletion
  | Amount
  | DepositCollateralBumpSeeds
  | InitReserveBumpSeeds
  | ReserveConfig
  | WithdrawCollateralBumpSeeds
