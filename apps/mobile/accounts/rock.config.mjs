import { platformIOS } from '@rock-js/platform-ios';
import { platformAndroid } from '@rock-js/platform-android';
import { pluginMetro } from '@rock-js/plugin-metro';
import { pluginMetroModuleFederation } from '@module-federation/metro-plugin-rnef';

export default {
  bundler: pluginMetro(),
  platforms: {
    ios: platformIOS(),
    android: platformAndroid(),
  },
  plugins: [pluginMetroModuleFederation()]
};
