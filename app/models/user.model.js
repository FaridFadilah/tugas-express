module.exports = (sequelize, dataType) => {
  // const Sequelize = require('index.js').sequelize
  const User = sequelize.define("users", {
    username: {
      type: dataType.STRING
    },
    email: {
      type: dataType.STRING
    },
    password: {
      type: dataType.STRING
    }
  })
  return User
}