import { SafeAreaView } from 'react-native';

import { styles } from './styles';
import { Props } from './props.ts';

export const AppView = ({ children, style, name }: Props) => {
  return (
    <SafeAreaView style={{ ...styles.container, ...style }} >
      {children}
    </SafeAreaView>
  );
};