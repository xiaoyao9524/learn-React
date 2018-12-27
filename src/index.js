import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

import { Router, Switch, BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';

const TodoListApp = () => (
    <Provider store={store}>
      <TodoList/>
    </Provider>
);

const Home = () => (
    <div>
      <h3>Home</h3>
    </div>
);

const Page1 = () => (
    <div>
      <h3>page1</h3>
    </div>
);

const Page2 = (props) => (
    <div>
      <h3>page2</h3>
      <button onClick={
        () => {
          console.log(props)
        }
      }>show props</button>
    </div>
);

const ErrPage = (props) => (
    <div>
      <p>未找到页面！</p>
      <button onClick={() => {
        console.log(props);
        props.history.push('/');
      }}>返回首页</button>
    </div>
);

const list = [
  {
    type: 0,
    link: '/',
    title: 'home'
  },
  {
    type: 1,
    link: '/',
    title: 'home'
  },
  {
    type: 2,
    link: '/',
    title: 'home'
  },
  {
    type: 3,
    link: '/',
    title: 'home'
  }
];

const App = (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to={'/'}>home</NavLink>
          <NavLink to={'/page1'}>page1</NavLink>
          <NavLink to={'/page2'}>page2</NavLink>
          <NavLink to={'/todoList'}>todoList</NavLink>
          <NavLink to={'/page3'}>page3</NavLink>
        </div>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/page1'} component={Page1}/>
          <Route path={'/page2'} component={Page2}/>
          <Route path={'/todoList'} component={TodoListApp}/>
          <Route path={'/ErrPage'} component={ErrPage}/>
          <Redirect to={'/ErrPage'}/>
        </Switch>
      </div>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));