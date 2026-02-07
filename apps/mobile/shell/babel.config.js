module.exports = {
  presets: [
    ['module:@react-native/babel-preset', { 
      jsxImportSource: 'react-native-css-interop' 
    }],
    'nativewind/babel',
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
