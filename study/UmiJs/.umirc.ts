import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  request: {
    dataField: 'data',
  },
  // layout: {},
  routes: [
    { 
      path: '/', 
      component: '@/layouts/BasicLayout/index',
      routes: [
        {
          path: "/",
          exact: true,
          redirect: '/home',
          component: "@/pages/index/index"
        },
        {
          path: "/home",
          component: "@/pages/index/index"
        },
        {
          path: "/products",
          component: "@/pages/products/index"
        },
        {
          path: "/users",
          component: "@/pages/users/_layout.tsx",
          routes: [
            {
              path: "/users",
              exact: true,
              component: "@/pages/users/index"
            }
          ]
        },
      ] 
    }
  ],
});
