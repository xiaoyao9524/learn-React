import React from 'react';
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

const Home = () => (
    <div>
      <h2>首页</h2>
    </div>
);

const About = () => (
    <div>
      <h2>关于</h2>
    </div>
);

const Theme = ({match}) => (
    <div>
      <h2>主题列表</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/rendering`}>
            使用 React 渲染
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/components`}>
            组件
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>
            属性 v. 状态
          </NavLink>
        </li>
      </ul>

      <Route exact path={match.url} render={() => (
          <h3>请选择一个主题。</h3>
      )}/>
      <Route path={`${match.url}/:themeId`} component={ThemeChild}/>
    </div>
);

const ThemeChild = ({match}) => (
    <div>
      <h3>{match.params.themeId}</h3>
    </div>
);

const BaseUser = () => (
    <Router>
      <div>
        <h2>基本使用：</h2>
        <ul>
          <li><NavLink exact to={`/`}>首页</NavLink></li>
          <li><NavLink to={`/about`}>关于</NavLink></li>
          <li><NavLink to={`/theme`}>主题列表</NavLink></li>
        </ul>

        <hr/>

        <Route exact path={'/'} component={Home}/>
        <Route path={`/about`} component={About}/>
        <Route path={`/theme`} component={Theme}/>
      </div>
    </Router>
);

export default BaseUser;