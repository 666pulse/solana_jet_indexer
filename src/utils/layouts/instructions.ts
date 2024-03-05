import { EventBase } from '@aleph-indexer/framework'
import * as solita from './solita/index.js'
import { PublicKey } from '@solana/web3.js'
import BN from 'bn.js'

export enum InstructionType {
  InitMarket = 'InitMarket',
  InitReserve = 'InitReserve',
  UpdateReserveConfig = 'UpdateReserveConfig',
  InitDepositAccount = 'InitDepositAccount',
  InitCollateralAccount = 'InitCollateralAccount',
  InitLoanAccount = 'InitLoanAccount',
  InitObligation = 'InitObligation',
  SetMarketOwner = 'SetMarketOwner',
  SetMarketFlags = 'SetMarketFlags',
  CloseDepositAccount = 'CloseDepositAccount',
  CloseCollateralAccount = 'CloseCollateralAccount',
  CloseLoanAccount = 'CloseLoanAccount',
  CloseObligation = 'CloseObligation',
  Deposit = 'Deposit',
  DepositTokens = 'DepositTokens',
  Withdraw = 'Withdraw',
  WithdrawTokens = 'WithdrawTokens',
  DepositCollateral = 'DepositCollateral',
  WithdrawCollateral = 'WithdrawCollateral',
  Borrow = 'Borrow',
  Repay = 'Repay',
  Liquidate = 'Liquidate',
  MockLiquidateDex = 'MockLiquidateDex',
  RefreshReserve = 'RefreshReserve',
}

export type RawInstructionBase = {
  parsed: unknown
  program: string
  programId: string
}

/*-----------------------* CUSTOM RAW INSTRUCTION TYPES *-----------------------*/

export type InitMarketAccountsInstruction = {
  market: string
}

export type InitMarketInfo = solita.InitMarketInstructionArgs &
  InitMarketAccountsInstruction

export type RawInitMarket = RawInstructionBase & {
  parsed: {
    info: InitMarketInfo
    type: InstructionType.InitMarket
  }
}

export type InitReserveAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  feeNoteVault: string
  dexSwapTokens: string
  dexOpenOrders: string
  dexMarket: string
  tokenMint: string
  tokenProgram: string
  dexProgram: string
  oraclePrice: string
  oracleProduct: string
  depositNoteMint: string
  loanNoteMint: string
  quoteTokenMint: string
  owner: string
  systemProgram: string
  rent: string
}

export type InitReserveInfo = solita.InitReserveInstructionArgs &
  InitReserveAccountsInstruction

export type RawInitReserve = RawInstructionBase & {
  parsed: {
    info: InitReserveInfo
    type: InstructionType.InitReserve
  }
}

export type UpdateReserveConfigAccountsInstruction = {
  market: string
  reserve: string
  owner: string
}

export type UpdateReserveConfigInfo =
  solita.UpdateReserveConfigInstructionArgs &
    UpdateReserveConfigAccountsInstruction

export type RawUpdateReserveConfig = RawInstructionBase & {
  parsed: {
    info: UpdateReserveConfigInfo
    type: InstructionType.UpdateReserveConfig
  }
}

export type InitDepositAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  depositNoteMint: string
  depositor: string
  depositAccount: string
  tokenProgram: string
  systemProgram: string
  rent: string
}

export type InitDepositAccountInfo = solita.InitDepositAccountInstructionArgs &
  InitDepositAccountAccountsInstruction

export type RawInitDepositAccount = RawInstructionBase & {
  parsed: {
    info: InitDepositAccountInfo
    type: InstructionType.InitDepositAccount
  }
}

export type InitCollateralAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  reserve: string
  depositNoteMint: string
  owner: string
  collateralAccount: string
  tokenProgram: string
  systemProgram: string
  rent: string
}

export type InitCollateralAccountInfo =
  solita.InitCollateralAccountInstructionArgs &
    InitCollateralAccountAccountsInstruction

export type RawInitCollateralAccount = RawInstructionBase & {
  parsed: {
    info: InitCollateralAccountInfo
    type: InstructionType.InitCollateralAccount
  }
}

