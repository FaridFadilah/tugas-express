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
app.get('/', (req, res) => {
  res.json({ message: 'welcome to bezkoder application'})
})

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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})