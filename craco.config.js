const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "timers": require.resolve("timers-browserify"),
        "stream": require.resolve("stream-browserify"),
      };
      webpackConfig.plugins = (
        webpackConfig.plugins || []
      ).concat([
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
      ]);
      return webpackConfig;
    },
  },
};
