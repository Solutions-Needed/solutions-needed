module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  // The directory where Jest should output its coverage files
  coverageDirectory: '.coverage',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
  },
};
