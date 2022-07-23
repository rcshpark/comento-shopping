import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";
import { useEffect, useState } from "react";




const ProductDetail = () => {
    let {productId} = useParams();
    const [product, setProduct] = useState();

   useEffect(() => {
     const result = getProductDetail(productId);
     setProduct(result);
   }, []);
    return (
        <ProductDetailStyled>
          <Navigation />
        </ProductDetailStyled>
      );
};

const ProductDetailStyled = styled.div``;
export default ProductDetail;