import { Container } from 'inversify';

import {
  LocalStorageManager,
  RNLocalStorageManager,
} from './local';
import { DI_KEYS } from '@config/keys';

export const bind = (container: Container) => {
  container
    .bind<LocalStorageManager>(DI_KEYS.LOCAL_STORAGE)
    .to(RNLocalStorageManager);
};