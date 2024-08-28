module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-transform-class-static-block'],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@infra': './src/infrastructure',
          '@domain': './src/domain',
          '@presentation': './src/presentation',
          '@config': './src/infrastructure/config',
          '@components': './src/presentation/shared/components',
          '@hooks': './src/presentation/shared/hooks',
          '@views': './src/presentation/views',
          '@assets': './src/presentation/shared/assets',
        },
      },
    ],
  ],
};
