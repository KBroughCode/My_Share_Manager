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
//GET users share information
router.get('/users_shares/:id', function (req, res){
  SqlRunner.run('SELECT users_shares.share_id AS share_id, quantity, shares.name,shares.symbol FROM users_shares LEFT JOIN shares ON shares.id = users_shares.share_id WHERE user_id = $1',[req.params.id]).then((result) =>{
    res.status(200).json(result.rows)
  });
});



module.exports = router;
