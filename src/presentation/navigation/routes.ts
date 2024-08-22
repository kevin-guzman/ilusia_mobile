export enum routes {
  Login = 'Login',
  Register = 'Register',
  ProvidersList = 'ProvidersList',
  PostalCodeSelection = 'PostalCodeSelection',
  Provider = 'Provider',
  FirstScreen = 'FirstScreen',
}

export const routesTitles: Record<routes, string> = {
  [routes.Login]: 'Login',
  [routes.Register]: 'Register',
  [routes.ProvidersList]: 'ProvidersList',
  [routes.PostalCodeSelection]: 'Postal Code Selection',
  [routes.Provider]: 'Provider',
  [routes.FirstScreen]: 'First Screen',
};

export type RootStackParamList = {
  [routes.Login]: undefined;
  [routes.Register]: undefined;
  [routes.ProvidersList]: undefined;
  [routes.PostalCodeSelection]: undefined;
  [routes.Provider]: undefined;
  [routes.FirstScreen]: undefined;
};