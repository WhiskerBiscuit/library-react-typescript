module.exports = {
    rules: {
        // Enforces consistent naming for boolean props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
        // 'react/boolean-prop-naming': 'off', // check

        // Forbid 'button' element without an explicit 'type' attribute
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
        'react/button-has-type': 'warn',

        // Enforce all defaultProps are defined and not 'required' in propTypes.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
        'react/default-props-match-prop-types': 'warn',

        // Enforce consistent usage of destructuring assignment of props, state, and context
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': [
            'warn',
            'always',
        ],

        // Prevent missing displayName in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
        'react/display-name': 'off', // check

        // Forbid certain props on components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        // 'react/forbid-component-props': 'off', // check

        // Forbid certain props on DOM Nodes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
        // 'react/forbid-dom-props': 'off', // check

        // Forbid certain elements
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
        // 'react/forbid-elements': 'off', // check

        // Forbid using another component's propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
        'react/forbid-foreign-prop-types': 'warn',

        // Forbid certain propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': [
            'warn',
            {
                forbid: [
                    'any',
                ],
            },
        ],

        // Standardize the way function component get defined (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],

        // Reports when this.state is accessed within setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
        'react/no-access-state-in-setstate': 'warn',

        // Prevent adjacent inline elements not separated by whitespace.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
        'react/no-adjacent-inline-elements': 'warn',

        // Prevent usage of Array index in keys
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
        'react/no-array-index-key': 'warn',

        // Prevent passing of children as props.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
        // 'react/no-children-prop': 'off',

        // Prevent usage of dangerous JSX props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': 'warn',

        // Report when a DOM element is using both children and dangerouslySetInnerHTML
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
        'react/no-danger-with-children': 'warn',

        // Prevent usage of deprecated methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
        'react/no-deprecated': 'warn',

        // Prevent usage of setState in componentDidMount
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': [
            'warn',
            'disallow-in-func',
        ],

        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': [
            'warn',
            'disallow-in-func',
        ],

        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': 'warn',

        // Prevent usage of findDOMNode
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        'react/no-find-dom-node': 'warn',

        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 'warn',

        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': 'warn',

        // Flag shouldComponentUpdate when extending PureComponent
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
        'react/no-redundant-should-component-update': 'warn',

        // Prevent usage of the return value of React.render
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
        'react/no-render-return-value': 'warn',

        // Prevent usage of setState
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
        // 'react/no-set-state': 'off',

        // Prevent string definitions for references and prevent referencing this.refs
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        'react/no-string-refs': 'warn',

        // Report 'this' being used in stateless components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
        // 'react/no-this-in-sfc': 'off', // check

        // Prevent common typos
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
        // 'react/no-typos': 'off', // check

        // Detect unescaped HTML entities, which might represent malformed tags
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
        'react/no-unescaped-entities': 'warn',

        // Prevent usage of unknown DOM property (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': 'warn',

        // Prevent usage of unsafe lifecycle methods
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
        // 'react/no-unsafe': 'off', // check

        // Prevent definitions of unused prop types
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
        'react/no-unused-prop-types': 'warn',

        // Prevent definition of unused state fields
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
        'react/no-unused-state': 'warn',

        // Prevent usage of setState in componentWillUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
        'react/no-will-update-set-state': [
            'warn',
            'disallow-in-func',
        ],

        // Enforce ES5 or ES6 class for React Components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': 'warn',

        // Require read-only props. (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
        // 'react/prefer-read-only-props': 'off', // check

        // Enforce stateless components to be written as a pure function
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': [
            'warn',
            {
                ignorePureComponents: false,
            },
        ],

        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'warn',

        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': 'off', // check

        // Enforce a defaultProps definition for every prop that is not a required prop.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
        'react/require-default-props': 'warn',

        // Enforce React components to have a shouldComponentUpdate method
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
        'react/require-optimization': 'off',

        // Enforce ES5 or ES6 class for returning value in render function
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        'react/require-render-return': 'warn',

        // Prevent extra closing tags for components without children (fixable)
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': [
            'warn',
            {
                component: true,
                html: true,
            },
        ],

        // Enforce component methods order
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
        'react/sort-comp': [
            'warn',
            {
                order: [
                    'static-methods',
                    'lifecycle',
                    '/^on.+$/',
                    'render',
                    'everything-else',
                ],
            },
        ],

        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        'react/sort-prop-types': [
            'warn',
            {
                callbacksLast: false,
                ignoreCase: true,
                noSortAlphabetically: false,
                requiredFirst: false,
                sortShapeProp: true,
            },
        ],

        // State initialization in an ES6 class component should be in a constructor
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
        // 'react/state-in-constructor': 'off', // check

        // Defines where React component static properties should be positioned.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
        // 'react/static-property-placement': 'off', // check

        // Enforce style prop value is an object
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
        // 'react/style-prop-object': 'off', // check

        // Prevent passing of children to void DOM elements (e.g. <br />).
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
        // 'react/void-dom-elements-no-children': 'off', // check
    },
};
