const express = require('express');
const app = express();
const port = 2121;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log("It's working")
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

app.listen(port, function() {
  console.log(`listening on ${port}`)
})