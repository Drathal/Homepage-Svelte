/* eslint-disable @typescript-eslint/no-var-requires */

const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer(), cssnano()]
};
