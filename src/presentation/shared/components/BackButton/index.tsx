import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Props } from './props.ts';
import { styles } from './styles';

export const BackButton = ({ customBackHandler, onBackPress }: Props) => {
  const { goBack, canGoBack } = useNavigation();
  const onPress = () => {
    if (customBackHandler) {
      customBackHandler();
      return;
    }

    if (canGoBack()) {
      goBack();
    }
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Entypo name="chevron-thin-left" size={20} color="white" />
    </TouchableOpacity>
  );
};
