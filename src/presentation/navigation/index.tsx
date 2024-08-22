import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { routes, routesTitles, RootStackParamList } from './routes';

import { DrawerContent, DrawerMenu, DrawerProvider } from './drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstScreen } from '../views/FisrtScreen';
import { Login } from '../views/Login';
import { Register } from '../views/Register';
import { Provider } from '../views/Provider';
import { ProvidersList } from '../views/ProvidersList';

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();
export const AppNavigator = ({ }) => {
  return (
    <NavigationContainer>
      <FirstStack />
      <ApplicationStack />

    </NavigationContainer>
  );
};

const FirstStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.FirstScreen} component={FirstScreen} />
      <Stack.Screen name={routes.Login} component={Login} />
      <Stack.Screen name={routes.Register} component={Register} />
    </Stack.Navigator>
  );
};

const ApplicationStack = () => {
  return (
    <DrawerProvider>
      <SafeAreaView />
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'black' },
          headerTitle: ({ }) => {
            const { name } = useRoute();
            return (
              <Text style={{ color: 'white', fontStyle: 'italic' }}>
                {routesTitles[name as routes]}
              </Text>
            );
          },
          headerTintColor: 'white',
          headerLeft: ({ }) => <DrawerMenu navigation={navigation} />,
        })}
        drawerContent={DrawerContent}
        initialRouteName={routes.Provider}>
        <Drawer.Screen name={routes.Provider} component={Provider} />
        <Drawer.Screen name={routes.ProvidersList} component={ProvidersList} />
      </Drawer.Navigator>
    </DrawerProvider>
  )
};

const SettingsStack = () => { };