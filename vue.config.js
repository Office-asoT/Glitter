
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
      .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        root: 'Vue',
        amd: 'vue',
      }
    }
  }
};
