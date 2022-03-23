// Copyright 2017-2022 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { BN } from '@polkadot/util';
import type { SortedTargets } from '../types';

import React, { useEffect } from 'react';

import CurrentList from './CurrentList';

interface Props {
  className?: string;
  favorites: string[];
  hasQueries: boolean;
  isIntentions?: boolean;
  minCommission?: BN;
  paraValidators?: Record<string, boolean>;
  stakingOverview?: DeriveStakingOverview;
  targets: SortedTargets;
  toggleFavorite: (address: string) => void;
  toggleLedger?: () => void;
}

function Overview ({ className = '', favorites, hasQueries, isIntentions, minCommission, paraValidators, stakingOverview, targets, toggleFavorite, toggleLedger }: Props): React.ReactElement<Props> {
  useEffect((): void => {
    toggleLedger && toggleLedger();
  }, [toggleLedger]);

  return (
    <div className={`staking--Overview ${className}`}>
      <CurrentList
        favorites={favorites}
        hasQueries={hasQueries}
        isIntentions={isIntentions}
        minCommission={minCommission}
        paraValidators={paraValidators}
        stakingOverview={stakingOverview}
        targets={targets}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default React.memo(Overview);
