module.exports = {
    "env": {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        'jest/globals': true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            jsx: true,
            impliedStrict: true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};