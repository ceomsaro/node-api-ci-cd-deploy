module.exports = {
  collectCoverageFrom: ["src/**/*.js"],
  coverageThreshold: {
    global: {
      lines: 60,
      functions: 60,
      branches: 50,
      statements: 60
    }
  }
};
