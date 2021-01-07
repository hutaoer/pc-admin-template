// import { createLogger } from 'redux-logger'
// import { localStorageKey, getCookie } from 'yzt-admin-common'
// import router from 'umi/router';

export const dva = {
  config: {
    // onAction: createLogger(),
    onError (err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export const qiankun = {
  // 应用加载之前
  async bootstrap (props) {
    // const token = getCookie(localStorageKey.token);
    // if (!token) {
    //   router.push('/login');
    // }
    // console.log('umi-child bootstrap', props);
  },
  // 应用 render 之前触发
  async mount (props) {
    // console.log('=====auth mount=====: ', props);
  },
  // 应用卸载之后触发
  async unmount (props) {
    // console.log('--------umi-child 卸载-------', props);
  },
};
