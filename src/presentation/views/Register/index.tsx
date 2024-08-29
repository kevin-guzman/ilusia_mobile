import { Text } from 'react-native';

import MapView from 'react-native-maps';

import { AppView } from '@presentation/shared/components/AppView';

import { Props } from './props.ts';

export const Register = ({}: Props) => {
  return (
    <AppView>
      <Text>Register</Text>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      />
    </AppView>
  );
};
