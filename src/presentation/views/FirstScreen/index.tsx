import { Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { IlusiaVideoView } from "@presentation/shared/components/IlusiaVideoView";

import { routes } from "@presentation/navigation/routes";
import { styles } from './styles.ts';
import { Props } from './props.ts';
import { FooterButton } from './components/FooterButton/index.tsx';

export const FirstScreen = ({}: Props) => {
  const { navigate } = useNavigation();

  return (
    <IlusiaVideoView style={styles.container} >
      <View ><Text>Holaa</Text></View>
      <View></View>
      <View style={styles.footer} >
        <FooterButton text="Ya soy usuario" onPress={() => navigate(routes.Login as never)} />
        <FooterButton text="Registrarme ahora" onPress={() => navigate(routes.Register as never)} />
      </View>
    </IlusiaVideoView>
  );
};
