/**
 * @format
 */
import { AppRegistry } from 'react-native';

import 'reflect-metadata';

import App from './App';
import { name as appName } from './app.json';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => App);
