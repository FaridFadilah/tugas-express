const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')
const Role = db.role


corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and resync DB')
  initial()
})

function initial(){
  Role.create({
    id: 1,
    name: 'user'
  })
  Role.create({
    id: 2,
    name: 'moderator'
  })
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get('/', (req,res) => {
  res.status(200).send({
    msg: 'success'
  })
})

require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/customer.routes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Tambah 2 table
// 1. Table orders (relasi ke table customer) (id, customer id, product id, tanggal order, status = paid, unpaid, )
// 2. Table products (id, nama product, uom (satuan barang eg: pcs, box, dus), stock, harga)

// Note : relasi order -> product dibuat one to many
// Buat CRUD dari masing2 table
// Insert query pakai transaction jika query insert lebih dari 1 data atau table