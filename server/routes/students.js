var express = require('express');
var router = express.Router();
var models = require('../../db/models');
var Student = models.Student;
module.exports = router;

router.get('/', (req, res, next) => {
    Student.findAll()
        .then(function (students) {
            res.json(students);
        })
        .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => {
      res.json(student);
    })
})

router.post('/', (req,res,next) => {
  Student.create(req.body)
    .then(student => {
      res.json(student);
    })
    .catch((e) => console.log(e))
})

router.put('/', (req,res,next) => {
  Student.update(req.body)
    .then(student => {
      res.json(student);
    })
    .catch((e) => console.log(e))
})

router.delete('/:studentId', (req,res,next) => {
  Student.findById(req.params.studentId)
  .then(student => {
    Student.destroy(student)
    .then(deletedStudent => {
      res.json(deletedStudent)
    })
  })
    .catch((e) => console.log(e))
})
