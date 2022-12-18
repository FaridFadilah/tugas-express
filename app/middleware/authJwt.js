const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const { role } = require('../models')
const db = require('../models')
const User = db.user

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']

  if(!token){
    return res.status(403).send({
      message: "no token provided!"
    })
  }

  jwt.verify(token, config.secret, (err, decode) =>{
    if(err){
      return res.status(401).send({
        message: 'Unauthorized!'
      })
    }
    req.userId = decode.id
    next()
  })
}

const isAdmin = (req, res, next) => {
  User.findByPk(req,userId).then(user => {
    for(let i = 0; i<role.length; i++){
      if(roles[i].name === 'admin'){
        next()
        return
      }
    }
    res.status(403).send({
      message:'Require Admin Role!'
    })
    return
  })
}
const isModerator = (req, res, next) => {
  User.findByPk(req, userId).then(user => {
    User.getRoles().then(roles => {
      for(let i = 0; i< roles.length; i++){
        if(roles[i].name === 'moderator'){
          next()
          return
        }
      }
      res.status(403).send({
        message: 'Required Moderator or admin Role!'
      })
    })
  })
}

const authJwt = {
  verifyToken : verifyToken, isAdmin: isAdmin, isModerator: isModerator, isModeratorOrAdmin : this.isModeratorOrAdmin
}

module.exports = authJwt