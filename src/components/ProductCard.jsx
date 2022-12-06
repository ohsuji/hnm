// 상품을 눌렀을때 그 상품에 해당하는 ProductDetail페이지로 넘어가게
import React from 'react';
import { useNavigate } from "react-router-dom";
import './ProductCard.scss';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/Product/${item.id}`);

  }
  return (
    <div className="ProductCard">
      <div className="img-container" onClick={showDetail}>
        <img src={item?.img} alt="" />
        <div className="item-box">
          { item?.choice === true ? ( <div className="event">Weakly Best Seller</div>) : ("") }
          { item?.new === true ? <div className="new">NEW</div> : "" }
        </div>
      </div>
      <div className="title">{item?.title}</div>
      <div className="price">₩{item?.price}</div>
    </div>
  )
}

export default ProductCard