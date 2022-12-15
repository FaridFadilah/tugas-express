const { ROLES } = require('../models')
const db = require('../models')
const Roles = db.ROLES
const User = db.user

checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user =>{
    if(user) res.status(400).send({message: 'Failed! Username is already in use!'})
    return
  },
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(user){
      res.status(400).send({
        message: 'Failed! Email is already in use!'
      })
      return
    }
    next()
  })
  )
}

checkRolesExisted = (req, res, next) =>{
  if(req, body.roles){
    for(let i =0; i < req.body.roles.length; i++){
      if(!ROLES.includes(req.body.roles[i])){
        res.status(400).send({
          message: 'Failed! Role does not exist = ' + res.body.roles[i]
        }) // +>~??~<+
        return
      }
    }
  }
}

const verifySignUp = {checkDuplicateUsernameOrEmail, checkRolesExisted}

module.exports = verifySignUp