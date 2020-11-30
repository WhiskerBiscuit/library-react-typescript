module.exports = {
    rules: {
        // enforce boolean attributes notation in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [
            'warn',
            'never',
        ],

        // Ensures inline tags are not rendered without spaces between them
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
        'react/jsx-child-element-spacing': 'warn',

        // Validate closing bracket location in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [
            'warn',
            'after-props',
        ],

        // Validate closing tag location for multiline JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
        'react/jsx-closing-tag-location': 'warn',

        // Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions
        // on literals in JSX children or attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        'react/jsx-curly-brace-presence': [
            'warn',
            'never',
        ],

        // Enforce consistent line breaks inside jsx curly (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
        'react/jsx-curly-newline': [
            'warn',
            'never',
        ],

        // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
        'react/jsx-curly-spacing': [
            'warn',
            {
                allowMultiline: false,
                children: true,
                when: 'always',
            },
        ],

        // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
        'react/jsx-equals-spacing': [
            'warn',
            'never',
        ],

        // Restrict file extensions that may contain JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': [
            'warn',
            {
                allow: 'always',
                extensions: [
                    '.js',
                    '.tsx',
                ],
            },
        ],

        // Ensure proper position of the first property in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': [
            'warn',
            'multiline-multiprop',
        ],

        // Enforce shorthand or standard form for React fragments (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
        'react/jsx-fragments': [
            'warn',
            'syntax',
        ],

        // Enforce event handler naming conventions in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
        'react/jsx-handler-names': [
            'warn',
            {
                checkInlineFunction: false,
                checkLocalVariables: false,
                eventHandlerPrefix: 'handle',
                eventHandlerPropPrefix: 'on',
            },
        ],

        // Validate JSX indentation (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': [
            'warn',
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],

        // Validate props indentation in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': [
            'warn',
            4,
        ],

        // Report missing key props in iterators/collection literals
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': [
            'warn',
            {
                checkFragmentShorthand: true,
            },
        ],

        // Validate JSX maximum depth
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
        // 'react/jsx-max-depth': [
        //     'off',
        //     {
        //         'max': 4,
        //     },
        // ],

        // Limit maximum of props on a single line in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
        'react/jsx-max-props-per-line': [
            'warn',
            {
                maximum: 1,
                when: 'multiline',
            },
        ],

        // Enforce a new line after jsx elements and expressions (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
        // 'react/jsx-newline': 'error',

        // Prevents usage of Function.prototype.bind and arrow functions in React component props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': [
            'warn',
            {
                allowArrowFunctions: true,
                allowBind: false,
                allowFunctions: false,
                ignoreDOMComponents: false,
                ignoreRefs: false,
            },
        ],

        // Comments inside children section of tag should be placed inside braces
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
        'react/jsx-no-comment-textnodes': 'warn',

        // Prevents JSX context provider values from taking values that will cause needless rerenders.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
        // 'react/jsx-no-constructed-context-values': 'error',

        // Enforce no duplicate props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [
            'warn',
            {
                ignoreCase: true,
            },
        ],

        // Prevent using string literals in React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
        // 'react/jsx-no-literals': [
        //     'off',
        //     {
        //         'allowedStrings': [],
        //         'ignoreProps': true,
        //         'noAttributeStrings': false,
        //         'noStrings': false,
        //     },
        // ],

        // Forbid javascript: URLs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
        'react/jsx-no-script-url': [
            'warn',
            [],
        ],

        // Forbid target='_blank' attribute without rel='noreferrer'
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
        'react/jsx-no-target-blank': [
            'warn',
            {
                allowReferrer: false,
                enforceDynamicLinks: 'always',
            },
        ],

        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': [
            'warn',
            {
                allowGlobals: false,
            },
        ],

        // Disallow unnecessary fragments (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
        'react/jsx-no-useless-fragment': 'warn',

        // Limit to one expression per line in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': [
            'warn',
            {
                allow: 'literal',
            },
        ],

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': [
            'warn',
            {
                allowAllCaps: false,
                ignore: [],
            },
        ],

        // Disallow multiple spaces between inline JSX props (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
        'react/jsx-props-no-multi-spaces': 'warn',

        // Prevent JSX prop spreading
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': [
            'warn',
            {
                custom: 'ignore',
                exceptions: [],
                explicitSpread: 'ignore',
                html: 'enforce',
            },
        ],

        // Enforce default props alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
        'react/jsx-sort-default-props': [
            'warn',
            {
                ignoreCase: true,
            },
        ],

        // Enforce props alphabetical sorting (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: false,
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: false,
                shorthandFirst: false,
                shorthandLast: false,
            },
        ],

        // Validate spacing before closing bracket in JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
        // 'react/jsx-space-before-closing': 'error',

        // Validate whitespace in and around the JSX opening and closing brackets (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
        'react/jsx-tag-spacing': [
            'warn',
            {
                afterOpening: 'never',
                beforeClosing: 'never',
                beforeSelfClosing: 'always',
                closingSlash: 'never',
            },
        ],

        // Prevent React to be marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        // 'react/jsx-uses-react': 'error',

        // Prevent variables used in JSX to be marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': 'warn',

        // Prevent missing parentheses around multilines JSX (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'warn',
            {
                arrow: 'parens-new-line',
                assignment: 'parens-new-line',
                condition: 'parens-new-line',
                declaration: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
                return: 'parens-new-line',
            },
        ],
    },
};
