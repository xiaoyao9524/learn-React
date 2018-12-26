const defaultState = {
  inputValue: 'hello world',
  list: []
};

export default (state = defaultState, action) => {
  console.log('action: ', action);
  let newState = JSON.parse(JSON.stringify(state));
  let newList = newState.list;
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      newState.inputValue = action.value;
      return newState;
    case 'SUBMIT':
      newState.list = [...newList, newState.inputValue];
      newState.inputValue = '';
      return newState;
    case 'DELETE_ITEM':
      newList.splice(action.index, 1);
      return newState;
    case 'INIT_LIST_ACTION':
      newState.list = action.list;
      return newState;
    default:
      return newState;
  }
};