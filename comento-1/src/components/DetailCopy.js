import React, {useState} from "react";
import styled, {css} from "styled-components"
import Data from "../data";

const ImgModule = styled.img`
width: 390px;
height: 300px;
display: block;
margin: 0px auto;
padding-top: 30px;
padding-bottom: 20px;
background-color: white;
`

function Detail(props) {
    let [detail, setDetail] = useState(Data)
    return (
    <div className="container">
        <div className="row">
            <ImgModule src={detail.img}/>
            {/* <h2 component={props.detail.title}></h2> */}

            {/* 이거 왜 안 되지?? */}
            
        </div>
    </div>)
}
export default Detail