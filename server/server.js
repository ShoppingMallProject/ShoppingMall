// 서버 백엔드 작업

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 3001; 
const cookieParser = require('cookie-parser'); // 쿠키
const session = require('express-session'); // 세션

const mariaDB = require('./db/db_conn')();
const conn = mariaDB.init();


app.use(cors());

app.use(bodyParser.json());
//app.use('/api', (req, res)=> res.json({username:'test'}));

app.get('/db_test', function(req, res, next) {
    conn.query('select name from test', function(err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
      if(!err) { // 에러가 없다면
        res.send(rows); // rows 를 보내주자
      } else { // 에러가 있다면?
        console.log("err : " + err);
        res.send(err); // console 창에 에러를 띄워주고, 에러를 보내준다.
      }
    });
  });

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
});