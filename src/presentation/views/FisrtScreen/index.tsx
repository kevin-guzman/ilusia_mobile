import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { routes } from "../../navigation/routes";

export const FirstScreen = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }} >
      <View><Text>Holaa</Text></View>
      <View></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor:'black', opacity: 0.2, paddingVertical:15 }} >
        <TouchableOpacity onPress={() => navigate(routes.Login as never)} >
          <Text style={{ color: 'white' }} >
          Ya soy usuario
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(routes.Register as never)} >
          <Text style={{ color: 'white' }} >
          Registrarme ahora
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}