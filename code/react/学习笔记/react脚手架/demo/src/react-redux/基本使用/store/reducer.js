import { ADD_COUNT, SUB_COUNT } from "./constants";

const initialState = {
  count: 0
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    /* MARK 监听store派发的action，修改state中的count值 */
    case ADD_COUNT:
      return { ...state, count: state.count + action.value };
    case SUB_COUNT:
      console.log("reducer 监听到减了");
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
}
