import React from 'react';
import {useParams} from "react-router-dom";

const ProductDetail = () => {
    //주소에 전달된 파라미터 읽기
    // 훅 시용

    const params = useParams();
    console.log(params);

    //이런 식으로 데이터를 받아서 리액트에 값을 받는다.
    //fetch("http://localhost:8181/products/{pageNo}/...")

    return (
        <>
        <h1> 제품 상세보기 화면</h1>
            <p>
                제품 ID : {params.prodId},  페이지 번호 : {params.pageNo}

            </p>
        </>
            

    );
};

export default ProductDetail;