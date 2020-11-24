module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: [
        'react-app',
        'react-app/jest',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: [
        '.eslintrc.js',
        'eslint',
        'public',
    ],
    rules: {
        'accessor-pairs': [
            'error',
            { 'enforceForClassMembers': true },
        ],
        'array-callback-return': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 'error',
        'array-bracket-newline': ['error', { 'multiline': true, 'minItems': 2 }],
        'array-bracket-spacing': ['error', 'always', {
            'singleValue': true,
            'objectsInArrays': true,
            'arraysInArrays': true
        }],
        'array-element-newline': ['error', 'always'],

        'block-spacing': 'error',
        'brace-style': [
            'error',
            'stroustrup',
            { 'allowSingleLine': true }
        ],
		'block-scoped-var': 'error',

        'comma-dangle': [ 'error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never'
        } ],
		'class-methods-use-this': 'error',
        'consistent-return': 'error',
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'always'],

        'default-case': 'error',
		'default-param-last': [ 'error' ],
		'dot-location': [
            'error',
            'property'
        ],

        'eol-last': ['error', 'always'],

        'func-call-spacing': ['error', 'never'],

		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',

        'indent': [
            'error',
            4
        ],
        'init-declarations': [
            'error',
            'always'
        ],
        'implicit-arrow-linebreak': ['error', 'beside'],

        'jsx-quotes': ['error', 'prefer-double'],

        'key-spacing': ['error'],
        'keyword-spacing': ['error'],

        'lines-between-class-members': ['error', 'always'],
        'lines-around-comment': [
            'error',
            {
                'beforeBlockComment': true,
                'afterBlockComment': false,
                'beforeLineComment': true,
                'afterLineComment': false,
                'allowBlockStart': true,
                'allowBlockEnd': false,
                'allowObjectStart': true,
                'allowObjectEnd': false,
                'allowArrayStart': true,
                'allowArrayEnd': false,
                'allowClassStart': true,
                'allowClassEnd': false
            }
        ],

		'max-classes-per-file': [
            'error',
            1
        ],
        'max-depth': ['error', 4],
        'multiline-ternary': ['error', 'always-multiline'],

        'new-parens': 'error',
        'newline-per-chained-call': ['error'],
        'no-alert': 'error',
        // 'no-await-in-loop': 'error',
		// 'no-console': [
        //     'error', {
        //         'allow': [
        //             'warn',
        //             'error'
        //         ]
        //     }
        // ],
		'no-constructor-return': 'error',
		'no-else-return': 'error',
		'no-empty-function': [
            'error',
            { 'allow': [ 'arrowFunctions' ] }
        ],
		'no-floating-decimal': 'error',
		'no-implicit-coercion': [
            'error',
            { 'allow': [ '!!' ] }
        ],
		'no-implicit-globals': 'error',
		'no-invalid-this': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': [
            'error',
            { 'ignoreEOLComments': true }
        ],
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-param-reassign': 'error',
		'no-return-assign': [
            'error',
            'always'
        ],
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
        'no-with': 'error',
        'no-shadow': 'error',
        // 'no-use-before-define': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': 'error',
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-plusplus': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',

        'object-shorthand': ['error', 'always', { 'avoidQuotes': true }],
        'object-curly-newline': ['error', {
            'ObjectExpression': { 'multiline': true, 'minProperties': 2, 'consistent': true },
            'ObjectPattern': { 'multiline': true, 'minProperties': 2, 'consistent': true },
            'ImportDeclaration': 'never',
            'ExportDeclaration': { 'multiline': true }
        }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', {'allowAllPropertiesOnSameLine': false}],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],

        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
            { 'blankLine': 'any',    'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
            { 'blankLine': 'always', 'prev': '*', 'next': ['return', 'if', 'for', 'do', 'switch', 'try', 'while', 'with'] }
        ],
        'prefer-object-spread': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': ['error', {
            'VariableDeclarator': {
              'array': false,
              'object': true,
            },
            'AssignmentExpression': {
              'array': true,
              'object': false,
            },
          }, {
            'enforceForRenamedProperties': false,
          }],
        'prefer-template': 'error',

        'quotes': ['error', 'single', { 'avoidEscape': true }],
    
        'rest-spread-spacing': ['error', 'never'],
        'require-await': 'error',

        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': ['error', 'last'],
        'sort-keys': ['error', 'asc', {'caseSensitive': false, 'natural': true, 'minKeys': 2}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always', { 'exceptions': ['*'] }],
        'switch-colon-spacing': 'error',
        
        'template-curly-spacing': 'error',

        'wrap-iife': [
            'error',
            'any'
        ],

        'yoda': 'error',
    }
};
