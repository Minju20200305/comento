import React from "react";
import styled from "styled-components";

const ItemTemplateBlock = styled.div`
width:390px;
height: 750px;
margin: auto;
background: white;
overflow: hidden;
;
`

function ItemTemplate({children}) {
    return <ItemTemplateBlock>{children}</ItemTemplateBlock>
}

export default ItemTemplate;