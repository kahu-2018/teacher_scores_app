var express = require('express')
var server = require('./server')

var routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/home')
})

routes.get('/home', (req, res) => {
  res.render('index', {greeting: 'Hello World'})
})

routes.get("/students-list", (req, res) => {
  var db = req.app.get('db')

  db('students')
    .select()
    .then((students) => {
      // console.log(students)
      res.render('students-list', {students})
    })
    .catch((err) => {
      res.send('Problem loading the page' + err.message)
    })
})

routes.get("/subjects", (req, res) => {
  res.render("subjects-list", {})
})

routes.get("/add-student", (req, res) => {
  res.render("add-student")
})


routes.post("/add-student", (req, res) => {
  var body = req.body

  db('students')
  .insert({first_name:body.firstname, last_name:body.lastname})

  res.redirect("/confirmationPage")
})

routes.get('/students-list/:id', (req, res) => {
  var db = req.app.get('db')

  var stud_id= req.params.id

  db('students')
  .select()
  .where('students.id', stud_id)
  // .first()
  .join('student_subject', 'students.id', 'student_subject.student_id')
  .select()
  .join('scores', 'student_subject.id', 'scores.student_subject_id')
  .select('first_name', 'score')
  .then((student)=> {
    console.log(student)
  res.render('student-score', {student})
})
})


routes.get('/students/:id/add-score', (req, res) => {
  res.render('add-score', {})
})

routes.post('/add-score', (res,req) => {
  res.reidrect('/confirmationPage', {})
})

module.exports = routes

routes.get("/confirmationPage", (req, res)=> {
  res.render("confirmationPage")
})
