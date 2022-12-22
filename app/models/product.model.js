module.exports = (sequelize, dataType) => {
  const product = sequelize.define('roles', {
    name: {
      type: dataType.STRING,
    },
    qty: {
      type: dataType.INTEGER,
    },
    harga:{
      type: dataType.INTEGER
    }
  })
  return product
}
