/**
 * @author: 94
 */
import { localStorageKey } from 'yzt-admin-common';
import { base } from '../../router'

const Model = {
  namespace: 'Global',

  state: {
    menu: {}
  },

  effects: {
    * getMenu ({ payload, callback }, { call, put }) {
      const appsRoutes = localStorage.getItem(localStorageKey.appsRoutes) || []; // 从localStorage中获取菜单配置
      const menu = JSON.parse(appsRoutes).find(item => item.path === base);
      yield put({
        type: 'save',
        payload: {
          menu,
        },
      });
      if (callback) callback(menu);
    },
  },

  reducers: {
    save (state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Model;
