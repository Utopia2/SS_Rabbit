import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/api': {
      'target': 'http://127.0.0.1:8888/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
  fastRefresh: {},
});
