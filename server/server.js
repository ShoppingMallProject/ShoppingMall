// 서버 백엔드 작업

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 3001; // 포트 3001 서버.
const cookieParser = require('cookie-parser'); // 쿠키
const session = require('express-session'); // 세션
const FileStore = require('session-file-store')(session); // 세션 파일 스토어

// db 설정부분
const mariaDB = require('./db/db_conn')();
const conn = mariaDB.init();


// 미들웨어 등록부분
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({extended: true}));



// 세션 설정
// 세션 설정 부분이 객체 실행 보다 아래에 있을 경우. 세션을 인지하지 못하여 에러가 뜸.
app.use(session({
  key: 'sid',
  secret: 'test123', // 세션의 비밀 키
  resave: false, // 세션을 항상 저장할 지 여부
  saveUninitialized: true, // 세션이 저장되기 전에 uninitialize상태로 저장.
  cookie:{
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간.
  }
}));

// 라우터 객체 경로설정
const userRouter = require('./routes/user');

// 라우터 객체 실행
// 모든 경로는 http://localhost:3001/ 기준.
// 만약, 로그인 기능(login)을 사용한다고 하면, http://localhost:3001/user/login 이다. 
app.use('/user', userRouter);




app.listen(port, ()=>{
    console.log(`server starting ${port}`);
});

module.exports = app;
