import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import DetailCard from '../components/DetailCard';
import ProductButton from '../components/ProductButton';
import ProductButton2 from '../components/ProductButton2';

const ProductDetail = () => {
    return (
    <div>
    <div>
        <Navigation/>
    </div>
   <div>
        <ProductSection>
        <DetailCard
        name='비숑 블랙 머그잔'
        price='21,800원'
        thumbnail='https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg'/>
        </ProductSection>
   </div>
   <div>
        <ThemeSection>
        <ProductButton themeName={"상품 설명"}/>
        <ProductButton2 themeName={"상품 후기"}/>
        </ThemeSection>
   </div>
   </div>
    )
};
const ProductSection = styled.div`
margin-top: 60px;
`;


const ThemeSection = styled.div`
    display:flex;
    gap:0px;
    padding: 24px 0px;


`;

export default ProductDetail;