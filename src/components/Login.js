import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import '../css/Login.css';

function Login() {
    let history = useHistory();


return (
    <div className="body">
    <form>
        <div>
        <label>Email</label>
        <input type="email" value onChange />
        </div>
        <label>password</label>
        <input type="password" value onChange />

        <br />
        <button className="btn btn-primary">로그인하기</button> 
        <button className="btn btn-danger" onClick={()=>{
            history.goBack();
        }}>뒤로가기</button> 
    </form>
    </div>

)
}

export default Login;