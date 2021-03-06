module.exports = {
    rules: {
        // enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': [
            'warn',
            {
                minItems: 2,
                multiline: true,
            },
        ],

        // enforce spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': [
            'warn',
            'always',
            {
                arraysInArrays: true,
                objectsInArrays: true,
                singleValue: true,
            },
        ],

        // enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': [
            'warn',
            'always',
        ],

        // enforce spacing inside single-line blocks
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': 'warn',

        // enforce one true brace style
        // https://eslint.org/docs/rules/brace-style
        'brace-style': [
            'warn',
            'stroustrup',
            {
                allowSingleLine: true,
            },
        ],

        // require camel case names
        // https://eslint.org/docs/rules/camelcase
        // camelcase': [
        //     'error',
        //     {
        //         ignoreDestructuring: false,
        //         properties: 'never',
        //     },
        // ],

        // enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        // 'capitalized-comments': [
        //     'off',
        //     'never',
        //     {
        //         block: {
        //             ignoreConsecutiveComments: true,
        //             ignoreInlineComments: true,
        //             ignorePattern: '.*',
        //         },
        //         line: {
        //             ignoreConsecutiveComments: true,
        //             ignoreInlineComments: true,
        //             ignorePattern: '.*',
        //         },
        //     },
        // ],

        // require trailing commas in multiline object literals
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],

        // enforce spacing before and after comma
        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': [
            'warn',
            {
                after: true,
                before: false,
            },
        ],

        // enforce one true comma style
        // https://eslint.org/docs/rules/comma-style
        'comma-style': [
            'warn',
            'last',
        ],

        // disallow padding inside computed properties
        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': [
            'warn',
            'always',
        ],

        // enforces consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        // 'consistent-this': 'off',

        // enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/rules/eol-last
        'eol-last': [
            'warn',
            'always',
        ],

        // enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': [
            'warn',
            'never',
        ],

        // requires function names to match name of variable or property to which they're assigned
        // https://eslint.org/docs/rules/func-name-matching
        // 'func-name-matching': [
        //     'off',
        //     'always',
        //     {
        //         considerPropertyDescriptor: true,
        //         includeCommonJSModuleExports: false,
        //     },
        // ],

        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        // 'func-names': 'warn',

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        // 'func-style': [
        //     'off',
        //     'expression',
        // ],

        // enforce line breaks between arguments of a function call
        // https://eslint.org/docs/rules/function-call-argument-newline
        // 'function-call-argument-newline': [
        //     'off',
        //     'consistent',
        // ],

        // enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        // 'function-paren-newline': [
        //     'error',
        //     'consistent',
        // ],

        // disallow specified identifiers
        // https://eslint.org/docs/rules/id-denylist
        // 'id-denylist': 'off',

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        // https://eslint.org/docs/rules/id-length
        // 'id-length': 'off',

        // require identifiers to match the provided regular expression
        // https://eslint.org/docs/rules/id-match
        // 'id-match': 'off',

        // enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': [
            'warn',
            'beside',
        ],

        // this option sets a specific tab width for your code
        // https://eslint.org/docs/rules/indent
        'indent': [
            'warn',
            4,
        ],

        // specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': [
            'warn',
            'prefer-double',
        ],

        // enforces spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': [
            'warn',
            {},
        ],

        // require a space before & after certain keywords
        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': [
            'warn',
        ],

        // enforce position of line comments
        // https://eslint.org/docs/rules/line-comment-position
        // 'line-comment-position': [
        //     'off',
        //     {
        //         applyDefaultPatterns: true,
        //         ignorePattern: '',
        //         position: 'above',
        //     },
        // ],

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // https://eslint.org/docs/rules/linebreak-style
        // 'linebreak-style': [
        //     'error',
        //     'unix',
        // ],

        // enforces empty lines around comments
        // https://eslint.org/docs/rules/lines-around-comment
        'lines-around-comment': [
            'warn',
            {
                afterBlockComment: false,
                afterLineComment: false,
                allowArrayEnd: false,
                allowArrayStart: true,
                allowBlockEnd: false,
                allowBlockStart: true,
                allowClassEnd: false,
                allowClassStart: true,
                allowObjectEnd: false,
                allowObjectStart: true,
                beforeBlockComment: true,
                beforeLineComment: true,
            },
        ],

        // require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': [
            'warn',
            'always',
        ],

        // specify the maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/max-depth
        'max-depth': [
            'warn',
            4,
        ],

        // specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        // 'max-len': [
        //     'error',
        //     100,
        //     2,
        //     {
        //         ignoreComments: false,
        //         ignoreRegExpLiterals: true,
        //         ignoreStrings: true,
        //         ignoreTemplateLiterals: true,
        //         ignoreUrls: true,
        //     },
        // ],

        // specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        // 'max-lines': [
        //     'off',
        //     {
        //         max: 300,
        //         skipBlankLines: true,
        //         skipComments: true,
        //     },
        // ],

        // enforce a maximum function length
        // https://eslint.org/docs/rules/max-lines-per-function
        // 'max-lines-per-function': [
        //     'off',
        //     {
        //         IIFEs: true,
        //         max: 50,
        //         skipBlankLines: true,
        //         skipComments: true,
        //     },
        // ],

        // specify the maximum depth callbacks can be nested
        // https://eslint.org/docs/rules/max-nested-callbacks
        // 'max-nested-callbacks': 'off',

        // limits the number of parameters that can be used in the function declaration.
        // https://eslint.org/docs/rules/max-params
        // 'max-params': [
        //     'off',
        //     3,
        // ],

        // specify the maximum number of statement allowed in a function
        // https://eslint.org/docs/rules/max-statements
        // 'max-statements': [
        //     'off',
        //     10,
        // ],

        // restrict the number of statements per line
        // https://eslint.org/docs/rules/max-statements-per-line
        // 'max-statements-per-line': [
        //     'off',
        //     {
        //         max: 1,
        //     },
        // ],

        // enforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        // 'multiline-comment-style': [
        //     'off',
        //     'starred-block',
        // ],

        // require multiline ternary
        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': [
            'warn',
            'always-multiline',
        ],

        // require a capital letter for constructors
        // https://eslint.org/docs/rules/new-cap
        // 'new-cap': [
        //     'error',
        //     {
        //         capIsNew: false,
        //         capIsNewExceptions: [
        //             'Immutable.List',
        //             'Immutable.Map',
        //             'Immutable.Set',
        //         ],
        //         newIsCap: true,
        //         newIsCapExceptions: [],
        //     },
        // ],

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.org/docs/rules/new-parens
        // CRA DUPLICATE
        // 'new-parens': 'warn',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': [
            'warn',
        ],

        // disallow use of the Array constructor
        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 'warn',

        // disallow use of bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        // 'no-bitwise': 'error',

        // disallow use of the continue statement
        // https://eslint.org/docs/rules/no-continue
        // 'no-continue': 'error',

        // disallow comments inline after code
        // https://eslint.org/docs/rules/no-inline-comments
        // 'no-inline-comments': 'off',

        // disallow if as the only statement in an else block
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'warn',

        // disallow un-paren'd mixes of different operators
        // https://eslint.org/docs/rules/no-mixed-operators
        // 'no-mixed-operators': [
        //     'error',
        //     {
        //         allowSamePrecedence: false,
        //         // the list of arthmetic groups disallows mixing `%` and `**`
        //         // with other arithmetic operators.
        //         groups: [
        //             [ '%', '**' ],
        //             [ '%', '+' ],
        //             [ '%', '-' ],
        //             [ '%', '*' ],
        //             [ '%', '/' ],
        //             [ '/', '*' ],
        //             [ '&', '|', '<<', '>>', '>>>' ],
        //             [ '==', '!=', '===', '!==' ],
        //             [ '&&', '||' ],
        //         ],
        //     },
        // ],

        // disallow mixed spaces and tabs for indentation
        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        // 'no-mixed-spaces-and-tabs': 'error',

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 'warn',

        // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': 'warn',

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'warn',

        // disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'warn',

        // disallow use of the Object constructor
        // https://eslint.org/docs/rules/no-new-object
        // 'no-new-object': 'error',

        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'warn',

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        // 'no-restricted-syntax': [
        //     'error',
        //     {
        //         message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        //         selector: 'ForInStatement',
        //     },
        //     {
        //         message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        //         selector: 'ForOfStatement',
        //     },
        //     {
        //         message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        //         selector: 'LabeledStatement',
        //     },
        //     {
        //         message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        //         selector: 'WithStatement',
        //     },
        // ],

        // disallow tab characters entirely
        // https://eslint.org/docs/rules/no-tabs
        // 'no-tabs': 'error',

        // disallow the use of ternary operators
        // https://eslint.org/docs/rules/no-ternary
        // 'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': 'warn',

        // disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        // 'no-underscore-dangle': [
        //     'error',
        //     {
        //         allow: [],
        //         allowAfterSuper: false,
        //         allowAfterThis: false,
        //         enforceInMethodNames: true,
        //     },
        // ],

        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 'warn',

        // disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'warn',

        // enforce the location of single-line statements
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        // 'nonblock-statement-body-position': [
        //     'error',
        //     'beside',
        //     {
        //         overrides: {},
        //     },
        // ],

        // enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': [
            'warn',
            {
                ExportDeclaration: {
                    multiline: true,
                },
                ImportDeclaration: 'never',
                ObjectExpression: {
                    consistent: true,
                    minProperties: 2,
                    multiline: true,
                },
                ObjectPattern: {
                    consistent: true,
                    minProperties: 2,
                    multiline: true,
                },
            },
        ],

        // require padding inside curly braces
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': [
            'warn',
            'always',
        ],

        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],

        // allow just one var statement per function
        // https://eslint.org/docs/rules/one-var
        'one-var': [
            'warn',
            'never',
        ],

        // require a newline around variable declaration
        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': [
            'warn',
            'always',
        ],

        // require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': [
            'warn',
            'always',
        ],

        // requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': [
            'warn',
            'after',
        ],

        // disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': [
            'warn',
            'never',
        ],

        // require or disallow padding lines between statements
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'always',
                next: '*',
                prev: [
                    'const',
                    'let',
                    'var',
                ],
            },
            {
                blankLine: 'any',
                next: [
                    'const',
                    'let',
                    'var',
                ],
                prev: [
                    'const',
                    'let',
                    'var',
                ],
            },
            {
                blankLine: 'always',
                next: [
                    'do',
                    'for',
                    'if',
                    'return',
                    'switch',
                    'try',
                    'while',
                    'with',
                ],
                prev: '*',
            },
        ],

        // disallow the use of Math.pow in favor of the ** operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        // 'prefer-exponentiation-operator': 'off',

        // prefer use of an object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 'warn',

        // require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props
        // 'quote-props': [
        //     'error',
        //     'as-needed',
        //     {
        //         keywords: false,
        //         numbers: false,
        //         unnecessary: true,
        //     },
        // ],

        // specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes
        'quotes': [
            'warn',
            'single',
            {
                avoidEscape: true,
            },
        ],

        // require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        'semi': [
            'warn',
            'always',
        ],

        // enforce spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': 'warn',

        // enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': [
            'warn',
            'last',
        ],

        // requires object keys to be sorted
        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': [
            'warn',
            'asc',
            {
                caseSensitive: false,
                minKeys: 2,
                natural: true,
            },
        ],

        // sort variables within the same declaration block
        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 'warn',

        // require or disallow space before blocks
        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'warn',

        // require or disallow space before function opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],

        // require or disallow spaces inside parentheses
        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': [
            'warn',
            'never',
        ],

        // require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'warn',

        // require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': 'warn',

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'warn',
            'always',
            {
                exceptions: [
                    '*',
                ],
            },
        ],

        // enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': 'warn',

        // require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        // 'template-tag-spacing': [
        //     'error',
        //     'never',
        // ],

        // require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        // 'unicode-bom': [
        //     'error',
        //     'never',
        // ],

        // require regex literals to be wrapped in parentheses
        // https://eslint.org/docs/rules/wrap-regex
        // 'wrap-regex': 'off',
    },
};
