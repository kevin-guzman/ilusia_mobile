import { Container } from 'inversify';

import { DI_KEYS } from '@config/keys';

import { LocalStorageManager, RNLocalStorageManager } from './local';

export const bind = (container: Container) => {
  container.bind<LocalStorageManager>(DI_KEYS.LOCAL_STORAGE).to(RNLocalStorageManager);
};
