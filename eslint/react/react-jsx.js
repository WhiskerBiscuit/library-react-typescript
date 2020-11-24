module.exports = {
    rules: {
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-child-element-spacing": "error",
        "react/jsx-closing-bracket-location": [
            "error",
            "after-props"
        ],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": ["error", "never"],
        "react/jsx-curly-newline": ["error", "never"],
        "react/jsx-curly-spacing": [
            "error", {
                "when": "always",
                "children": true,
                "allowMultiline": false
            }
        ],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": [
            "error", {
                "allow": "always",
                "extensions": [ ".js" ]
            }
        ],
        "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-handler-names": ["error", {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on",
            "checkLocalVariables": false,
            "checkInlineFunction": false
          }],
        "react/jsx-indent": [
            "error", 4, {
                "checkAttributes": true,
                "indentLogicalExpressions": true
            }
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-key": ["error", { "checkFragmentShorthand": true }],
        "react/jsx-max-depth": ["off", { "max": 4 }],
        "react/jsx-max-props-per-line": ["error", {"maximum": 1, "when": "multiline"}],
        "react/jsx-no-bind": ["error", {
            "ignoreDOMComponents": false,
            "ignoreRefs": false,
            "allowArrowFunctions": true,
            "allowFunctions": false,
            "allowBind": false
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
        "react/jsx-no-literals": [
            "off",
            {
                "noStrings": false,
                "allowedStrings": [],
                "ignoreProps": true,
                "noAttributeStrings": false,
            }
        ],
            "react/jsx-no-script-url": [
              "error",
              []
        ],
        "react/jsx-no-target-blank": ["error", { "allowReferrer": false, "enforceDynamicLinks": "always" }],
        "react/jsx-no-undef": ["error", { "allowGlobals": false }],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-one-expression-per-line": ["error", { "allow": "literal" }],
        "react/jsx-pascal-case": ["error", { allowAllCaps: false, ignore: [] }],
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-props-no-spreading": ["error", {
            "html": "enforce",
            "custom": "ignore",
            "explicitSpread": "ignore",
            "exceptions": []
        }],
        "react/jsx-sort-default-props": ["error", {
            "ignoreCase": true,
        }],
        "react/jsx-sort-props": ["error", {
            "callbacksLast": false,
            "shorthandFirst": false,
            "shorthandLast": false,
            "ignoreCase": true,
            "noSortAlphabetically": false,
            "reservedFirst": false,
        }],
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never",
            "beforeClosing": "never"
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line"
            },
        ],
    }
};
