var express = require('express');
var router = express.Router();
var SqlRunner = require('../db/sql_runner')

/* GET info from shares table listing. */
router.get('/', function (req, res){
  SqlRunner.run('SELECT * FROM shares').then((result) =>{
    res.status(200).json(result.rows)
  });
});

//GET user information
router.get('/users', function (req, res){
  SqlRunner.run('SELECT * FROM users').then((result) =>{
    res.status(200).json(result.rows)
  });
});

router.get('/users_shares', function (req, res){
  SqlRunner.run('SELECT * FROM users_shares').then((result) =>{
    res.status(200).json(result.rows)
  });
});



module.exports = router;
