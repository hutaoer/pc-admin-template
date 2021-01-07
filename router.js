const { RUN_ENV } = process.env;
const base = '/admin-template';
const company = 'demo'
const services = {
  'dev': `https://dev-admin.${company}.com/`
};

const publicPath = services[RUN_ENV] + 'frontd-template/';

const routes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/dashboard', component: './dashboard', menuName: 'Dashboard' },
    ],
  },
];

module.exports = {
  routes,
  base,
  publicPath
};
