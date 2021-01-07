const routesConfig = require('./router');
// ref: https://umijs.org/config/
export default {
  define: {
    'process.env.RUN_ENV': process.env.RUN_ENV,
  },
  treeShaking: true,
  routes: routesConfig.routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'pc-admin-template',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    '@umijs/plugin-qiankun',
  ],
  hash: true,
  mountElementId: 'app-root',
  base: routesConfig.base,
  publicPath: routesConfig.publicPath
};
