import {
  CHANGE_INPUT_VALUE,
  SUBMIT,
  DELETE_ITEM,
  INIT_LIST_ACTION
} from './actionTypes';
import axios from "axios";

export const changeInputValue = (value) => (
    {
      type: CHANGE_INPUT_VALUE,
      value
    }
);

export const submit = () => (
    {
      type: SUBMIT
    }
);

export const deleteItem = (index) => (
    {
      type: DELETE_ITEM,
      index
    }
);

export const initListAction = (list) => {
  return {
    type: INIT_LIST_ACTION,
    list
  }
};

// 使用redux-thunk来处理异步操作：
export const getToduList = () => {
  return (dispatch) => {
    axios.get('/index/recommend.json')
        .then((res) => {
          const action = initListAction(res.data.list.map(item => item.title));
          dispatch(action);
        })
  }
};