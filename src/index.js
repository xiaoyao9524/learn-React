import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <div>首页</div>;
const About = () => <div>关于</div>;
const Theme = () => <div>主题列表</div>;

const App = (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to={'/'}>首页</Link></li>
          <li><Link to={'/about'}>关于</Link></li>
          <li><Link to={'/theme'}>主题列表</Link></li>
        </ul>

        <hr/>

        <Route exact path={'/'} component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/theme'} component={Theme}/>
      </div>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));