import { Text } from 'react-native';

import { AppView } from '@presentation/shared/components/AppView';

import { Props } from './props.ts';

export const Provider = ({}: Props) => {
  return (
    <AppView>
      <Text>Provider</Text>
    </AppView>
  );
};
