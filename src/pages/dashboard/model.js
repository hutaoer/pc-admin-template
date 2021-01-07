/**
 * @author: 94
 */
const Model = {
  namespace: 'Dashboard',

  state: {
    title: 'Dashboard',
    data: {},
  },

  effects: {
    * fetchData ({ payload, callback }, { call, put }) {
      yield put({
        type: 'save',
        payload,
      });
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
