// app.js
const express = require('express')
const app     = express()
const path    = require('path') 
const hbs     = require('hbs') 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/search', (req, res, next) => {
    res.send(req.query)
  })

app.get('/', (req, res, next) => {
    res.render('index');
  })

app.get('/about', (req, res, next) => {
    res.render('about');
  })

  app.get('/photos', (req, res, next) => {
    res.render('photos');
  })


app.listen(3000, () => console.log('App listening on port 3000!'))