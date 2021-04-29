const express = require('express');
const app = express();
//installed body parser; when I did this got a message that new major version of npm available, released like 1hr ago: https://github.com/npm/cli/releases/tag/v7.11.2        MH
const bodyParser = require('body-parser');
//installed mongodb 
const MongoClient = require('mongodb').MongoClient;
const port = 2121;
const dotenv = require('dotenv')

//connect to MongoDB with connection string MH
MongoClient.connect(`${MONGO_URI}`,{
  useUnifiedTopology: true})
    .then(client => {
      console.log('Connected to Database')
      //changing database name MH
      const db = client.db('social-platform-project')
      const quotesCollection = db.collection('quotes')
    })
    .catch(err => console.log(error))

//set up ejs for views
app.set("view engine", "ejs");

//static folder
app.use(express.static("public"))

//parsing
//express lets us use middleware (like bodyParser) with 'use' method MH
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
//created index route
app.use('/', require('./routes/index'))

//move to posts.js in routes folder
//maybe change this to be a post or login form? MH
app.post('/posts', (req, res) => {
  console.log('Hellooooooooooooooooo!')
  //adding this to see values from post 
  console.log(req.body)
  //adding items to MongoDB collection, not sure how to get this to work MH
  quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
})

app.listen(port, function() {
  console.log(`listening on ${port}`)
})