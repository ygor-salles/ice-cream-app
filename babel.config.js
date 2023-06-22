module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~cache': './src/infrastucture/cache',
            '~models': './src/infrastucture/models',
            '~services': './src/infrastucture/services',
            '~components': './src/presentation/components',
            '~constants': './src/presentation/constants',
            '~contexts': './src/presentation/contexts',
            '~screens': './src/presentation/screens',
            '~hooks': './src/presentation/hooks',
            '~images': './src/presentation/images',
            '~routes': './src/presentation/routes',
            '~styles': './src/presentation/styles',
            '~types': './src/presentation/types',
            '~utils': './src/presentation/utils',
          },
        },
      ],
    ],
  };
};
