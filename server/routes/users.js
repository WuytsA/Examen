var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('exam')
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.collection('studenten').find().toArray((err, result) => {
    res.json(result);
  })
});

router.post('/toevoegen', (req, res) => {
  db.collection('studenten').insertOne({ naam: req.body.naam, geboorteDatum: req.body.geboorteDatum, studierichting: req.body.studierichting }, (err, response) => res.json(response))
})

router.get('/:naam', function (req, res, next) {
    db.collection('studenten').find().toArray((err, result) => {
      console.log(res.json(result));
    })
});

module.exports = router;
