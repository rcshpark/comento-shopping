import React from "react";
import styled from "styled-components";

const DetailCard = ({name, price, thumbnail}) => {
    return (
        <CardLine>
            <img
            width="390"
            height="420"
            src={thumbnail}
            alt={name}/>
            <NameStyled>{name}</NameStyled>
            <PriceStyled>{price}</PriceStyled>
        </CardLine>
    );
};

const CardLine = styled.div`
    margin-top: 60px;
`;

const NameStyled = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: -0.01em;

    margin-top: 24px;
    margin-left: 24px;

    color: #000000;
`;

const PriceStyled = styled.div`
    left: 6.15%;
    right: 77.69%;
    top: 34.81%;
    bottom: 63.84%;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    letter-spacing: -0.01em;
    margin-top: 8px;
    margin-left: 24px;

    color: rgba(0, 0, 0, 0.86);
`;

export default DetailCard;