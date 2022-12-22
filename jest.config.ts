import type { Config } from 'jest'

const config: Config = {
  testRegex: '__tests__/.*test.[jt]sx?$',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test-utils/fileMock.ts',
    '\\.(css)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^react($|/.+)': '<rootDir>/node_modules/react$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test-utils/jest-setup.ts'],
}

export default config
