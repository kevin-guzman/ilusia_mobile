import { Container } from 'inversify';

import { DI_KEYS } from '@config/keys';

import { AxiosHttpManager, HttpManager } from './http';

export const bind = (container: Container) => {
  container.bind<HttpManager>(DI_KEYS.HTTP).to(AxiosHttpManager);
};
