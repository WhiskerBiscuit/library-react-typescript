// const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    rules: {
        // enforce or disallow variable initializations at definition
        // https://eslint.org/docs/rules/init-declarations
        'init-declarations': [
            'warn',
            'always',
        ],

        // disallow deletion of variables
        // https://eslint.org/docs/rules/no-delete-var
        // 'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        // https://eslint.org/docs/rules/no-label-var
        // 'no-label-var': 'error',

        // disallow specific globals
        // https://eslint.org/docs/rules/no-restricted-globals
        // 'no-restricted-globals': [
        //     'error',
        //     {
        //         message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        //         name: 'isFinite',
        //     },
        //     {
        //         message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        //         name: 'isNaN',
        //     },
        // ].concat(confusingBrowserGlobals),

        // disallow declaration of variables already declared in the outer scope
        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': 'warn',

        // disallow shadowing of names such as arguments
        // https://eslint.org/docs/rules/no-shadow-restricted-names
        // 'no-shadow-restricted-names': 'error',

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        // https://eslint.org/docs/rules/no-undef
        // 'no-undef': 'error',

        // disallow use of undefined when initializing variables
        // https://eslint.org/docs/rules/no-undef-init
        // 'no-undef-init': 'error',

        // disallow use of undefined variable
        // https://eslint.org/docs/rules/no-undefined
        // 'no-undefined': 'off',

        // disallow declaration of variables that are not used in the code
        // https://eslint.org/docs/rules/no-unused-vars
        // 'no-unused-vars': [
        //     'error',
        //     {
        //         args: 'after-used',
        //         ignoreRestSiblings: true,
        //         vars: 'all',
        //     },
        // ],

        // disallow use of variables before they are defined
        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 'warn',
    },
};
