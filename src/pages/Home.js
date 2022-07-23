import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import ThemeButton from "../components/ThemeButton";
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { mockTheme1Produdcts,mockTheme2Produdcts } from '../data/mockData';

const Home = () => {

    const[products, setProducts] =  useState();

    const onClickThemeButton = (themeId) => {
        if (themeId === 1) {
            setProducts(mockTheme1Produdcts);
          } else {
            setProducts(mockTheme2Produdcts);
          }
        };
    
    return ( 
    <div>
      <div>
        <Navigation/>
        <ThemeLine></ThemeLine>
        <ThemeSection>
        <ThemeButton
             themeName={"#따순머그컵"}
             onClick={() => onClickThemeButton(1)}
           />
           <ThemeButton
             themeName={"#여름엔바로"}
             onClick={() => onClickThemeButton(2)}
           />
        </ThemeSection>
        <GrayLine/>
      </div>
      <ProductSection>
        {/* return내부는 html문법이 들어가므로 기본적인 if문을 사용할 수 없음. */}
        {products ? (
           products.map((product) => (
             <ProductCard
               key={product.id}
               name={product.name}
               description={product.description}
               thumbnail={product.thumbnail}
             />
           ))
         ) : (
           <div>테마를 선택해주세요</div>
         )}
        </ProductSection>
     </div>
    );
         };



const ThemeLine = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    left: -5px;
    top: 63px;

    background: #EEEEEE;
`;

const ThemeSection = styled.div`
    display:flex;
    gap:12px;
    padding: 40px 12px;

    margin-top: 60px;
`;

const GrayLine = styled.div`
    height:8px;
    width:100%;
    background: #EEEEEE;

`;

const ProductSection = styled.div`
    padding:20px;
`;


export default Home;