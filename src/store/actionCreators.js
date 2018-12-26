import {
  CHANGE_INPUT_VALUE,
  SUBMIT,
  DELETE_ITEM,
  INIT_LIST_ACTION,
  GET_INIT_LIST
} from './actionTypes';

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

export const getInitList = (list) => ({
  type: GET_INIT_LIST,
  list
});