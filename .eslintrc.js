module.exports = {
    "extends": "airbnb",
     'rules': {
      'no-underscore-dangle': 'off',
      "no-console": 0,
      "space-in-parens": 0,
      "no-plusplus": 0,
      "no-use-before-define": 0,
      "padded-blocks": 0,
      "no-param-reassign": 0,
      "consistent-return": 0,
      "no-bitwise": 0,
      "no-shadow": 0,
    },
    "env": {
      "browser": false,    // browser global variables.
      "node": true,        // Node.js global variables and Node.js-specific rules.
    },
    "plugins": [
      "import",
     ],
};