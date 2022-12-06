// 리액트 부트스트랩 이용, 로그인 form 
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();  // 새로고침 해주는걸 막아줌
		setAuthenticate(true); // 로그인이 되게 바꿔줌
		navigate('/'); // 첫페이지로 이동
	}

	return (
		<div className="container login-area">
			<Form className="login-form" onSubmit={loginUser}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>이메일 주소</Form.Label>
					<Form.Control type="email" placeholder="이메일 주소 입력" />
					<Form.Text className="text-muted">
						ex) abcd@naver.com
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>비밀번호</Form.Label>
					<Form.Control type="password" placeholder="비밀번호 입력" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="이메일 주소 저장" />
				</Form.Group>
				<Button variant="danger" type="submit">
					로그인
				</Button>
			</Form>
		</div>)
};

export default Login;
