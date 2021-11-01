const db_conf = require('./db_config.json');

module.exports = (function(){
    return {
        local : { // 로컬
            host: 'localhost', // 127.0.0.1
            port: db_conf.port,  // 포트번호 3308-MariaDB
            user: db_conf.user, // root 
            password: db_conf.password, // 비밀번호
            database: db_conf.database, // 데이터베이스명
            multipleStatements: true // 다중 쿼리 허용
        },
        real : { // 실서버
            host : '',
            port : '',
            user : '',
            password : '',
            database : ''
        },
        staging : { // 스테이징 
            host : '',
            port : '',
            user : '',
            password : '',
            database : ''
        },
        dev : { // 개발 서버
            host : '',
            port : '',
            user : '',
            password : '',
            database : ''
        }
    }
})();