export type InitLoanAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  reserve: string
  loanNoteMint: string
  owner: string
  loanAccount: string
  tokenProgram: string
  systemProgram: string
  rent: string
}

export type InitLoanAccountInfo = solita.InitLoanAccountInstructionArgs &
  InitLoanAccountAccountsInstruction

export type RawInitLoanAccount = RawInstructionBase & {
  parsed: {
    info: InitLoanAccountInfo
    type: InstructionType.InitLoanAccount
  }
}

export type InitObligationAccountsInstruction = {
  market: string
  marketAuthority: string
  borrower: string
  obligation: string
  tokenProgram: string
  systemProgram: string
}

export type InitObligationInfo = solita.InitObligationInstructionArgs &
  InitObligationAccountsInstruction

export type RawInitObligation = RawInstructionBase & {
  parsed: {
    info: InitObligationInfo
    type: InstructionType.InitObligation
  }
}

export type SetMarketOwnerAccountsInstruction = {
  market: string
  owner: string
}

export type SetMarketOwnerInfo = solita.SetMarketOwnerInstructionArgs &
  SetMarketOwnerAccountsInstruction

export type RawSetMarketOwner = RawInstructionBase & {
  parsed: {
    info: SetMarketOwnerInfo
    type: InstructionType.SetMarketOwner
  }
}

export type SetMarketFlagsAccountsInstruction = {
  market: string
  owner: string
}

export type SetMarketFlagsInfo = solita.SetMarketFlagsInstructionArgs &
  SetMarketFlagsAccountsInstruction

export type RawSetMarketFlags = RawInstructionBase & {
  parsed: {
    info: SetMarketFlagsInfo
    type: InstructionType.SetMarketFlags
  }
}

export type CloseDepositAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  depositNoteMint: string
  depositor: string
  depositAccount: string
  receiverAccount: string
  tokenProgram: string
}

export type CloseDepositAccountInfo =
  solita.CloseDepositAccountInstructionArgs &
    CloseDepositAccountAccountsInstruction

export type RawCloseDepositAccount = RawInstructionBase & {
  parsed: {
    info: CloseDepositAccountInfo
    type: InstructionType.CloseDepositAccount
  }
}

export type CloseCollateralAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  owner: string
  collateralAccount: string
  depositAccount: string
  tokenProgram: string
}

export type CloseCollateralAccountInfo =
  solita.CloseCollateralAccountInstructionArgs &
    CloseCollateralAccountAccountsInstruction

export type RawCloseCollateralAccount = RawInstructionBase & {
  parsed: {
    info: CloseCollateralAccountInfo
    type: InstructionType.CloseCollateralAccount
  }
}

export type CloseLoanAccountAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  owner: string
  loanAccount: string
  tokenProgram: string
}

export type CloseLoanAccountInfo = solita.CloseLoanAccountInstructionArgs &
  CloseLoanAccountAccountsInstruction

export type RawCloseLoanAccount = RawInstructionBase & {
  parsed: {
    info: CloseLoanAccountInfo
    type: InstructionType.CloseLoanAccount
  }
}

export type CloseObligationAccountsInstruction = {
  market: string
  marketAuthority: string
  owner: string
  obligation: string
}

export type CloseObligationInfo = solita.CloseObligationInstructionArgs &
  CloseObligationAccountsInstruction

export type RawCloseObligation = RawInstructionBase & {
  parsed: {
    info: CloseObligationInfo
    type: InstructionType.CloseObligation
  }
}

export type DepositAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  depositNoteMint: string
  depositor: string
  depositAccount: string
  depositSource: string
  tokenProgram: string
}

export type DepositInfo = solita.DepositInstructionArgs &
  DepositAccountsInstruction

export type RawDeposit = RawInstructionBase & {
  parsed: {
    info: DepositInfo
    type: InstructionType.Deposit
  }
}

export type DepositTokensAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  depositNoteMint: string
  depositor: string
  depositNoteAccount: string
  depositSource: string
  tokenProgram: string
}

export type DepositTokensInfo = solita.DepositTokensInstructionArgs &
  DepositTokensAccountsInstruction

export type RawDepositTokens = RawInstructionBase & {
  parsed: {
    info: DepositTokensInfo
    type: InstructionType.DepositTokens
  }
}

