const errors = require('./errors');
const bestPractices = require('./best-practices');
const strict = require('./strict');
const variables = require('./variables');
const style = require('./style');
const es6 = require('./es6');
const imports = require('./imports');
const react = require('./react');
const reactJsx = require('./react-jsx');
const reactHooks = require('./react-hooks');

module.exports = {
    rules: {
        ...errors.rules,
        ...bestPractices.rules,
        ...strict.rules,
        ...variables.rules,
        ...style.rules,
        ...es6.rules,
        ...imports.rules,
        ...react.rules,
        ...reactJsx.rules,
        ...reactHooks.rules,
    },
};
