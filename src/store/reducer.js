const defaultState = {
  count: 0,
  inputValue: 'hello World',
  list: ['hello', 'world']
};

export default (state = defaultState, action) => {
  console.log('action: ', action);
  let newState = JSON.parse(JSON.stringify(state));
  if (action.type === 'INCREMENT') {
    newState.count++;
    return newState;
  }
  if (action.type === 'DECREMENT') {
    newState.count--;
    return newState;
  }
  if (action.type === 'INPUT_VALUE_CHANGE') {
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'SUBMIT') {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === 'DELETE_ITEM') {
    newState.list.splice(action.index, 1);
    return newState;
  }
  return newState;
};