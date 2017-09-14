const babelJest = require("babel-jest");

module.exports = {
  process: (src, filename) => {
    return babelJest.process(src, filename)
      .replace(/^(require|import).*\.scss.*;$/gm, '');
  },
