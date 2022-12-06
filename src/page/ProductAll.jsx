/*
	화면 레이아웃, 반응형을 위해 부트스트랩 설치
	$ npm install react-bootstrap bootstrap

	검색기능 추가
	useParams - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는데 사용

	주소 뒤 /?q=파라메터 

*/ 

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
	const [ProductsList, setProductsList] = useState([]);
	let [query, setQuery] = useSearchParams();  // 주소 뒤 파라메터
	
	const getProducts = async() => {
		let keyword = query.get("q") || "";
		// 쿼리값을 읽어온다 / q의 value (아이템을 가져온다), 없을땐 빈 스트링
		let url = `https://my-json-server.typicode.com/ohsuji/hnm/products?q=${keyword}`;
		// 
		let response = await fetch(url); // 브라우저는 네트워크에 요청을 보내고 프로미스객체가 반환
		let data = await response.json();
		setProductsList(data);
	}	
	useEffect(() => {
		getProducts();
	},[query]);  // 키워드를 입력할 때마다 getProducts 함수 실행
	getProducts();

	return (
		<div>
			<Container>
				<Row>
					{ProductsList.map((menu) => (
						<Col sm={6} lg={3}>
							<ProductCard item={menu} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;

// https://www.npmjs.com/package/json-server
// $ npm install -g json-server
// Alternative port 
// $ json-server --watch db.json --port 5000