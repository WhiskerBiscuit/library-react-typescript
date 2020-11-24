const errors = require('./errors');
const bestPractices = require('./best-practices');
const strict = require('./strict');
const variables = require('./variables');
const style = require('./style');
const es6 = require('./es6');
const imports = require('./imports');

module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: [
        ...imports.plugins,
    ],
    rules: {
        ...errors.rules,
        ...bestPractices.rules,
        ...strict.rules,
        ...variables.rules,
        ...style.rules,
        ...es6.rules,
        ...imports.rules,
    },
    settings: {
        ...imports.settings,
    },
};
