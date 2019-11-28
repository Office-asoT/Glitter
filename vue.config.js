module.exports = {
  configureWebpack: config => {
    if (process.env.TARGET === 'lib') {
      config.externals = {
        vue: {
          commonjs: 'vue',
          commonjs2: 'vue',
          root: 'Vue',
          amd: 'vue',
        }
      };
    }
  }
};
