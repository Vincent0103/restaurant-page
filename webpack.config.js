const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    contact: "./src/contact.js",
    menu: "./src/menu.js",
    home: "./src/home.js",
    staticElements: "./src/staticElements.js",
    pageload: "./src/pageload.js",
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "eval",
  plugins: [new CompressionWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ]
  }
}