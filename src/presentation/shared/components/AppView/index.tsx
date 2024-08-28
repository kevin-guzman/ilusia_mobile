import { SafeAreaView } from 'react-native';

import { Props } from './props.ts';
import { styles } from './styles';

export const AppView = ({ children, style, name }: Props) => {
  return <SafeAreaView style={{ ...styles.container, ...style }}>{children}</SafeAreaView>;
};
