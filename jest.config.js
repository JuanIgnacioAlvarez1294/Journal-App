export default {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transforma archivos .js o .jsx con Babel
    },
  };
  