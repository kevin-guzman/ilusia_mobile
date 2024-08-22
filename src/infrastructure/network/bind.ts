import { Container } from 'inversify';

import { HttpManager, AxiosHttpManager } from './http';
import { DI_KEYS } from '../config/keys';

export const bind = (container: Container) => {
  container.bind<HttpManager>(DI_KEYS.HTTP).to(AxiosHttpManager);
};
