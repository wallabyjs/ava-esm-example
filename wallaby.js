export default function () {
  return {
    testFramework: 'ava',
    files: [
      'index.js',
      'lib/**/*.js',
      'package.json', // important
    ],
    tests: [
      'spec/**/*.js',
      '!spec/support/**/*',
    ],
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules' // important
      }
    },
    workers: { restart: true } // important
  }
}