var express = require('express')
var server = require('./server')

var routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/home')
})

routes.get('/home', (req, res) => {
  res.render('index', {greeting: 'Hello World'})
})

routes.get("/students", (req, res) => {
  res.render('students-list', {})
})

routes.get("/subjects", (req, res) => {
  res.render("subjects-list", {})
})

routes.get("/add-student", (req, res) => {
  res.render("add-student")
})


routes.post("/add-student", (req, res) => {
  var body = req.body
  console.log(body)
  res.redirect("/confirmationPage")
})
module.exports = routes

routes.get("/confirmationPage", (req, res)=> {
  res.render("confirmationPage")
})