export type WithdrawAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  depositNoteMint: string
  depositor: string
  depositAccount: string
  withdrawAccount: string
  tokenProgram: string
}

export type WithdrawInfo = solita.WithdrawInstructionArgs &
  WithdrawAccountsInstruction

export type RawWithdraw = RawInstructionBase & {
  parsed: {
    info: WithdrawInfo
    type: InstructionType.Withdraw
  }
}

export type WithdrawTokensAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  vault: string
  depositNoteMint: string
  depositor: string
  depositNoteAccount: string
  withdrawAccount: string
  tokenProgram: string
}

export type WithdrawTokensInfo = solita.WithdrawTokensInstructionArgs &
  WithdrawTokensAccountsInstruction

export type RawWithdrawTokens = RawInstructionBase & {
  parsed: {
    info: WithdrawTokensInfo
    type: InstructionType.WithdrawTokens
  }
}

export type DepositCollateralAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  obligation: string
  owner: string
  depositAccount: string
  collateralAccount: string
  tokenProgram: string
}

export type DepositCollateralInfo = solita.DepositCollateralInstructionArgs &
  DepositCollateralAccountsInstruction

export type RawDepositCollateral = RawInstructionBase & {
  parsed: {
    info: DepositCollateralInfo
    type: InstructionType.DepositCollateral
  }
}

export type WithdrawCollateralAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  obligation: string
  owner: string
  depositAccount: string
  collateralAccount: string
  tokenProgram: string
}

export type WithdrawCollateralInfo = solita.WithdrawCollateralInstructionArgs &
  WithdrawCollateralAccountsInstruction

export type RawWithdrawCollateral = RawInstructionBase & {
  parsed: {
    info: WithdrawCollateralInfo
    type: InstructionType.WithdrawCollateral
  }
}

export type BorrowAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  reserve: string
  vault: string
  loanNoteMint: string
  borrower: string
  loanAccount: string
  receiverAccount: string
  tokenProgram: string
}

export type BorrowInfo = solita.BorrowInstructionArgs &
  BorrowAccountsInstruction

export type RawBorrow = RawInstructionBase & {
  parsed: {
    info: BorrowInfo
    type: InstructionType.Borrow
  }
}

export type RepayAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  reserve: string
  vault: string
  loanNoteMint: string
  loanAccount: string
  payerAccount: string
  payer: string
  tokenProgram: string
}

export type RepayInfo = solita.RepayInstructionArgs & RepayAccountsInstruction

export type RawRepay = RawInstructionBase & {
  parsed: {
    info: RepayInfo
    type: InstructionType.Repay
  }
}

export type LiquidateAccountsInstruction = {
  market: string
  marketAuthority: string
  obligation: string
  reserve: string
  collateralReserve: string
  vault: string
  loanNoteMint: string
  loanAccount: string
  collateralAccount: string
  payerAccount: string
  receiverAccount: string
  payer: string
  tokenProgram: string
}

export type LiquidateInfo = solita.LiquidateInstructionArgs &
  LiquidateAccountsInstruction

export type RawLiquidate = RawInstructionBase & {
  parsed: {
    info: LiquidateInfo
    type: InstructionType.Liquidate
  }
}

export type MockLiquidateDexAccountsInstruction = {
  sourceMarket: string
  targetMarket: string
  toLiquidate: string
}

export type MockLiquidateDexInfo = MockLiquidateDexAccountsInstruction

export type RawMockLiquidateDex = RawInstructionBase & {
  parsed: {
    info: MockLiquidateDexInfo
    type: InstructionType.MockLiquidateDex
  }
}

export type RefreshReserveAccountsInstruction = {
  market: string
  marketAuthority: string
  reserve: string
  feeNoteVault: string
  depositNoteMint: string
  pythOraclePrice: string
  tokenProgram: string
}

export type RefreshReserveInfo = RefreshReserveAccountsInstruction

export type RawRefreshReserve = RawInstructionBase & {
  parsed: {
    info: RefreshReserveInfo
    type: InstructionType.RefreshReserve
  }
}

