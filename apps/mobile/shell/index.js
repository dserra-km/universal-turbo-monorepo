/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { withAsyncStartup } from '@module-federation/metro/bootstrap';
import { name as appName } from './app.json';
import './global.css';

AppRegistry.registerComponent(
  appName,
  withAsyncStartup(
    () => require('./src/app')
  )
);
