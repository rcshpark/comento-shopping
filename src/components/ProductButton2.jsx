import React from 'react';
import styled  from 'styled-components';

const ProductButton2 = ({themeName}) => {
    return <ProductButton2Styled>{themeName}</ProductButton2Styled>;
};

const ProductButton2Styled = styled.div`

background: #FFFFFF;

    right: 50%;
    bottom: 2.04%;
    top: 50%;
    width: 195px;
    height: 48px;

    left: 63.46%;
    right: 11.16%;
    top: 28.57%;
    bottom: 28.57%;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    text-align: center;
    letter-spacing: -0.01em;

    color: #000000;
`;


export default ProductButton2;