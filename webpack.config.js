const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  },
  devtool: "source-map", //by providing a mapping between the original and the transformed source code.
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  }, //If multiple files share the same name but have different extensions,
  //webpack will resolve the one with the extension listed first in the array and skip the rest.
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // { test: /\.(js)$/, use: "babel-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({ template: "app/index.html" }),
    new webpack.HotModuleReplacementPlugin()
    //It allows all kinds of modules to be
    //updated at runtime without the need for a full refresh.
  ]
};
