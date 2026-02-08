const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withUniwindConfig } = require('uniwind/metro');
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

const federatedConfig = withModuleFederation(mergeConfig(getDefaultConfig(__dirname), config), {
  name: 'Shell',
  remotes: {
    Accounts: 'Accounts@http://localhost:8082/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: '19.2.0',
      version: '19.2.0',
    },
    'react-native': {
      singleton: true,
      eager: true,
      requiredVersion: '0.83.0',
      version: '0.83.0',
    },
    'uniwind': {
      singleton: true,
      eager: true,
      requiredVersion: '^1.3.0',
      version: '1.3.0',
    },
    'react-native-reanimated': {
      singleton: true,
      eager: true,
      requiredVersion: '4.2.1',
      version: '4.2.1',
    },
    'react-native-safe-area-context': {
      singleton: true,
      eager: true,
      requiredVersion: '5.6.1',
      version: '5.6.1',
    },
  },
  shareStrategy: 'loaded-first'
},
  {
    flags: {
      unstable_patchHMRClient: true,
      unstable_patchInitializeCore: true,
      unstable_patchRuntimeRequire: true,
    }
  }
);

module.exports = withUniwindConfig(federatedConfig, { cssEntryFile: "./global.css", dtsFile: "./src/uniwind-types.d.ts" });