export type RawInstructionsInfo =
  | InitMarketInfo
  | InitReserveInfo
  | UpdateReserveConfigInfo
  | InitDepositAccountInfo
  | InitCollateralAccountInfo
  | InitLoanAccountInfo
  | InitObligationInfo
  | SetMarketOwnerInfo
  | SetMarketFlagsInfo
  | CloseDepositAccountInfo
  | CloseCollateralAccountInfo
  | CloseLoanAccountInfo
  | CloseObligationInfo
  | DepositInfo
  | DepositTokensInfo
  | WithdrawInfo
  | WithdrawTokensInfo
  | DepositCollateralInfo
  | WithdrawCollateralInfo
  | BorrowInfo
  | RepayInfo
  | LiquidateInfo
  | MockLiquidateDexInfo
  | RefreshReserveInfo

export type RawInstruction =
  | RawInitMarket
  | RawInitReserve
  | RawUpdateReserveConfig
  | RawInitDepositAccount
  | RawInitCollateralAccount
  | RawInitLoanAccount
  | RawInitObligation
  | RawSetMarketOwner
  | RawSetMarketFlags
  | RawCloseDepositAccount
  | RawCloseCollateralAccount
  | RawCloseLoanAccount
  | RawCloseObligation
  | RawDeposit
  | RawDepositTokens
  | RawWithdraw
  | RawWithdrawTokens
  | RawDepositCollateral
  | RawWithdrawCollateral
  | RawBorrow
  | RawRepay
  | RawLiquidate
  | RawMockLiquidateDex
  | RawRefreshReserve

export type InitMarketEvent = EventBase<InstructionType> & {
  info: InitMarketInfo
  signer: string
  account: string
}

export type InitReserveEvent = EventBase<InstructionType> & {
  info: InitReserveInfo
  signer: string
  account: string
}

export type UpdateReserveConfigEvent = EventBase<InstructionType> & {
  info: UpdateReserveConfigInfo
  signer: string
  account: string
}

export type InitDepositAccountEvent = EventBase<InstructionType> & {
  info: InitDepositAccountInfo
  signer: string
  account: string
}

export type InitCollateralAccountEvent = EventBase<InstructionType> & {
  info: InitCollateralAccountInfo
  signer: string
  account: string
}

export type InitLoanAccountEvent = EventBase<InstructionType> & {
  info: InitLoanAccountInfo
  signer: string
  account: string
}

export type InitObligationEvent = EventBase<InstructionType> & {
  info: InitObligationInfo
  signer: string
  account: string
}

export type SetMarketOwnerEvent = EventBase<InstructionType> & {
  info: SetMarketOwnerInfo
  signer: string
  account: string
}

export type SetMarketFlagsEvent = EventBase<InstructionType> & {
  info: SetMarketFlagsInfo
  signer: string
  account: string
}

export type CloseDepositAccountEvent = EventBase<InstructionType> & {
  info: CloseDepositAccountInfo
  signer: string
  account: string
}

export type CloseCollateralAccountEvent = EventBase<InstructionType> & {
  info: CloseCollateralAccountInfo
  signer: string
  account: string
}

export type CloseLoanAccountEvent = EventBase<InstructionType> & {
  info: CloseLoanAccountInfo
  signer: string
  account: string
}

export type CloseObligationEvent = EventBase<InstructionType> & {
  info: CloseObligationInfo
  signer: string
  account: string
}

export type DepositEvent = EventBase<InstructionType> & {
  info: DepositInfo
  signer: string
  account: string
}

export type DepositTokensEvent = EventBase<InstructionType> & {
  info: DepositTokensInfo
  signer: string
  account: string
}

export type WithdrawEvent = EventBase<InstructionType> & {
  info: WithdrawInfo
  signer: string
  account: string
}

export type WithdrawTokensEvent = EventBase<InstructionType> & {
  info: WithdrawTokensInfo
  signer: string
  account: string
}

export type DepositCollateralEvent = EventBase<InstructionType> & {
  info: DepositCollateralInfo
  signer: string
  account: string
}

export type WithdrawCollateralEvent = EventBase<InstructionType> & {
  info: WithdrawCollateralInfo
  signer: string
  account: string
}

