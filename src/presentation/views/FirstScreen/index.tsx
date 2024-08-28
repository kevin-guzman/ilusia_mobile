import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { IlusiaVideoView } from '@components/IlusiaVideoView';
import { routes } from '@presentation/navigation/routes';

import { FooterButton } from './components/FooterButton/index.tsx';
import { Props } from './props.ts';
import { styles } from './styles.ts';

export const FirstScreen = ({}: Props) => {
  const { navigate } = useNavigation();

  return (
    <IlusiaVideoView style={styles.container}>
      <View>
        <Text>Holaa</Text>
      </View>
      <View></View>
      <View style={styles.footer}>
        <FooterButton text="Ya soy usuario" onPress={() => navigate(routes.Login as never)} />
        <FooterButton text="Registrarme ahora" onPress={() => navigate(routes.Register as never)} />
      </View>
    </IlusiaVideoView>
  );
};
