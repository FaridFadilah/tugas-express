const customerController = require('../controllers/customer.controller')
const authJwt = require('../middleware/authJwt')

module.exports = function(app){
  app.get('/api/customer', [authJwt.verifyToken], customerController.readCustomer)
  app.post('/api/customer', [authJwt.verifyToken], customerController.createCustomer)
  app.put('/api/customer/:id', [authJwt.verifyToken], customerController.updateCustomer)
  app.delete('/api/customer/:id', [authJwt.verifyToken], customerController.deleteCustomer)
}