export type BorrowEvent = EventBase<InstructionType> & {
  info: BorrowInfo
  signer: string
  account: string
}

export type RepayEvent = EventBase<InstructionType> & {
  info: RepayInfo
  signer: string
  account: string
}

export type LiquidateEvent = EventBase<InstructionType> & {
  info: LiquidateInfo
  signer: string
  account: string
}

export type MockLiquidateDexEvent = EventBase<InstructionType> & {
  info: MockLiquidateDexInfo
  signer: string
  account: string
}

export type RefreshReserveEvent = EventBase<InstructionType> & {
  info: RefreshReserveInfo
  signer: string
  account: string
}

export type JetEvent =
  | InitMarketEvent
  | InitReserveEvent
  | UpdateReserveConfigEvent
  | InitDepositAccountEvent
  | InitCollateralAccountEvent
  | InitLoanAccountEvent
  | InitObligationEvent
  | SetMarketOwnerEvent
  | SetMarketFlagsEvent
  | CloseDepositAccountEvent
  | CloseCollateralAccountEvent
  | CloseLoanAccountEvent
  | CloseObligationEvent
  | DepositEvent
  | DepositTokensEvent
  | WithdrawEvent
  | WithdrawTokensEvent
  | DepositCollateralEvent
  | WithdrawCollateralEvent
  | BorrowEvent
  | RepayEvent
  | LiquidateEvent
  | MockLiquidateDexEvent
  | RefreshReserveEvent
/*----------------------------------------------------------------------*/

export function getInstructionType(data: Buffer): InstructionType | undefined {
  const discriminator = data.slice(0, 8)
  return IX_METHOD_CODE.get(discriminator.toString('ascii'))
}

export const IX_METHOD_CODE: Map<string, InstructionType | undefined> = new Map<
  string,
  InstructionType | undefined
