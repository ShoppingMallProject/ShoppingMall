import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../css/Register.css';
function Register() {
    

    return (
        <div className="body">
            <form>
                <div>
                <label>Email</label>
                <input type="email"></input>
                </div>
                <div>
                <label>password</label>
                <input type="password"></input>
                </div>
                <div>
                <label>이름</label>
                <input type="text"></input>
                </div>
                <div>
                <input type="radio" value="Male" name="gender" /> 남자
                
                <input type="radio" value="Female" name="gender" /> 여자
                </div>
                <div>
                <label>휴대폰 번호</label>
                <input type="tel"></input>
                </div>

                <button className="btn btn-primary">회원가입 </button> 
                
            </form>
        </div>
    )
}

export default Register;