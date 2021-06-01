// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      minmax: [0, undefined],
      types: {
        BalanceUnlockPercent: 'u8',
        BlockNumberFor: 'u32',
        LockIdentifier: '[u8; 8]',
        RoundId: 'u32',
        BalanceLockSetting: {
          unlock_percents: 'Vec<BalanceUnlockPercent>',
          lock_durations: 'Vec<BlockNumber>',
          lock_identifiers: 'Vec<LockIdentifier>',
          min_transfer_amount: 'Option<Balance>',
          max_transfer_amount: 'Option<Balance>'
        }
      }
    }
  ]
};

export default definitions;
