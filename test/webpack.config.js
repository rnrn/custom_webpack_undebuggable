/* only building SSAS files */

const merge = require("webpack-merge");
const jsonImporter = require("node-sass-json-importer");

module.exports = function (defaultConfig) {
  console.log(">>>>> this is why your approach didn't work, angular already have devtool plugin", defaultConfig.devtool, defaultConfig.plugins.find(p => p.constructor.name === 'SourceMapDevToolPlugin'));

  const config = {
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
