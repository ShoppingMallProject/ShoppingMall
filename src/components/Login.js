import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import '../css/Login.css';
const headers = { withCredentials: true }; // CORS 오류 방지


function Login() {
    let history = useHistory();

    let [id, setId] = useState(''); // 아이디  setID=>아이디 수정
    let [password, setPwd] = useState(''); // 비밀번호  setPwd=>비밀번호 수정

    // id 이벤트 핸들러
    const handleInputId = (e) => {
        setId(e.target.value)
    }

    // password 이벤트 핸들러
    const handleInputPw = (e) => {
        setPwd(e.target.value)
    }

    // 로그인 버튼 클릭시
    function submit(){

        const s_id = id;
        const s_pwd = password;

        // 서버에 보낼 header와 body(값) 설정.
        const send_param = {
            headers:headers,
            id : s_id,
            password : s_pwd   
        };
        //console.log(send_param);
        
        // fetch 전송
        // Http 메소드 유형(GET, POST, PUT, DELETE, PATCH, TRACE, OPTION..) 설정
        // header에 타입 추가.
        // body에 send_param값을 담기.
        fetch('http://localhost:3001/user/login/',{
            method : "POST",
            headers : { 'Content-Type' : 'application/json'},
            body : JSON.stringify(send_param)
        }).then(res => res.json())
        .then(data => {
            if(data.message == true){ // 서버에서 보낸 message의 값이 true의 경우.
                alert("로그인 성공");
                console.log(data);
            }else if(data.message == false){ // 서버에서 보낸 message의 값이 false의 경우.
                alert("로그인 실패");
            }
        })

    }


return (
    <div className="body">
    <form>
        <div>
        <label>Email</label>
        <input 
            id="em" 
            type="email" 
            value={id}
            onChange={handleInputId}
            />
        </div>
        <label>password</label>
        <input 
            id="pw" 
            type="password" 
            value={password}
            onChange={handleInputPw}
             />

        <br />
        <button className="btn btn-primary" onClick={submit}>로그인하기</button> 
        <button className="btn btn-danger" onClick={()=>{
            history.goBack();
        }}>뒤로가기</button> 
    </form>
    </div>

)
}

export default Login;