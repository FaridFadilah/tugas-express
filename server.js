const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.json({ message: 'welcome to bezkoder application'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})