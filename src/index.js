import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import catalog from './catalog';

const Test1 = (
    <div>
      <p>直接定义组件</p>
    </div>
);

const Test2 = () => (
    <div>
      <p>函数定义组件</p>
    </div>
);

class Test3 extends React.Component {
  render () {
    return (
        <div>
          <p>class定义组件</p>
        </div>
    )
  }
}

const App = () => {
  const links = catalog.map(item => <li key={item.path}><NavLink to={item.path} exact={item.path === '/'}>{item.title}</NavLink></li>);
  const routes = catalog.map(item => <Route key={item.path} exact={item.path === '/'} path={item.path} component={item.component}/>);

  return (
      <Router>
        <div>
          <div style={{width: '300px', float: 'left'}}>
            <h3>目录：</h3>
            <ul>{links}</ul>
          </div>
          <div style={{float: 'left'}}>
            {routes}
          </div>
          <div>
            <h3>试验区：</h3>
            {Test1}
            <Test2/>
            <Test3/>
          </div>
        </div>
      </Router>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));