>([
  [
    Buffer.from(solita.initMarketInstructionDiscriminator).toString('ascii'),
    InstructionType.InitMarket,
  ],
  [
    Buffer.from(solita.initReserveInstructionDiscriminator).toString('ascii'),
    InstructionType.InitReserve,
  ],
  [
    Buffer.from(solita.updateReserveConfigInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateReserveConfig,
  ],
  [
    Buffer.from(solita.initDepositAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InitDepositAccount,
  ],
  [
    Buffer.from(solita.initCollateralAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InitCollateralAccount,
  ],
  [
    Buffer.from(solita.initLoanAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InitLoanAccount,
  ],
  [
    Buffer.from(solita.initObligationInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InitObligation,
  ],
  [
    Buffer.from(solita.setMarketOwnerInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.SetMarketOwner,
  ],
  [
    Buffer.from(solita.setMarketFlagsInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.SetMarketFlags,
  ],
  [
    Buffer.from(solita.closeDepositAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CloseDepositAccount,
  ],
  [
    Buffer.from(solita.closeCollateralAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CloseCollateralAccount,
  ],
  [
    Buffer.from(solita.closeLoanAccountInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CloseLoanAccount,
  ],
  [
    Buffer.from(solita.closeObligationInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CloseObligation,
  ],
  [
    Buffer.from(solita.depositInstructionDiscriminator).toString('ascii'),
    InstructionType.Deposit,
  ],
  [
    Buffer.from(solita.depositTokensInstructionDiscriminator).toString('ascii'),
    InstructionType.DepositTokens,
  ],
  [
    Buffer.from(solita.withdrawInstructionDiscriminator).toString('ascii'),
    InstructionType.Withdraw,
  ],
  [
    Buffer.from(solita.withdrawTokensInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.WithdrawTokens,
  ],
  [
    Buffer.from(solita.depositCollateralInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.DepositCollateral,
  ],
  [
    Buffer.from(solita.withdrawCollateralInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.WithdrawCollateral,
  ],
  [
    Buffer.from(solita.borrowInstructionDiscriminator).toString('ascii'),
    InstructionType.Borrow,
  ],
  [
    Buffer.from(solita.repayInstructionDiscriminator).toString('ascii'),
    InstructionType.Repay,
  ],
  [
    Buffer.from(solita.liquidateInstructionDiscriminator).toString('ascii'),
    InstructionType.Liquidate,
  ],
  [
    Buffer.from(solita.mockLiquidateDexInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.MockLiquidateDex,
  ],
  [
    Buffer.from(solita.refreshReserveInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.RefreshReserve,
  ],
])
export const IX_DATA_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.InitMarket]: solita.initMarketStruct,
  [InstructionType.InitReserve]: solita.initReserveStruct,
  [InstructionType.UpdateReserveConfig]: solita.updateReserveConfigStruct,
  [InstructionType.InitDepositAccount]: solita.initDepositAccountStruct,
  [InstructionType.InitCollateralAccount]: solita.initCollateralAccountStruct,
  [InstructionType.InitLoanAccount]: solita.initLoanAccountStruct,
  [InstructionType.InitObligation]: solita.initObligationStruct,
  [InstructionType.SetMarketOwner]: solita.setMarketOwnerStruct,
  [InstructionType.SetMarketFlags]: solita.setMarketFlagsStruct,
  [InstructionType.CloseDepositAccount]: solita.closeDepositAccountStruct,
  [InstructionType.CloseCollateralAccount]: solita.closeCollateralAccountStruct,
  [InstructionType.CloseLoanAccount]: solita.closeLoanAccountStruct,
  [InstructionType.CloseObligation]: solita.closeObligationStruct,
  [InstructionType.Deposit]: solita.depositStruct,
  [InstructionType.DepositTokens]: solita.depositTokensStruct,
  [InstructionType.Withdraw]: solita.withdrawStruct,
  [InstructionType.WithdrawTokens]: solita.withdrawTokensStruct,
  [InstructionType.DepositCollateral]: solita.depositCollateralStruct,
  [InstructionType.WithdrawCollateral]: solita.withdrawCollateralStruct,
  [InstructionType.Borrow]: solita.borrowStruct,
  [InstructionType.Repay]: solita.repayStruct,
  [InstructionType.Liquidate]: solita.liquidateStruct,
  [InstructionType.MockLiquidateDex]: solita.mockLiquidateDexStruct,
  [InstructionType.RefreshReserve]: solita.refreshReserveStruct,
}

export const IX_ACCOUNTS_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.InitMarket]: solita.InitMarketAccounts,
  [InstructionType.InitReserve]: solita.InitReserveAccounts,
  [InstructionType.UpdateReserveConfig]: solita.UpdateReserveConfigAccounts,
  [InstructionType.InitDepositAccount]: solita.InitDepositAccountAccounts,
  [InstructionType.InitCollateralAccount]: solita.InitCollateralAccountAccounts,
  [InstructionType.InitLoanAccount]: solita.InitLoanAccountAccounts,
  [InstructionType.InitObligation]: solita.InitObligationAccounts,
  [InstructionType.SetMarketOwner]: solita.SetMarketOwnerAccounts,
  [InstructionType.SetMarketFlags]: solita.SetMarketFlagsAccounts,
  [InstructionType.CloseDepositAccount]: solita.CloseDepositAccountAccounts,
  [InstructionType.CloseCollateralAccount]:
    solita.CloseCollateralAccountAccounts,
  [InstructionType.CloseLoanAccount]: solita.CloseLoanAccountAccounts,
  [InstructionType.CloseObligation]: solita.CloseObligationAccounts,
  [InstructionType.Deposit]: solita.DepositAccounts,
  [InstructionType.DepositTokens]: solita.DepositTokensAccounts,
  [InstructionType.Withdraw]: solita.WithdrawAccounts,
  [InstructionType.WithdrawTokens]: solita.WithdrawTokensAccounts,
  [InstructionType.DepositCollateral]: solita.DepositCollateralAccounts,
  [InstructionType.WithdrawCollateral]: solita.WithdrawCollateralAccounts,
  [InstructionType.Borrow]: solita.BorrowAccounts,
  [InstructionType.Repay]: solita.RepayAccounts,
  [InstructionType.Liquidate]: solita.LiquidateAccounts,
  [InstructionType.MockLiquidateDex]: solita.MockLiquidateDexAccounts,
  [InstructionType.RefreshReserve]: solita.RefreshReserveAccounts,
}
