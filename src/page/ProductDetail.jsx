// useParnas - 현재 경로의 파라메터 들이 저장되어 있음
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { BsSuitHeartFill, BsSuitHeart, BsBagPlus } from 'react-icons/bs';

const ProductDetail = () => {
	const [product, setProduct] = useState(null);
	const [heartFill, setHeartFill] = useState(false);
	let {id} = useParams();

	const getProductsDetail = async() => {
		let url = `https://my-json-server.typicode.com/ohsuji/hnm/products/${id}`;
		let response = await fetch(url); // 브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
		let data = await response.json();
		setProduct(data);
	};	

	const likeToggle = () => {
		setHeartFill(!heartFill);;
	}
	useEffect(() => {
		getProductsDetail();
	}, []);

	return (
		<Container>
			<Row>
				<Col xs={12} sm={7}>
					<img src={product?.img} className="detail-img" />
				</Col>
				<Col sm={{ span : 4, offset : 1}}>
					<div className="detail-titleWrap">
						<div className="detail-title">{product?.title}</div>
						<span className="like" onClick={likeToggle}>
							{heartFill ? <BsSuitHeartFill className="heartFill" /> : <BsSuitHeart />}
							</span>
					</div>
					<div className="detail-price">₩{product?.price}</div>
					{product?.new === true ? <div className="new">NEW</div> : ""}
					{product?.choice === true ? <div className="choice">Weakly Best Seller</div> : ""}
					<div>
						<Dropdown className="detail-dropdown">
							<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
								사이즈 선택
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{product?.size.length > 0 &&
									product.size.map((item) => (
									<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<Button variant="dark"><BsBagPlus /> 추가</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductDetail;
