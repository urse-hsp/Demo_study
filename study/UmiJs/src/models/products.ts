export default {
    namespace: 'products',
    state: [
      { name: 'dva', id: 'dva' , key: 'dva',},
      { name: 'antd', id: 'antd' , key: 'antd',}
    ],
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };