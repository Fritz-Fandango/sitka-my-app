module.exports = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.(j|t)s?(x)',
		'<rootDir>/src/**/?(*.)(spec|test).(j|t)s?(x)'
	],
	testEnvironment: 'jsdom',
	testURL: 'http://localhost:8080/',
	transform: {
		'^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
	},
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
	moduleFileExtensions: [
		'ts',
		'tsx'
	],
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.json'
		}
	}
};
