// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { LinkOption } from './types';

import { createDev } from './development';
import { createProduction } from './production';
import { createKusamaRelay, createPolkadotRelay } from './productionRelays';
import { createTesting } from './testing';
import { createRococoRelay, createWestendRelay } from './testingRelays';

export { CUSTOM_ENDPOINT_KEY } from './development';

export function createWsEndpoints (t: TFunction, firstOnly?: boolean): LinkOption[] {
  return [
    // {
    //   isDisabled: false,
    //   isHeader: true,
    //   isSpaced: true,
    //   text: t('rpc.header.live', 'Live networks', { ns: 'apps-config' }),
    //   textBy: '',
    //   value: ''
    // },
    // ...createProduction(t, firstOnly),
    {
      isDisabled: false,
      isHeader: true,
      text: t('rpc.header.test', 'Test networks', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createTesting(t, firstOnly),
    {
      isDevelopment: true,
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('rpc.header.dev', 'Development', { ns: 'apps-config' }),
      textBy: '',
      value: ''
    },
    ...createDev(t)
  ].filter(({ isDisabled }) => !isDisabled);
}
