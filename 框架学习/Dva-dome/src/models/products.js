export default {
  namespace: 'products',
  state: [
      { name: 'dva', id: 1 , key:1},
      { name: 'antd', id: 2 , key:2},
      { name: 'dva', id: 3 , key:1},
      { name: 'antd', id: 4 , key:2},
      { name: 'dva', id: 5 , key:1},
      { name: 'antd', id: 6 , key:2},
      { name: 'dva', id: 7 , key:1},
      { name: 'antd', id: 8 , key:2},
      { name: 'dva', id: 9 , key:1},
      { name: 'antd', id: 10 , key:2},
      { name: 'dva', id: 11 , key:1},
      { name: 'antd', id: 12 , key:2},
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      // console.log(payload)
      return state.filter(item => item.id !== id);
    },
  },
};