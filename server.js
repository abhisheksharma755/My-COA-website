const express = require('express')
const fs = require('fs');
const app = express()
const port = 80

const home = fs.readFileSync('index.html','utf-8');
const contact = fs.readFileSync('./contact.html' , 'utf-8');

app.get('/', (req, res) => {
  res.send(home)
})
app.get('/contact', (req, res) => {
  res.send(contact)
})

app.use("/static",express.static('static'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})