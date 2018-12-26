const defaultState = {
  count: 0,
  inputValue: 'hello World',
  list: []
};

export default (state = defaultState, action) => {
  console.log('action: ', action);
  let newState = {...state};
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
  return newState;
};