import {
  marketDiscriminator,
  marketBeet,
  obligationDiscriminator,
  obligationBeet,
  reserveDiscriminator,
  reserveBeet,
} from './solita/index.js'

export enum AccountType {
  Market = 'Market',
  Obligation = 'Obligation',
  Reserve = 'Reserve',
}

export const ACCOUNT_DISCRIMINATOR: Record<AccountType, Buffer> = {
  [AccountType.Market]: Buffer.from(marketDiscriminator),
  [AccountType.Obligation]: Buffer.from(obligationDiscriminator),
  [AccountType.Reserve]: Buffer.from(reserveDiscriminator),
}

export const ACCOUNTS_DATA_LAYOUT: Record<AccountType, any> = {
  [AccountType.Market]: marketBeet,
  [AccountType.Obligation]: obligationBeet,
  [AccountType.Reserve]: reserveBeet,
}
