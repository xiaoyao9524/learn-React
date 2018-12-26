import React, {Component} from 'react';
import store from './store';
import {connect} from 'react-redux';

class TodoList extends Component {
  render() {
    return (
        <div>
          <div>
            <button onClick={this.props.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.props.increment}>+</button>
          </div>
          <div>
            <input
                onChange={this.props.handlerInputChange}
                value={this.props.inputValue} type="text"
            />
            <button>提交</button>
          </div>
          <ul>
            <li>Hello</li>
          </ul>
        </div>
    )
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);