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

routes.get("/subjects-list", (req, res) => {
  var db = req.app.get('db')

  db('subjects')
    .select()
    .then((subjects) => {
      // console.log(students)
      res.render('subjects-list', {subjects})
    })
    .catch((err) => {
      res.send('Problem loading the page' + err.message)
    })
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
  .where('students.id', stud_id)
  // .first()
  .join('student_subject', 'students.id', 'student_subject.student_id')
  .join('subjects', 'student_subject.subject_id', 'subjects.id')
  .join('scores', 'student_subject.id', 'scores.student_subject_id')
  .then((scores)=> {
  res.render('student-score', {student: scores[0], scores})
})
})

routes.get('/subjects-list/:id', (req, res) => {
  var db = req.app.get('db')

  var subj_id= req.params.id

  db('subjects')
  .where('subjects.id', subj_id)
  // .first()
  .join('student_subject', 'subjects.id', 'student_subject.subject_id')
  .join('students', 'student_subject.student_id', 'students.id')
  .join('scores', 'student_subject.id', 'scores.student_subject_id')
  .then((subject)=> {
    console.log(subject)
  res.render('subject-score', {subject})
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
