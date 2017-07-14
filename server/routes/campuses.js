var express = require('express');
var router = express.Router();
var models = require('../../db/models');
var Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
    Campus.findAll({})
        .then(function (campuses) {
            res.json(campuses);
        })
        .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => {
    res.json(campus)
  })
  .catch(next)
})

router.post('/', (req,res,next) => {
  Campus.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image: req.body.image,
      campusId: req.body.campusId
  })
    .then(student => {
      res.send(student);
    })
})
