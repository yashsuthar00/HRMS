export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
};
