const customerController = require('../controllers/customer.controller')

module.exports = function(app){
  app.get('/api/customer', customerController.readCustomer)
  app.post('/api/customer', customerController.createCustomer)
  app.put('/api/customer/:id', customerController.updateCustomer)
  app.delete('/api/customer/:id', customerController.deleteCustomer)
}