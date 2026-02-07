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

module.exports = withModuleFederation(nativeConfig,
  {
    name: 'Accounts',
    filename: 'accounts.bundle',
    exposes: {
      './App': './src/app',
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
      'nativewind': {
        singleton: true,
        eager: false,
        requiredVersion: '^4.1.23',
        version: '4.1.23',
        import: false,
      },
      'react-native-reanimated': {
        singleton: true,
        eager: false,
        requiredVersion: '4.2.1',
        version: '4.2.1',
        import: false,
      },
      'react-native-safe-area-context': {
        singleton: true,
        eager: false,
        requiredVersion: '5.6.1',
        version: '5.6.1',
        import: false,
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
