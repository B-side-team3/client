// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'@components(.*)$': '<rootDir>/src/components$1',
		'@containers(.*)$': '<rootDir>/src/containers$1',
		'@common(.*)$': '<rootDir>/src/common$1',
		'@store(.*)$': '<rootDir>/src/store$1',
		'@mocks(.*)$': '<rootDir>/src/mocks$1',
	},
}

module.exports = createJestConfig(customJestConfig)
