const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    shared: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}
