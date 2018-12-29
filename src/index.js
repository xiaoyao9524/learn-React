import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import catalog from './catalog';

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
        </div>
      </Router>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));