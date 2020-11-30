const LintSettings = require('./eslint');

module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'eslint',
    ],
    rules: LintSettings.rules,
    overrides: [
        {
            files: [
                '**/*.ts?(x)',
            ],
            rules: {
                'no-use-before-define': 'off',
                'react/prop-types': 'off',
            },
        },
    ],
};
