module.exports = {
  presets: [
    ['module:@react-native/babel-preset', { 
      jsxImportSource: 'react-native-css-interop' 
    }],
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
