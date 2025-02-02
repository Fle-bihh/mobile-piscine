module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        '<rootDir>/jest.setup.ts',
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/log.functions.ts',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['/node_modules/', '/assets/'],
    transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|react-clone-referenced-element|@react-navigation/.*)',
    ],
};
