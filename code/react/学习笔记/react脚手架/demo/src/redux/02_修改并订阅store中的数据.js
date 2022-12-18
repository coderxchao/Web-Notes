const store = require("./store/index")
// const { CHANGE_NAME, CHANGE_AGE } = require("./store/constants")
const { changeNameAction, changeAgeAction } = require("./store/actionCreators")

store.subscribe(() => {
  console.log("订阅到数据变化", store.getState());
})

// store.dispatch({ type: CHANGE_NAME, value: "coderchao" })
// store.dispatch({ type: CHANGE_AGE, value: 28 })

store.dispatch(changeNameAction("coderchao"))
store.dispatch(changeAgeAction(28))

