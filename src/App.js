import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaAlignJustify } from 'react-icons/fa';
import SearchBar from './components/SearchBar';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

  componentDidMount() {


    
    // DB 테스트
     fetch('http://localhost:3001/db_test')
      .then(res=>res.json())
      .then(data=>{
        console.log(data[0]);
      });
  }

  // 메인 페이지
  render() {
    const {username} = this.state;
    return (
      
        <div className="App">
          <header>
          <div className="top-bar">
            <a>로그인</a>
            <a>회원가입</a>
            <a>고객센터</a>

          </div>
          <div className="mid-bar">
            <div className="category">
            <FaAlignJustify color="white" size="42"/>
            <h4 style={{color:"white"}}>카테고리</h4>
          
            </div>
          
          
            <div className="logo">
              <img alt="logo" src="images/logo.png"></img>
            </div>

            <div className="searchbar">
              <SearchBar/>
            </div>
          </div>

          
          
         
      



          </header>

          <footer>
            <div className="profiles">
              <div className="user">
                <img alt="moboo" src="images/profile2.PNG"></img>
                <div className="intro">
                <p>박준수</p>
                <a href="https://github.com/junsu929">깃허브주소</a>
                </div>
              </div>
              <div className="user">
                <img alt="moboo" src="images/profile1.JPG"></img>
                <div className="intro">
                <p>강지훈</p>
                <a href="https://github.com/kanngji">깃허브주소</a>
                </div>
              </div>

              <button>To.개발자</button>
            </div>
          </footer>
        </div>
      
    );
  };
  
}

export default App;