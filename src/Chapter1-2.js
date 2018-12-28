import React from 'react';

import {
  Route,
  NavLink
} from 'react-router-dom';

const URLParams = ({match}) => {
  return (
      <div>
        <h2>账号</h2>
        <ul>
          <li><NavLink to={`${match.url}/react-router`}>React Router</NavLink></li>
          <li><NavLink to={`${match.url}/leoAshin`}>LeoAshin</NavLink></li>
          <li><NavLink to={`${match.url}/justjavac`}>justjavac</NavLink></li>
          <li><NavLink to={`${match.url}/reacttraining`}>reacttraining</NavLink></li>
        </ul>

        <hr/>

        <Route path={`${match.url}/:id`} component={Child}/>
      </div>
  )
};

const Child = ({match}) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
);

export default URLParams;