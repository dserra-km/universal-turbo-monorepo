const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { withModuleFederation } = require('@module-federation/metro');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: { useWatchman: false },
  watchFolders: [
    path.resolve(__dirname, '../../../node_modules'),
    path.resolve(__dirname, '../../../packages'),
  ],
};

const nativeConfig = withNativeWind(mergeConfig(getDefaultConfig(__dirname), config), { input: "./global.css" });

module.exports = withModuleFederation(nativeConfig, {
  name: 'Accounts',
  filename: 'accounts.bundle',
  exposes: {
    './App': 'App.tsx',
  },
  shared: {
    react: {
      singleton: true,
      eager: false,
      requiredVersion: '19.2.0',
      version: '19.2.0',
      import: false,
    },
    'react-native': {
      singleton: true,
      eager: false,
      requiredVersion: '0.83.0',
      version: '0.83.0',
      import: false,
    },
  },
  shareStrategy: 'version-first'
},
  {
    flags: {
      unstable_patchHMRClient: true,
      unstable_patchInitializeCore: true,
      unstable_patchRuntimeRequire: true,
    }
  }
);
