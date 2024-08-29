import { Text, TouchableOpacity } from 'react-native';

import { Props } from './props.ts';
import { styles } from './styles';

export const FormButton = ({
  handleSubmit,
  customPressHandler,
  disabled,
  label,
  testID,
}: Props) => {
  const onPress = () => {
    if (customPressHandler) {
      customPressHandler();
      return;
    }
    handleSubmit();
  };

  return (
    <TouchableOpacity
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
