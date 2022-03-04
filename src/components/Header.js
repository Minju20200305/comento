import React from "react";
import styled, {css} from "styled-components"

const HeaderModule = styled.div`
    width: 390px;
    height: 66px;
    margin: auto;
    overflow: hidden;
    background: white;
    line-height: 66px;
    text-align: center;

    border-bottom: 1px solid #e9ecef;
`;

function Header() {
    return <HeaderModule>코멘토 쇼핑몰</HeaderModule>

}

export default Header; 