module.exports = {
    preset: 'react-native',
    silent: false,
    verbose: false,
    roots: ['<rootDir>'],
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.test.{ts,tsx}',
      '!src/**/test/**',
      '!src/**/__tests__/**',
      '!src/**/__fixtures__/**',
      '!src/**/__mocks__/**',
    ],
    transform: {
      '\\.(ts|tsx)$': 'babel-jest',
      '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
      '\\.(aac|eot|gif|jpeg|jpg|m4a|mp3|mp4|oga|otf|png|svg|ttf|wav|webm|webp|woff|woff2)$':
        '<rootDir>/fileTransformer.js',
    },
  };
  