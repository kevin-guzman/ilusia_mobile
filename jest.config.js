require('reflect-metadata');

module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['/__utils__/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|@react-native|react-native-vector-icons)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
