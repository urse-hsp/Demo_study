
export default {
  namespace: 'example',
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // console.log(history)
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
