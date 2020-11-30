module.exports = {
    rules: {
        // enforces getter/setter pairs in objects
        // https://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': [
            'warn',
            {
                enforceForClassMembers: true,
            },
        ],

        // enforces return statements in callbacks of array's methods
        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'warn',

        // treat var statements as if they were block scoped
        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'warn',

        // enforce that class methods use "this"
        // https://eslint.org/docs/rules/class-methods-use-this
        'class-methods-use-this': 'warn',

        // specify the maximum cyclomatic complexity allowed in a program
        // https://eslint.org/docs/rules/complexity
        // 'complexity': [
        //     'off',
        //     11,
        // ],

        // require return statements to either always or never specify values
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'warn',

        // specify curly brace conventions for all control statements
        // https://eslint.org/docs/rules/curly
        // 'curly': [
        //     'error',
        //     'multi-line',
        // ],

        // require default case in switch statements
        // https://eslint.org/docs/rules/default-case
        'default-case': 'warn',

        // enforce default clauses in switch statements to be last
        // https://eslint.org/docs/rules/default-case-last
        // 'default-case-last': 'error',

        // enforce default parameters to be last
        // https://eslint.org/docs/rules/default-param-last
        'default-param-last': [
            'warn',
        ],

        // enforces consistent newlines before or after dots
        // https://eslint.org/docs/rules/dot-location
        'dot-location': [
            'warn',
            'property',
        ],

        // encourages use of dot notation whenever possible
        // https://eslint.org/docs/rules/dot-notation
        // 'dot-notation': [
        //     'error',
        //     {
        //         allowKeywords: true,
        //     },
        // ],

        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        // 'eqeqeq': [
        //     'error',
        //     'always',
        //     {
        //         null: 'ignore',
        //     },
        // ],

        // require grouped accessor pairs in object literals and classes
        // https://eslint.org/docs/rules/grouped-accessor-pairs
        'grouped-accessor-pairs': 'warn',

        // make sure for-in loops have an if statement
        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'warn',

        // enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        'max-classes-per-file': [
            'warn',
            1,
        ],

        // disallow the use of alert, confirm, and prompt
        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'warn',

        // disallow use of arguments.caller or arguments.callee
        // https://eslint.org/docs/rules/no-caller
        // 'no-caller': 'error',

        // disallow lexical declarations in case/default clauses
        // https://eslint.org/docs/rules/no-case-declarations
        // 'no-case-declarations': 'error',

        // disallow returning value in constructor
        // https://eslint.org/docs/rules/no-constructor-return
        'no-constructor-return': 'warn',

        // disallow division operators explicitly at beginning of regular expression
        // https://eslint.org/docs/rules/no-div-regex
        // 'no-div-regex': 'off',

        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 'warn',

        // disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': [
            'warn',
            {
                allow: [
                    'arrowFunctions',
                ],
            },
        ],

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        // 'no-empty-pattern': 'error',

        // disallow comparisons to null without a type-checking operator
        // https://eslint.org/docs/rules/no-eq-null
        // 'no-eq-null': 'off',

        // disallow use of eval()
        // https://eslint.org/docs/rules/no-eval
        // 'no-eval': 'error',

        // disallow adding to native types
        // https://eslint.org/docs/rules/no-extend-native
        // 'no-extend-native': 'error',

        // disallow unnecessary function binding
        // https://eslint.org/docs/rules/no-extra-bind
        // 'no-extra-bind': 'error',

        // disallow Unnecessary Labels
        // https://eslint.org/docs/rules/no-extra-label
        // 'no-extra-label': 'error',

        // disallow fallthrough of case statements
        // https://eslint.org/docs/rules/no-fallthrough
        // 'no-fallthrough': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'warn',

        // disallow reassignments of native objects or read-only globals
        // https://eslint.org/docs/rules/no-global-assign
        // 'no-global-assign': [
        //     'error',
        //     {
        //         exceptions: [],
        //     },
        // ],

        // disallow implicit type conversions
        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': [
            'warn',
            {
                allow: [
                    '!!',
                ],
            },
        ],

        // disallow var and named functions in global scope
        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'warn',

        // disallow use of eval()-like methods
        // https://eslint.org/docs/rules/no-implied-eval
        // 'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        // https://eslint.org/docs/rules/no-invalid-this
        'no-invalid-this': 'warn',

        // disallow usage of __iterator__ property
        // https://eslint.org/docs/rules/no-iterator
        // 'no-iterator': 'error',

        // disallow use of labels for anything other then loops and switches
        // https://eslint.org/docs/rules/no-labels
        'no-labels': 'warn',

        // disallow unnecessary nested blocks
        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'warn',

        // disallow creation of functions within loops
        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'warn',

        // disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        // 'no-magic-numbers': [
        //     'off',
        //     {
        //         detectObjects: false,
        //         enforceConst: true,
        //         ignore: [],
        //         ignoreArrayIndexes: true,
        //     },
        // ],

        // disallow use of multiple spaces
        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': [
            'warn',
            {
                ignoreEOLComments: true,
            },
        ],

        // disallow use of multiline strings
        // https://eslint.org/docs/rules/no-multi-str
        // 'no-multi-str': 'error',

        // disallow use of new operator when not part of the assignment or comparison
        // https://eslint.org/docs/rules/no-new
        'no-new': 'warn',

        // disallow use of new operator for Function object
        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 'warn',

        // disallows creating new instances of String, Number, and Boolean
        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'warn',

        // disallow use of (old style) octal literals
        // https://eslint.org/docs/rules/no-octal
        // 'no-octal': 'error',

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        // https://eslint.org/docs/rules/no-octal-escape
        // 'no-octal-escape': 'error',

        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // https://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': 'warn',

        // disallow usage of __proto__ property
        // https://eslint.org/docs/rules/no-proto
        // 'no-proto': 'error',

        // disallow declaring the same variable more then once
        // https://eslint.org/docs/rules/no-redeclare
        // 'no-redeclare': 'error',

        // disallow certain object properties
        // https://eslint.org/docs/rules/no-restricted-properties
        // 'no-restricted-properties': [
        //     'error',
        //     {
        //         message: 'arguments.callee is deprecated',
        //         object: 'arguments',
        //         property: 'callee',
        //     },
        //     {
        //         message: 'Please use Number.isFinite instead',
        //         object: 'global',
        //         property: 'isFinite',
        //     },
        //     {
        //         message: 'Please use Number.isFinite instead',
        //         object: 'self',
        //         property: 'isFinite',
        //     },
        //     {
        //         message: 'Please use Number.isFinite instead',
        //         object: 'window',
        //         property: 'isFinite',
        //     },
        //     {
        //         message: 'Please use Number.isNaN instead',
        //         object: 'global',
        //         property: 'isNaN',
        //     },
        //     {
        //         message: 'Please use Number.isNaN instead',
        //         object: 'self',
        //         property: 'isNaN',
        //     },
        //     {
        //         message: 'Please use Number.isNaN instead',
        //         object: 'window',
        //         property: 'isNaN',
        //     },
        //     {
        //         message: 'Please use Object.defineProperty instead.',
        //         property: '__defineGetter__',
        //     },
        //     {
        //         message: 'Please use Object.defineProperty instead.',
        //         property: '__defineSetter__',
        //     },
        //     {
        //         message: 'Use the exponentiation operator (**) instead.',
        //         object: 'Math',
        //         property: 'pow',
        //     },
        // ],

        // disallow use of assignment in return statement
        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': [
            'warn',
            'always',
        ],

        // disallow redundant `return await`
        // https://eslint.org/docs/rules/no-return-await
        // 'no-return-await': 'error',

        // disallow use of `javascript:` urls
        // https://eslint.org/docs/rules/no-script-url
        // 'no-script-url': 'error',

        // disallow self assignment
        // https://eslint.org/docs/rules/no-self-assign
        // 'no-self-assign': [
        //     'error',
        //     {
        //         props: true,
        //     },
        // ],

        // disallow comparisons where both sides are exactly the same
        // https://eslint.org/docs/rules/no-self-compare
        // 'no-self-compare': 'error',

        // disallow use of comma operator
        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'warn',

        // restrict what can be thrown as an exception
        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'warn',

        // disallow unmodified conditions of loops
        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'warn',

        // disallow usage of expressions in statement position
        // https://eslint.org/docs/rules/no-unused-expressions
        // 'no-unused-expressions': [
        //     'error',
        //     {
        //         allowShortCircuit: false,
        //         allowTaggedTemplates: false,
        //         allowTernary: false,
        //     },
        // ],

        // disallow unused labels
        // https://eslint.org/docs/rules/no-unused-labels
        // 'no-unused-labels': 'error',

        // disallow unnecessary .call() and .apply()
        // https://eslint.org/docs/rules/no-useless-call
        // 'no-useless-call': 'off',

        // disallow unnecessary catch clauses
        // https://eslint.org/docs/rules/no-useless-catch
        // 'no-useless-catch': 'error',

        // disallow useless string concatenation
        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'warn',

        // disallow unnecessary string escaping
        // https://eslint.org/docs/rules/no-useless-escape
        // 'no-useless-escape': 'error',

        // disallow redundant return; keywords
        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'warn',

        // disallow use of void operator
        // https://eslint.org/docs/rules/no-void
        'no-void': 'warn',

        // disallow usage of configurable warning terms in comments: e.g. todo
        // https://eslint.org/docs/rules/no-warning-comments
        // 'no-warning-comments': [
        //     'off',
        //     {
        //         location: 'start',
        //         terms: [
        //             'fixme',
        //             'todo',
        //         ],
        //     },
        // ],

        // disallow use of the with statement
        // https://eslint.org/docs/rules/no-with
        'no-with': 'warn',

        // suggest using named capture group in regular expression
        // https://eslint.org/docs/rules/prefer-named-capture-group
        // 'prefer-named-capture-group': 'off',

        // require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        // 'prefer-promise-reject-errors': [
        //     'error',
        //     {
        //         allowEmptyReject: true,
        //     },
        // ],

        // disallow use of the `RegExp` constructor in favor of regular expression literals
        // https://eslint.org/docs/rules/prefer-regex-literals
        // 'prefer-regex-literals': 'off',

        // require use of the second argument for parseInt()
        // https://eslint.org/docs/rules/radix
        // 'radix': 'error',

        // require `await` in `async function` (note: this is a horrible rule that should never be used)
        // https://eslint.org/docs/rules/require-await
        'require-await': 'warn',

        // enforce the use of u flag on RegExp
        // https://eslint.org/docs/rules/require-unicode-regexp
        // 'require-unicode-regexp': 'off',

        // requires to declare all vars on top of their containing scope
        // https://eslint.org/docs/rules/vars-on-top
        // 'vars-on-top': 'error',

        // require immediate function invocation to be wrapped in parentheses
        // https://eslint.org/docs/rules/wrap-iife
        'wrap-iife': [
            'warn',
            'any',
        ],

        // require or disallow Yoda conditions
        // https://eslint.org/docs/rules/yoda
        'yoda': 'warn',
    },
};
