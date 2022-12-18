const { CHANGE_NAME, CHANGE_AGE } = require("./constants")

const changeNameAction = (name) => ({
  type: CHANGE_NAME,
  value: name
})

const changeAgeAction = (age) => ({
  type: CHANGE_AGE,
  value: age
})


module.exports = {
  changeNameAction,
  changeAgeAction
}
