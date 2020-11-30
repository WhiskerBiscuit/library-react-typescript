module.exports = {
    rules: {
        // Static analysis:

        // ensure default import coupled with default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
        // 'import/default': 'off',

        // ensure named imports coupled with named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
        // 'import/named': 'error',

        // ensure imported namespaces contain dereferenced properties as they are dereferenced
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        // 'import/namespace': 'off',

        // forbid import of modules using absolute paths
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        // 'import/no-absolute-path': 'off',

        // forbid a module from importing a module with a dependency path back to itself
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
        // 'import/no-cycle': 'off',

        // forbid require() calls with expressions
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        // 'import/no-dynamic-require': 'off',

        // prevent importing the submodules of other modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
        // 'import/no-internal-modules': 'off',

        // forbid importing modules from parent directories
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
        // 'import/no-relative-parent-imports': 'off',

        // restrict which files can be imported in a given folder
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
        // 'import/no-restricted-paths': 'off',

        // forbid a module from importing itself
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
        // 'import/no-self-import': 'off',

        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        // 'import/no-unresolved': [
        //     'error',
        //     {
        //         caseSensitive: true,
        //         commonjs: true,
        //     },
        // ],

        // prevent unnecessary path segments in import and require statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
        // 'import/no-useless-path-segments': 'off',

        // forbid webpack loader syntax in imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        // 'import/no-webpack-loader-syntax': 'off',


        // Helpful warnings:

        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        // 'import/export': 'error',

        // disallow use of jsdoc-marked-deprecated imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        // 'import/no-deprecated': 'off',

        // forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        // 'import/no-extraneous-dependencies': [
        //     'error',
        //     {
        //         devDependencies: [
        //             'test/**', // tape, common npm pattern
        //             'tests/**', // also common npm pattern
        //             'spec/**', // mocha, rspec-like pattern
        //             '**/__tests__/**', // jest pattern
        //             '**/__mocks__/**', // jest pattern
        //             'test.{js,jsx}', // repos with a single test file
        //             'test-*.{js,jsx}', // repos with multiple top-level test files
        //             '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        //             '**/jest.config.js', // jest config
        //             '**/jest.setup.js', // jest setup
        //             '**/vue.config.js', // vue-cli config
        //             '**/webpack.config.js', // webpack config
        //             '**/webpack.config.*.js', // webpack config
        //             '**/rollup.config.js', // rollup config
        //             '**/rollup.config.*.js', // rollup config
        //             '**/gulpfile.js', // gulp config
        //             '**/gulpfile.*.js', // gulp config
        //             '**/Gruntfile{,.js}', // grunt config
        //             '**/protractor.conf.js', // protractor config
        //             '**/protractor.conf.*.js', // protractor config
        //             '**/karma.conf.js', // karma config
        //         ],
        //         optionalDependencies: false,
        //     },
        // ],

        // forbid mutable exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        // 'import/no-mutable-exports': 'error',

        // do not allow a default import name to match a named export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        // 'import/no-named-as-default': 'error',

        // warn on accessing default export property names that are also named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        // 'import/no-named-as-default-member': 'error',

        // report modules without exports, or exports without matching import in another module
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
        // 'import/no-unused-modules': 'error',


        // Module systems:

        // disallow AMD require/define
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        // 'import/no-amd': 'error',

        // disallow require()
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // 'import/no-commonjs': 'off',

        // no Node.js builtin modules
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        // 'import/no-nodejs-modules': 'off',

        // warn if a module could be mistakenly parsed as a script by a consumer
        // leveraging Unambiguous JavaScript Grammar
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        // this should not be enabled until this proposal has at least been *presented* to TC39.
        // At the moment, it's not a thing.
        // 'import/unambiguous': 'off',


        // Style guide:

        // dynamic imports require a leading comment with a webpackChunkName
        // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
        // 'import/dynamic-import-chunkname': [
        //     'off',
        //     {
        //         importFunctions: [],
        //         webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        //     },
        // ],

        // ensure all exports appear after other statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
        // 'import/exports-last': 'off',

        // ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // 'import/extensions': [
        //     'error',
        //     'ignorePackages',
        //     {
        //         js: 'never',
        //         jsx: 'never',
        //         mjs: 'never',
        //     },
        // ],

        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        // 'import/first': 'error',

        // reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present
        // in a single file.
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
        // 'import/group-exports': 'off',

        // forbid modules to have too many dependencies
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
        // 'import/max-dependencies': [
        //     'off',
        //     {
        //         max: 10,
        //     },
        // ],

        // require a newline after the last import/require in a group
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        // 'import/newline-after-import': 'error',

        // reports if a module's default export is unnamed
        // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
        // 'import/no-anonymous-default-export': [
        //     'off',
        //     {
        //         allowAnonymousClass: false,
        //         allowAnonymousFunction: false,
        //         allowArray: false,
        //         allowArrowFunction: false,
        //         allowLiteral: false,
        //         allowObject: false,
        //     },
        // ],

        // forbid default exports. this is a terrible rule, do not use it.
        // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
        // 'import/no-default-export': 'off',

        // disallow duplicate imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        // 'import/no-duplicates': 'error',

        // prevent importing the default as if it were named
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        // 'import/no-named-default': 'error',

        // prohibit named exports. this is a terrible rule, do not use it.
        // https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
        // 'import/no-named-export': 'off',

        // disallow namespace imports
        // TODO: enable?
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
        // 'import/no-namespace': 'off',

        // prevent unassigned imports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
        // importing for side effects is perfectly acceptable, if you need side effects.
        // 'import/no-unassigned-import': 'off',

        // ensure absolute imports are above relative imports and that unassigned imports are ignored
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        // TODO: enforce a stricter convention in module import order?
        // 'import/order': [
        //     'error',
        //     {
        //         groups: [
        //             [
        //                 'builtin',
        //                 'external',
        //                 'internal',
        //             ],
        //         ],
        //     },
        // ],

        // require modules with a single export to use a default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // 'import/prefer-default-export': 'error',
    },
};
