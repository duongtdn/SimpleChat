const path = require("path");

module.exports = {
    entry: {
      app: ["./src/index.js"]
    },
    output: {
      filename: "app.bundle.js",
      path: path.resolve(__dirname, "build"),
      // publicPath: "/tests/",
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      publicPath: "/assets/",
      historyApiFallback: true
    }
};
