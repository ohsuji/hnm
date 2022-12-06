// 검색 - 키워드 읽어오기
// 로그인 버튼을 누르면 로그인 페이지가 뜬다
// nav는 authenticate, setAuthenticate 전달받아 로그인/아웃 표시되도록
import { React, useState } from 'react'
import { BiLogIn, BiLogOut, BiSearchAlt } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.scss';


const Navbar = ({ authenticate, setAuthenticate }) => {
  const [sideState, setSideState] = useState('-100%');
  // sideBar의 left 상태 설정
  const navigate = useNavigate();
  const menuList = ['여성','남성','신생아/유아','아동','H&M HOME','스포츠','sale']
  
  const search = (event) => {
    if(event.key === 'Enter') {  // 엔터키 눌렀을때만 반응
      let keyword = event.target.value;  // js와 다름 event 안에 value가 들어있음
      navigate(`/?q=${keyword}`);  // 추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
    }
  }

  const gotoLogin = () => {
    navigate("/login");  // login 페이지로 이동
  };
  
  return (
    <div>
      <div className="side_menu" style={{left: sideState}}>
        <div className="closeBtnWrap">
          <GrClose className="closeBtn" onClick={() => {setSideState('-100%'); }} />
        </div>
        <ul className="side-menu-list">
          {menuList.map((menu) => (
          <li>{menu}</li>
          ))}
        </ul>
      </div>

      <div className="burger-menu hide">
        <HiOutlineMenuAlt4 onClick={() => {setSideState('0'); }} />
      </div>

      <div className="login-btnWrap">
        { authenticate ? (<div className="login-btn" onClick={() => setAuthenticate(false)}>
          <BiLogOut /> <span>로그아웃</span>
        </div> ) : ( <div className="login-btn" onClick={gotoLogin}>
          <BiLogIn /> <span>로그인</span>
        </div>)}    
      </div> 
      
      <h1>
        <Link to="/">
          <div className="img_wrap">
            <img width={90} src="img/logo.png" alt="H&M" />
          </div>
        </Link>  
      </h1>
      
      <nav>
        <ul className="menu-list">
          {menuList.map((menu) => (<li>{menu}</li>))}
        </ul>
        <div className="search">
          <BiSearchAlt />
          <input type="text" placeholder='제품검색' onKeyPress={(event) => search(event)} />
        </div>    
      </nav>    
    </div> 
  )
}

export default Navbar

// $ npm install react-icons --save
// $ yarn add sass