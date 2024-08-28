import { TouchableOpacity, Text } from 'react-native';

import { Props } from './props';
import { styles } from './styles';

export const FooterButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  );
}
