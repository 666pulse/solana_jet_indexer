import { GraphQLBoolean, GraphQLInt } from 'graphql'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLUnionType,
} from 'graphql'
import { GraphQLBigNumber, GraphQLLong, GraphQLJSON } from '@aleph-indexer/core'
import { InstructionType } from '../utils/layouts/index.js'

// ------------------- TYPES ---------------------------

export const CacheInvalidError = new GraphQLEnumType({
  name: 'CacheInvalidError',
  values: {
    Expired: { value: 'Expired' },
    TooNew: { value: 'TooNew' },
    Invalidated: { value: 'Invalidated' },
  },
})
export const AmountUnits = new GraphQLEnumType({
  name: 'AmountUnits',
  values: {
    Tokens: { value: 'Tokens' },
    DepositNotes: { value: 'DepositNotes' },
    LoanNotes: { value: 'LoanNotes' },
  },
})
export const Rounding = new GraphQLEnumType({
  name: 'Rounding',
  values: {
    Up: { value: 'Up' },
    Down: { value: 'Down' },
  },
})
export const DexSide = new GraphQLEnumType({
  name: 'DexSide',
  values: {
    Bid: { value: 'Bid' },
    Ask: { value: 'Ask' },
  },
})
export const SwapKind = new GraphQLEnumType({
  name: 'SwapKind',
  values: {
    Buy: { value: 'Buy' },
    Sell: { value: 'Sell' },
  },
})
export const Side = new GraphQLEnumType({
  name: 'Side',
  values: {
    Collateral: { value: 'Collateral' },
    Loan: { value: 'Loan' },
  },
})
export const JobCompletion = new GraphQLEnumType({
  name: 'JobCompletion',
  values: {
    Partial: { value: 'Partial' },
    Full: { value: 'Full' },
  },
})
export const Amount = new GraphQLObjectType({
  name: 'Amount',
  fields: {
    units: { type: new GraphQLNonNull(AmountUnits) },
    value: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})
export const DepositCollateralBumpSeeds = new GraphQLObjectType({
  name: 'DepositCollateralBumpSeeds',
  fields: {
    collateralAccount: { type: new GraphQLNonNull(GraphQLInt) },
    depositAccount: { type: new GraphQLNonNull(GraphQLInt) },
  },
})
export const InitReserveBumpSeeds = new GraphQLObjectType({
  name: 'InitReserveBumpSeeds',
  fields: {
    vault: { type: new GraphQLNonNull(GraphQLInt) },
    feeNoteVault: { type: new GraphQLNonNull(GraphQLInt) },
    dexOpenOrders: { type: new GraphQLNonNull(GraphQLInt) },
    dexSwapTokens: { type: new GraphQLNonNull(GraphQLInt) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLInt) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLInt) },
  },
})
export const ReserveConfig = new GraphQLObjectType({
  name: 'ReserveConfig',
  fields: {
    utilizationRate1: { type: new GraphQLNonNull(GraphQLInt) },
    utilizationRate2: { type: new GraphQLNonNull(GraphQLInt) },
    borrowRate0: { type: new GraphQLNonNull(GraphQLInt) },
    borrowRate1: { type: new GraphQLNonNull(GraphQLInt) },
    borrowRate2: { type: new GraphQLNonNull(GraphQLInt) },
    borrowRate3: { type: new GraphQLNonNull(GraphQLInt) },
    minCollateralRatio: { type: new GraphQLNonNull(GraphQLInt) },
    liquidationPremium: { type: new GraphQLNonNull(GraphQLInt) },
    manageFeeCollectionThreshold: {
      type: new GraphQLNonNull(GraphQLBigNumber),
    },
    manageFeeRate: { type: new GraphQLNonNull(GraphQLInt) },
    loanOriginationFee: { type: new GraphQLNonNull(GraphQLInt) },
    reserved0: { type: new GraphQLNonNull(GraphQLInt) },
    confidenceThreshold: { type: new GraphQLNonNull(GraphQLInt) },
    liquidationDexTradeMax: { type: new GraphQLNonNull(GraphQLBigNumber) },
    reserved1: { type: new GraphQLNonNull(GraphQLString) },
  },
})
export const WithdrawCollateralBumpSeeds = new GraphQLObjectType({
  name: 'WithdrawCollateralBumpSeeds',
  fields: {
    collateralAccount: { type: new GraphQLNonNull(GraphQLInt) },
    depositAccount: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

// ------------------- STATS ---------------------------

export const AccessTimeStats = new GraphQLObjectType({
  name: 'AccessTimeStats',
  fields: {
    accesses: { type: new GraphQLNonNull(GraphQLInt) },
    accessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const TotalAccounts = new GraphQLObjectType({
  name: 'TotalAccounts',
  fields: {
    Market: { type: new GraphQLNonNull(GraphQLInt) },
    Obligation: { type: new GraphQLNonNull(GraphQLInt) },
    Reserve: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const GlobalJetStats = new GraphQLObjectType({
  name: 'GlobalJetStats',
  fields: {
    totalAccounts: { type: new GraphQLNonNull(TotalAccounts) },
    totalAccesses: { type: new GraphQLNonNull(GraphQLInt) },
    totalAccessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const JetStats = new GraphQLObjectType({
  name: 'JetStats',
  fields: {
    last1h: { type: AccessTimeStats },
    last24h: { type: AccessTimeStats },
    last7d: { type: AccessTimeStats },
    total: { type: AccessTimeStats },
  },
})

// ------------------- ACCOUNTS ---------------------------

export const AccountsEnum = new GraphQLEnumType({
  name: 'AccountsEnum',
  values: {
    Market: { value: 'Market' },
    Obligation: { value: 'Obligation' },
    Reserve: { value: 'Reserve' },
  },
})
export const Market = new GraphQLObjectType({
  name: 'Market',
  fields: {
    version: { type: new GraphQLNonNull(GraphQLInt) },
    quoteExponent: { type: new GraphQLNonNull(GraphQLInt) },
    quoteCurrency: { type: new GraphQLNonNull(GraphQLString) },
    authorityBumpSeed: { type: new GraphQLNonNull(GraphQLString) },
    authoritySeed: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    quoteTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    flags: { type: new GraphQLNonNull(GraphQLBigNumber) },
    reserved: { type: new GraphQLNonNull(GraphQLString) },
    reserves: { type: new GraphQLNonNull(GraphQLString) },
  },
})
export const Obligation = new GraphQLObjectType({
  name: 'Obligation',
  fields: {
    version: { type: new GraphQLNonNull(GraphQLInt) },
    reserved0: { type: new GraphQLNonNull(GraphQLInt) },
    market: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    reserved1: { type: new GraphQLNonNull(GraphQLString) },
    cached: { type: new GraphQLNonNull(GraphQLString) },
    collateral: { type: new GraphQLNonNull(GraphQLString) },
    loans: { type: new GraphQLNonNull(GraphQLString) },
  },
})
export const Reserve = new GraphQLObjectType({
  name: 'Reserve',
  fields: {
    version: { type: new GraphQLNonNull(GraphQLInt) },
    index: { type: new GraphQLNonNull(GraphQLInt) },
    exponent: { type: new GraphQLNonNull(GraphQLInt) },
    market: { type: new GraphQLNonNull(GraphQLString) },
    pythOraclePrice: { type: new GraphQLNonNull(GraphQLString) },
    pythOracleProduct: { type: new GraphQLNonNull(GraphQLString) },
    tokenMint: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    feeNoteVault: { type: new GraphQLNonNull(GraphQLString) },
    dexSwapTokens: { type: new GraphQLNonNull(GraphQLString) },
    dexOpenOrders: { type: new GraphQLNonNull(GraphQLString) },
    dexMarket: { type: new GraphQLNonNull(GraphQLString) },
    reserved0: { type: new GraphQLNonNull(GraphQLString) },
    config: { type: new GraphQLNonNull(ReserveConfig) },
    reserved1: { type: new GraphQLNonNull(GraphQLString) },
    state: { type: new GraphQLNonNull(GraphQLString) },
  },
})
export const ParsedAccountsData = new GraphQLUnionType({
  name: 'ParsedAccountsData',
  types: [Market, Obligation, Reserve],
  resolveType: (obj) => {
    // here is selected a unique property of each account to discriminate between types
    if (obj.reserves) {
      return 'Market'
    }
    if (obj.loans) {
      return 'Obligation'
    }
    if (obj.state) {
      return 'Reserve'
    }
  },
})

const commonAccountInfoFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  programId: { type: new GraphQLNonNull(GraphQLString) },
  address: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(AccountsEnum) },
}

const Account = new GraphQLInterfaceType({
  name: 'Account',
  fields: {
    ...commonAccountInfoFields,
  },
})

export const JetAccountsInfo = new GraphQLObjectType({
  name: 'JetAccountsInfo',
  interfaces: [Account],
  fields: {
    ...commonAccountInfoFields,
    data: { type: new GraphQLNonNull(ParsedAccountsData) },
  },
})

export const AccountsInfo = new GraphQLList(JetAccountsInfo)

// ------------------- EVENTS --------------------------

export const JetEvent = new GraphQLEnumType({
  name: 'JetEvent',
  values: {
    InitMarket: { value: 'InitMarket' },
    InitReserve: { value: 'InitReserve' },
    UpdateReserveConfig: { value: 'UpdateReserveConfig' },
    InitDepositAccount: { value: 'InitDepositAccount' },
    InitCollateralAccount: { value: 'InitCollateralAccount' },
    InitLoanAccount: { value: 'InitLoanAccount' },
    InitObligation: { value: 'InitObligation' },
    SetMarketOwner: { value: 'SetMarketOwner' },
    SetMarketFlags: { value: 'SetMarketFlags' },
    CloseDepositAccount: { value: 'CloseDepositAccount' },
    CloseCollateralAccount: { value: 'CloseCollateralAccount' },
    CloseLoanAccount: { value: 'CloseLoanAccount' },
    CloseObligation: { value: 'CloseObligation' },
    Deposit: { value: 'Deposit' },
    DepositTokens: { value: 'DepositTokens' },
    Withdraw: { value: 'Withdraw' },
    WithdrawTokens: { value: 'WithdrawTokens' },
    DepositCollateral: { value: 'DepositCollateral' },
    WithdrawCollateral: { value: 'WithdrawCollateral' },
    Borrow: { value: 'Borrow' },
    Repay: { value: 'Repay' },
    Liquidate: { value: 'Liquidate' },
    MockLiquidateDex: { value: 'MockLiquidateDex' },
    RefreshReserve: { value: 'RefreshReserve' },
  },
})

const commonEventFields = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  timestamp: { type: GraphQLLong },
  type: { type: new GraphQLNonNull(JetEvent) },
  account: { type: new GraphQLNonNull(GraphQLString) },
  signer: { type: new GraphQLNonNull(GraphQLString) },
}

const Event = new GraphQLInterfaceType({
  name: 'Event',
  fields: {
    ...commonEventFields,
  },
})

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export const InitMarketInfo = new GraphQLObjectType({
  name: 'InitMarketInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    quoteCurrency: { type: new GraphQLNonNull(GraphQLString) },
    quoteTokenMint: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const InitMarketEvent = new GraphQLObjectType({
  name: 'InitMarketEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitMarket,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitMarketInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const InitReserveInfo = new GraphQLObjectType({
  name: 'InitReserveInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    feeNoteVault: { type: new GraphQLNonNull(GraphQLString) },
    dexSwapTokens: { type: new GraphQLNonNull(GraphQLString) },
    dexOpenOrders: { type: new GraphQLNonNull(GraphQLString) },
    dexMarket: { type: new GraphQLNonNull(GraphQLString) },
    tokenMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    dexProgram: { type: new GraphQLNonNull(GraphQLString) },
    oraclePrice: { type: new GraphQLNonNull(GraphQLString) },
    oracleProduct: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    quoteTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(InitReserveBumpSeeds) },
    config: { type: new GraphQLNonNull(ReserveConfig) },
  },
})

export const InitReserveEvent = new GraphQLObjectType({
  name: 'InitReserveEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitReserve,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitReserveInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateReserveConfigInfo = new GraphQLObjectType({
  name: 'UpdateReserveConfigInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    newConfig: { type: new GraphQLNonNull(ReserveConfig) },
  },
})

export const UpdateReserveConfigEvent = new GraphQLObjectType({
  name: 'UpdateReserveConfigEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateReserveConfig,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(UpdateReserveConfigInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const InitDepositAccountInfo = new GraphQLObjectType({
  name: 'InitDepositAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InitDepositAccountEvent = new GraphQLObjectType({
  name: 'InitDepositAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitDepositAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitDepositAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const InitCollateralAccountInfo = new GraphQLObjectType({
  name: 'InitCollateralAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    collateralAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InitCollateralAccountEvent = new GraphQLObjectType({
  name: 'InitCollateralAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitCollateralAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitCollateralAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const InitLoanAccountInfo = new GraphQLObjectType({
  name: 'InitLoanAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    loanAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InitLoanAccountEvent = new GraphQLObjectType({
  name: 'InitLoanAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitLoanAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitLoanAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const InitObligationInfo = new GraphQLObjectType({
  name: 'InitObligationInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    borrower: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InitObligationEvent = new GraphQLObjectType({
  name: 'InitObligationEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitObligation,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(InitObligationInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const SetMarketOwnerInfo = new GraphQLObjectType({
  name: 'SetMarketOwnerInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    newOwner: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const SetMarketOwnerEvent = new GraphQLObjectType({
  name: 'SetMarketOwnerEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.SetMarketOwner,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(SetMarketOwnerInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const SetMarketFlagsInfo = new GraphQLObjectType({
  name: 'SetMarketFlagsInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    flags: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const SetMarketFlagsEvent = new GraphQLObjectType({
  name: 'SetMarketFlagsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.SetMarketFlags,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(SetMarketFlagsInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const CloseDepositAccountInfo = new GraphQLObjectType({
  name: 'CloseDepositAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    receiverAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CloseDepositAccountEvent = new GraphQLObjectType({
  name: 'CloseDepositAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CloseDepositAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(CloseDepositAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const CloseCollateralAccountInfo = new GraphQLObjectType({
  name: 'CloseCollateralAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    collateralAccount: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CloseCollateralAccountEvent = new GraphQLObjectType({
  name: 'CloseCollateralAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CloseCollateralAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(CloseCollateralAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const CloseLoanAccountInfo = new GraphQLObjectType({
  name: 'CloseLoanAccountInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    loanAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CloseLoanAccountEvent = new GraphQLObjectType({
  name: 'CloseLoanAccountEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CloseLoanAccount,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(CloseLoanAccountInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const CloseObligationInfo = new GraphQLObjectType({
  name: 'CloseObligationInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CloseObligationEvent = new GraphQLObjectType({
  name: 'CloseObligationEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CloseObligation,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(CloseObligationInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const DepositInfo = new GraphQLObjectType({
  name: 'DepositInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    depositSource: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const DepositEvent = new GraphQLObjectType({
  name: 'DepositEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Deposit,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(DepositInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const DepositTokensInfo = new GraphQLObjectType({
  name: 'DepositTokensInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteAccount: { type: new GraphQLNonNull(GraphQLString) },
    depositSource: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const DepositTokensEvent = new GraphQLObjectType({
  name: 'DepositTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.DepositTokens,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(DepositTokensInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const WithdrawInfo = new GraphQLObjectType({
  name: 'WithdrawInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    withdrawAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const WithdrawEvent = new GraphQLObjectType({
  name: 'WithdrawEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Withdraw,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(WithdrawInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const WithdrawTokensInfo = new GraphQLObjectType({
  name: 'WithdrawTokensInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    depositor: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteAccount: { type: new GraphQLNonNull(GraphQLString) },
    withdrawAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const WithdrawTokensEvent = new GraphQLObjectType({
  name: 'WithdrawTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.WithdrawTokens,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(WithdrawTokensInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const DepositCollateralInfo = new GraphQLObjectType({
  name: 'DepositCollateralInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    collateralAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(DepositCollateralBumpSeeds) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const DepositCollateralEvent = new GraphQLObjectType({
  name: 'DepositCollateralEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.DepositCollateral,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(DepositCollateralInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const WithdrawCollateralInfo = new GraphQLObjectType({
  name: 'WithdrawCollateralInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    owner: { type: new GraphQLNonNull(GraphQLString) },
    depositAccount: { type: new GraphQLNonNull(GraphQLString) },
    collateralAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(WithdrawCollateralBumpSeeds) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const WithdrawCollateralEvent = new GraphQLObjectType({
  name: 'WithdrawCollateralEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.WithdrawCollateral,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(WithdrawCollateralInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const BorrowInfo = new GraphQLObjectType({
  name: 'BorrowInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    borrower: { type: new GraphQLNonNull(GraphQLString) },
    loanAccount: { type: new GraphQLNonNull(GraphQLString) },
    receiverAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const BorrowEvent = new GraphQLObjectType({
  name: 'BorrowEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Borrow,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(BorrowInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const RepayInfo = new GraphQLObjectType({
  name: 'RepayInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    loanAccount: { type: new GraphQLNonNull(GraphQLString) },
    payerAccount: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(Amount) },
  },
})

export const RepayEvent = new GraphQLObjectType({
  name: 'RepayEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Repay,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(RepayInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const LiquidateInfo = new GraphQLObjectType({
  name: 'LiquidateInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    obligation: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    collateralReserve: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    loanNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    loanAccount: { type: new GraphQLNonNull(GraphQLString) },
    collateralAccount: { type: new GraphQLNonNull(GraphQLString) },
    payerAccount: { type: new GraphQLNonNull(GraphQLString) },
    receiverAccount: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(Amount) },
    minCollateral: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const LiquidateEvent = new GraphQLObjectType({
  name: 'LiquidateEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Liquidate,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(LiquidateInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const MockLiquidateDexInfo = new GraphQLObjectType({
  name: 'MockLiquidateDexInfo',
  fields: {
    sourceMarket: { type: new GraphQLNonNull(GraphQLString) },
    targetMarket: { type: new GraphQLNonNull(GraphQLString) },
    toLiquidate: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const MockLiquidateDexEvent = new GraphQLObjectType({
  name: 'MockLiquidateDexEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.MockLiquidateDex,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(MockLiquidateDexInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const RefreshReserveInfo = new GraphQLObjectType({
  name: 'RefreshReserveInfo',
  fields: {
    market: { type: new GraphQLNonNull(GraphQLString) },
    marketAuthority: { type: new GraphQLNonNull(GraphQLString) },
    reserve: { type: new GraphQLNonNull(GraphQLString) },
    feeNoteVault: { type: new GraphQLNonNull(GraphQLString) },
    depositNoteMint: { type: new GraphQLNonNull(GraphQLString) },
    pythOraclePrice: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const RefreshReserveEvent = new GraphQLObjectType({
  name: 'RefreshReserveEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.RefreshReserve,
  fields: {
    ...commonEventFields,
    info: { type: new GraphQLNonNull(RefreshReserveInfo) },
  },
})

/*----------------------------------------------------------------------*/

export const Events = new GraphQLList(Event)

export const types = [
  InitMarketEvent,
  InitReserveEvent,
  UpdateReserveConfigEvent,
  InitDepositAccountEvent,
  InitCollateralAccountEvent,
  InitLoanAccountEvent,
  InitObligationEvent,
  SetMarketOwnerEvent,
  SetMarketFlagsEvent,
  CloseDepositAccountEvent,
  CloseCollateralAccountEvent,
  CloseLoanAccountEvent,
  CloseObligationEvent,
  DepositEvent,
  DepositTokensEvent,
  WithdrawEvent,
  WithdrawTokensEvent,
  DepositCollateralEvent,
  WithdrawCollateralEvent,
  BorrowEvent,
  RepayEvent,
  LiquidateEvent,
  MockLiquidateDexEvent,
  RefreshReserveEvent,
]
