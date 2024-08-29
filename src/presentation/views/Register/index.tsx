import { useEffect } from 'react';
import { PermissionsAndroid, Text } from 'react-native';

import BackgroundService from 'react-native-background-actions';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

import { AppView } from '@presentation/shared/components/AppView';

import { Props } from './props.ts';

export const Register = ({}: Props) => {
  const hasPermission = (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs to access your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        const backgroundGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
          {
            title: 'Location Permission in background',
            message: 'This app needs to access your location in background.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        resolve(
          granted === PermissionsAndroid.RESULTS.GRANTED &&
            backgroundGranted === PermissionsAndroid.RESULTS.GRANTED,
        );
      } catch (error) {
        console.log('error', error);
        resolve(false);
      }
    });
  };

  const getLocation = async () => {
    const granted = await hasPermission();
    if (!granted) {
      console.log('Permission to access location was denied');
      return;
    }

    console.log('Permission to access location was granted');

    const onSuccess = (position: Geolocation.GeoPosition) => {
      const { altitude, longitude, latitude } = position.coords;
      console.log('POS->', { altitude, longitude, latitude });
    };
    const onError = (error: Geolocation.GeoError) => {
      console.log('onError', error);
    };

    const sleep = (time: any) => new Promise((resolve: any) => setTimeout(() => resolve(), time));

    const backgroundTask = async (taskData: any) => {
      const { delay } = taskData;

      await new Promise(async (resolve) => {
        while (BackgroundService.isRunning()) {
          console.log('Hola mundo-->');
          const id = await Geolocation.watchPosition(onSuccess, onError, {
            enableHighAccuracy: true,
            distanceFilter: 0,
            // interval: 5000,
            // forceRequestLocation: true,
            // forceLocationManager: true,
            // showLocationDialog: true,
            // showsBackgroundLocationIndicator: true,
            // fastestInterval: 5000,
          });

          await sleep(delay);
          await Geolocation.clearWatch(id);
        }
        console.log('Finished task out of while');
      });
    };

    await BackgroundService.start(backgroundTask, {
      taskName: 'getLocation',
      parameters: { delay: 5000 },
      taskTitle: 'ExampleTask',
      taskDesc: 'ExampleTask description',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
    });
  };

  useEffect(() => {
    getLocation();
    //hasPermission();
  }, []);

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
