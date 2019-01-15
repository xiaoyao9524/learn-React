// 目录
import BaseUser from './Chapter1-1';
import URLParams from './Chapter1-2';
import AuthExample from './Chapter1-3';
import CustomLinkExample from './Chapter1-4';
import PreventingTransitionsExample from './Chapter1-5';

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
  },
  {
    path: '/customLinkExample',
    title: '自定义链接',
    component: CustomLinkExample
  },
  {
    path: '/preventingTransitionsExample',
    title: '阻止导航',
    component: PreventingTransitionsExample
  }
]