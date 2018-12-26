import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';

import store from './store';
import {
  changeInputValue,
  submit,
  deleteItem,
  initListAction,
  getToduList
} from './store/actionCreators';
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 可以手动订阅更新，也可以事件绑定到视图层。
    store.subscribe(() => {
      this.upDateState();
    });
  };

  initList = (list) => {
    const action = initListAction(list);
    store.dispatch(action);
  };

  upDateState = () => {
    this.setState(store.getState());
  };

  handlerChange = (ev) => {
    const action = changeInputValue(ev.target.value);
    store.dispatch(action);
  };

  handlerClick = () => {
    if (!this.state.inputValue) {
      return;
    }
    const action = submit();
    store.dispatch(action);
  };

  deleteItem = (index) => {
    const action = deleteItem(index);
    store.dispatch(action);
  };

  componentDidMount = () => {
    const action = getToduList();
    store.dispatch(action);
  };

  render() {
    return (
        <TodoListUI
            handlerChange={this.handlerChange}
            inputValue={this.state.inputValue}
            handlerClick={this.handlerClick}
            list={this.state.list}
            deleteItem={this.deleteItem}
        />
    )
  }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));
