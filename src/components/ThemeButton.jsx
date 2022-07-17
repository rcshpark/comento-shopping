import React from 'react';
import styled  from 'styled-components';

const ThemeButton = ({themeName}) => {
    return <ThemeButtonStyled>{themeName}</ThemeButtonStyled>;
};

const ThemeButtonStyled = styled.div`
background: rgba(0, 0, 0, 0.5);
width: 'fit-content';
border-radius: 10px;
font-weight: 700;
font-size: 20px;
color: #FFFFFF;
line-height: 26px;
padding: 24px 16px;

left: 0%;
right: 0.69%;
top: 1.33%;
bottom: 0%;

margin-left: 24px;
`;


export default ThemeButton;