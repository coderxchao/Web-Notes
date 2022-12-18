const { CHANGE_NAME, CHANGE_AGE } = require("./constants")
const initialState = {
  name: "xiaochao",
  age: 18
}
function reducer(state = initialState, action) {
  console.log("reducer中的state", state);
  console.log("reducer中的action", action);
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value };
    case CHANGE_AGE:
      return { ...state, age: action.value };
    default:
      return state;
  }
}

module.exports = reducer
