const path = require("node:path");
const { withNativeWind } = require("nativewind/metro");
const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("@react-native/metro-config");

const { withModuleFederation } = require("@module-federation/metro");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = {
  resolver: { useWatchman: false },
  watchFolders: [
    path.resolve(__dirname, "../../../node_modules"),
    path.resolve(__dirname, "../../../packages"),
  ],
};

const nativeWindConfig = withNativeWind(getDefaultConfig(__dirname), {
  input: "./global.css",
});

module.exports = withModuleFederation(
  mergeConfig(nativeWindConfig, config),
  {
    name: "accounts",
    filename: "accounts.bundle",
    exposes: {
      "./App": "./src/app",
    },
    shared: {
      react: {
        singleton: true,
        eager: true,
        requiredVersion: "19.1.0",
        version: "19.1.0",
      },
      "react-native": {
        singleton: true,
        eager: true,
        requiredVersion: "0.81.5",
        version: "0.81.5",
      },
    },
    shareStrategy: "loaded-first",
  },
  {
    flags: {
      unstable_patchHMRClient: true,
      unstable_patchInitializeCore: true,
      unstable_patchRuntimeRequire: true,
    },
  },
);
