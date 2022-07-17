import React from 'react';
import styled  from 'styled-components';

const ProductButton = ({themeName}) => {
    return <ProductButtonStyled>{themeName}</ProductButtonStyled>;
};

const ProductButtonStyled = styled.div`
    right: 50%;
    width: 195px;
    height: 48px;

    left: 13.87%;
    right: 60.75%;
    top: 28.57%;
    bottom: 28.57%;

    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.01em;

    
    color: #000000;

    background: #EEEEEE;
`;


export default ProductButton;