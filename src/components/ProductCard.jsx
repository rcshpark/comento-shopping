import React from "react";
import styled from "styled-components";

const ProductCard = ({name, description, thumbnail,onClick}) => {
    return (
        <CardLine onClick={onClick}>
        <img
         width="341"
         height="204"
         src={thumbnail}
         alt={name} />
        <NameStyled>{name}</NameStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
    </CardLine>);
};

const CardLine = styled.div`
margin-top: 40px;
`;

const NameStyled = styled.div`

left: 0%;
right: 59.94%;
top: 73.99%;
bottom: 17.23%;

font-weight: 700;
font-size: 20px;
line-height: 26px;

letter-spacing: -0.01em;

color: #000000;

margin-top: 12px;
`;

const DescriptionStyled = styled.div`

left: 0%;
right: 10.82%;
top: 86.82%;
bottom: -1.01%;

white-space: pre-line;

font-weight: 400;
font-size: 16px;
line-height: 21px;

letter-spacing: -0.01em;

color: #000000;

margin-top: 12px;
`;


export default ProductCard;