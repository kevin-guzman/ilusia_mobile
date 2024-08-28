import { Text } from 'react-native';

import { AppView } from '@presentation/shared/components/AppView';

import { styles } from './styles';
import { Props } from './props.ts';

export const Cart = ({}: Props) => {
  return (
    <AppView>
      <Text>
        Cart
      </Text>
    </AppView>
  );
};
