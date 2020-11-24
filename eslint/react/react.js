module.exports = {
    rules: {
        "react/boolean-prop-naming": "off", // check
        "react/button-has-type": "off", // check
        "react/default-props-match-prop-types": "error",
        "react/destructuring-assignment": ["error", "always"],
        "react/display-name": "off", // check
        "react/forbid-component-props": "off", // check
        "react/forbid-dom-props": "off", // check
        "react/forbid-elements": "off", // check
        "react/forbid-foreign-prop-types": "error",
        "react/forbid-prop-types": [
            "error",
            { "forbid": [ "any" ] }
        ],
        "react/function-component-definition": ["error", {
            "namedComponents": "arrow-function",
            "unnamedComponents": "arrow-function"
        }],
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "off",
        "react/no-danger": "off",
        "react/no-danger-with-children": "off",
        "react/no-deprecated": "off",
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],
        "react/no-did-update-set-state": ["error", "disallow-in-func"],
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "off", // check
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "off", // check
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-this-in-sfc": "off", // check
        "react/no-typos": "off", // check
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "off", // check
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": ["error", "disallow-in-func"],
        "react/prefer-es6-class": "error",
        "react/prefer-read-only-props": "off", // check
        "react/prefer-stateless-function": ["error", { "ignorePureComponents": false }],
        "react/prop-types": "error",
        "react/react-in-jsx-scope": "off", // check
        "react/require-default-props": "error",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": ["error", {
            "component": true,
            "html": true
        }],
        "react/sort-comp": [1, {
            "order": [
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "render",
                "everything-else"
            ]
        }],
        "react/sort-prop-types": ["error", {
            "callbacksLast": false,
            "ignoreCase": true,
            "requiredFirst": false,
            "sortShapeProp": true,
            "noSortAlphabetically": false
        }],
        "react/state-in-constructor": "off", // check
        "react/static-property-placement": "off", // check
        "react/style-prop-object": "off", // check
        "react/void-dom-elements-no-children": "off", // check
    }
};
