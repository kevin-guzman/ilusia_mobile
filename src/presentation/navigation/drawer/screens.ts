import { routes } from '../routes';

export type contentElement = {
  title?: string;
  navigation: string;
};

export const contentList: contentElement[] = [
  {
    title: 'ProvidersList',
    navigation: routes.ProvidersList,
  },
  {
    title: 'Provider',
    navigation: routes.Provider,
  },
];
