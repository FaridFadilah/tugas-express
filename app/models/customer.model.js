module.exports = function(sequelize, dataType){
  const customer = sequelize.define('customers', {
    name: {
      type: dataType.STRING,
    },
    email: {
      type: dataType.STRING,
    },
    jenis_kelamin: {
      type: dataType.STRING,
    }
  })
  return customer
}