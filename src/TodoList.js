import React, {Component} from 'react';
import store from './store';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    const {
      decrement,
      increment,
      count,
      handlerInputChange,
      inputValue,
      submit,
      list,
      deleteItem
    } = this.props;

    return (
        <div>
          <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
          <div>
            <input
                onChange={handlerInputChange}
                value={inputValue} type="text"
            />
            <button onClick={this.handlerBtnClick}>提交</button>
          </div>
          <ul>
            {list.map((item, index) => (
                <li
                    key={index}
                    onClick={() => {deleteItem(index)}}
                >{item}</li>
            ))}
          </ul>
        </div>
    )
  }

  handlerBtnClick = () => {
    if (!this.props.inputValue) {
      return;
    }
    this.props.submit();
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    store.dispatch({
      type: 'INCREMENT'
    })
  },
  decrement: () => {
    store.dispatch({
      type: 'DECREMENT'
    })
  },
  handlerInputChange: (ev) => {
    const action = {
      type: 'INPUT_VALUE_CHANGE',
      value: ev.target.value
    };
    dispatch(action);
  },
  submit () {
    const action = {
      type: 'SUBMIT'
    };
    dispatch(action);
  },
  deleteItem (index) {
    const action = {
      type: 'DELETE_ITEM',
      index
    };
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);