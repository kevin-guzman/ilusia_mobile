import { Container } from 'inversify';

import { bind as networkBind } from '../network/bind';
import { bind as localStorageBind } from '../storage/bind';

export const container = new Container();
networkBind(container);
localStorageBind(container);