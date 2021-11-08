// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  alias: {
  },
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
    }, {
      minmax: [0, undefined],
      types: {
        'chainbridge::ChainId': 'u8',
        ChainId: 'u8',
        ResourceId: '[u8; 32]',
        DepositNonce: 'u64',
        ProposalVotes: {
          votes_for: 'Vec<AccountId>',
          votes_against: 'Vec<AccountId>',
          status: 'enum'
        },
        Erc721Token: {
          id: 'TokenId',
          metadata: 'Vec<u8>'
        },
        TokenId: 'U256',
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress'
      }
    }, {
      minmax: [0, undefined],
      types: {
        TokenSymbol: {
          _enum: {
            Native: null,
            Token: '(TokenInfo)'
          }
        },
        CurrencyId: {
          _enum: {
            Token: '(TokenSymbol)',
            DexShare: '(DexShare, DexShare)'
          }
        },
        DexShare: {
          _enum: {
            Token: '(TokenSymbol)'
          }
        },
        TokenInfo: {
          id: 'u32'
        },
        CurrencyIdOf: 'CurrencyId',
        AssetId: 'CurrencyId',
        TAssetBalance: 'u128',
        AssetBalance: {
          free: 'Balance',
          reserved: 'Balance',
          is_frozen: 'bool',
          sufficient: 'bool',
          extra: '()'
        },
        TradingPair: '(CurrencyId, CurrencyId)',
        TradingPairStatus: {
          _enum: {
            Disabled: null,
            Enabled: null,
            Provisioning: '(ProvisioningParameters)'
          }
        },
        ProvisioningParameters: {
          minimum_contribution: '(Balance, Balance)',
          target_contribution: '(Balance, Balance)',
          accumulated_contribution: '(Balance, Balance)'
        }
      }
    }
  ]
};

export default definitions;
