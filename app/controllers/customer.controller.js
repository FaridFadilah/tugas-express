const db = require('../models')

const Customer = db.customer

function createCustomer(request, response){
  Customer.create({
    name : request.body.name,
    email : request.body.email,
    jenis_kelamin: request.body.jenis_kelamin,
  }).then(result => {
    response.status(200).json(result)
  }).catch(err => {
    response.status(400).json({ msg: err })
  })
}

function readCustomer(request, response){
  Customer.findAll().then(result => response.status(200).json(result)).catch(err => response.status(400).json({error: err}))
}

function updateCustomer(request, response){
  Customer.update({
    name: request.body.name,
    email: request.body.email,
    jenis_kelamin: request.body.jenis_kelamin,
  },
  {
    where: {
      id: request.params.id
    }
  }).then(result => response.status(200).send(request.body)).catch(err => response.status(400).json(err))
}

function deleteCustomer(request, response){
  Customer.destroy({
    where:{
      id: request.params.id
    }
  }).then(result => response.json(result)).catch(err => response.json({error: err}))
}

module.exports = {createCustomer, updateCustomer, readCustomer, deleteCustomer}