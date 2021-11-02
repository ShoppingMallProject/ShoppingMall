const express = require('express');
const router = express.Router();
const mariaDB = require('../db/db_conn')();
const conn = mariaDB.init();
const cors = require('cors');

// 로그인 수행
router.post('/login', cors(), function(req,res){
    let id = req.body.id;
    let password = req.body.password;

    // SQL
    let inputSQL = "SELECT user_pwd FROM user WHERE user_id =?"

    // 프론트-백 단 간 통신 테스트
    res.send({
        id : id,
        password : password,
        message : true
    });
});

// 분리 테스트
router.get('/login', function(req,res){
    console.log("hello");
});

module.exports = router;