/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type DepositCollateralBumpSeeds = {
  collateralAccount: number
  depositAccount: number
}

/**
 * @category userTypes
 * @category generated
 */
export const depositCollateralBumpSeedsBeet =
  new beet.BeetArgsStruct<DepositCollateralBumpSeeds>(
    [
      ['collateralAccount', beet.u8],
      ['depositAccount', beet.u8],
    ],
    'DepositCollateralBumpSeeds',
  )
