import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

function Login() {
    let history = useHistory();


return (
    <div>
    <form>
        <label>Email</label>
        <input type="email" value onChange />
        <label>password</label>
        <input type="password" value onmChange />

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