// 目录
import BaseUser from './Chapter1-1';
import URLParams from './Chapter1-2';
import AuthExample from './Chapter1-3';

export default [
  {
    path: '/',
    title: '基本使用',
    component: BaseUser
  },
  {
    path: '/url-params',
    title: 'URL参数',
    component: URLParams
  },
  {
    path: '/authExample',
    title: '认证',
    component: AuthExample
  }
]