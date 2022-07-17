import React from 'react';
import styled from 'styled-components';

const Navigation =() => {
    return (
    <NavigationStyle>코멘토 쇼핑</NavigationStyle> 
    );
};

const NavigationStyle = styled.div`
    position: absolute;
    width: 87px;
    height: 26px;
    left: 152px;
    top: 20px;

    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    
`;

export default Navigation;