/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type WithdrawCollateralBumpSeeds = {
  collateralAccount: number
  depositAccount: number
}

/**
 * @category userTypes
 * @category generated
 */
export const withdrawCollateralBumpSeedsBeet =
  new beet.BeetArgsStruct<WithdrawCollateralBumpSeeds>(
    [
      ['collateralAccount', beet.u8],
      ['depositAccount', beet.u8],
    ],
    'WithdrawCollateralBumpSeeds',
  )
