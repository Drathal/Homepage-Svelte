const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const plugins = [];
plugins.push(autoprefixer());

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano());
}

module.exports = {
  plugins
};
