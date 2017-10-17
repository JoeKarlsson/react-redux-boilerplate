module.exports = {
    "extends": "airbnb",
     'rules': {
				'import/no-named-as-default': 0,
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
				"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
				"arrow-body-style": 0,
				"no-tabs": 0,
				"no-tabs": 0,
				"indent": ["error", "tab"],
				"react/jsx-indent": [2, 'tab'],
				"react/jsx-indent-props": [2, 'tab'],
    },
    "env": {
      "browser": true,    // browser global variables.
      "node": true,        // Node.js global variables and Node.js-specific rules.
      "jest": true,
    },
    "plugins": [
      "import",
     ],
};
