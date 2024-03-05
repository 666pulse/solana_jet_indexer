/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
/**
 * This type is used to derive the {@link CacheInvalidError} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link CacheInvalidError} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type CacheInvalidErrorRecord = {
  Expired: { msg: string }
  TooNew: { msg: string }
  Invalidated: void /* scalar variant */
}

/**
 * Union type respresenting the CacheInvalidError data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isCacheInvalidError*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type CacheInvalidError = beet.DataEnumKeyAsKind<CacheInvalidErrorRecord>

export const isCacheInvalidErrorExpired = (
  x: CacheInvalidError,
): x is CacheInvalidError & { __kind: 'Expired' } => x.__kind === 'Expired'
export const isCacheInvalidErrorTooNew = (
  x: CacheInvalidError,
): x is CacheInvalidError & { __kind: 'TooNew' } => x.__kind === 'TooNew'
export const isCacheInvalidErrorInvalidated = (
  x: CacheInvalidError,
): x is CacheInvalidError & { __kind: 'Invalidated' } =>
  x.__kind === 'Invalidated'

/**
 * @category userTypes
 * @category generated
 */
export const cacheInvalidErrorBeet = beet.dataEnum<CacheInvalidErrorRecord>([
  [
    'Expired',
    new beet.FixableBeetArgsStruct<CacheInvalidErrorRecord['Expired']>(
      [['msg', beet.utf8String]],
      'CacheInvalidErrorRecord["Expired"]',
    ),
  ],

  [
    'TooNew',
    new beet.FixableBeetArgsStruct<CacheInvalidErrorRecord['TooNew']>(
      [['msg', beet.utf8String]],
      'CacheInvalidErrorRecord["TooNew"]',
    ),
  ],
  ['Invalidated', beet.unit],
]) as beet.FixableBeet<CacheInvalidError, CacheInvalidError>
