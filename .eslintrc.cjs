module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        'airbnb-typescript'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": ['./src/*.{ts,tsx}'],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ['./tsconfig.eslint.json'],
    },
    "rules": {
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "no-param-reassign": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "consistent-return": "off",
        "@typescript-eslint/default-param-last": "off",
        "no-console": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
    }
}
