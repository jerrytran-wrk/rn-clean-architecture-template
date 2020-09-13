module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          // Top Level alias
          '@assets': './assets',
          '@presentation': './src/presentation',
          '@core': './src/core',
          '@domain': './src/domain',
          '@data': './src/data',
          '@di': './src/di',
          // Presentation level alias
          '@hocs': './src/presentation/hoc',
          '@hooks': './src/presentation/hook',
          '@components': './src/presentation/component',
          '@containers': './src/presentation/container',
          '@shared-state': './src/presentation/shared-state',
          '@resources': './src/presentation/resource',
          '@storyboards': './src/presentation/storyboard',
          '@navigation': './src/presentation/navigation',
          // development
          '@mocks': './__mocks__',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
