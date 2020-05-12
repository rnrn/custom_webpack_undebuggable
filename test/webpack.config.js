/* only building SSAS files */

const merge = require("webpack-merge");
const jsonImporter = require("node-sass-json-importer");

module.exports = function (defaultConfig) {
  console.log(">>>>> debug default config rules", defaultConfig.module.rules);
  const config = {
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.scss$|\.sass$/,
          use: [
            {
              loader: require.resolve("sass-loader"),
              options: {
                implementation: require("node-sass"),
                sassOptions: {
                  // bootstrap-sass requires a minimum precision of 8
                  precision: 8,
                  importer: jsonImporter(),
                  outputStyle: "expanded",
                },
              },
            },
          ],
        },
      ],
    },
  };
  return merge(defaultConfig, config);
};
