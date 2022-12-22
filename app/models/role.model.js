module.exports = (sequelize, dataType) => {
  const Role = sequelize.define('roles', {
    id: {
      type: dataType.INTEGER,
      primaryKey: true
    },
    name: {
      type: dataType.STRING
    }
  })
  return Role
}