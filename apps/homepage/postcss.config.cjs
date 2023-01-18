const cssnano = require("cssnano");

module.exports = {
  plugins: {
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
