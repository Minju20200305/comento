import React, {useState} from "react";
import styled, {css} from "styled-components"
import Data from '../data'

const ImgModule = styled.img`
    width: 200px;
    height: 100px;
    display: block;
    margin: 0px auto;
    padding-top: 30px;

    
`;

const TextModule = styled.div`
    display:flex;
    justify-content: center;
    margin: 0px auto;
    border-bottom: 1px solid #e9ecef;`


function Card() {
    let [item, setItem] = useState(Data);

    return  (
        <div className ="Container">
            {
                item.map((a, i)=>{
                    return   <CardItem item={item[i]} i={i} />
                })
            }
    </div>)}




function CardItem(props){
    return (
        <div className="CardItem">
        <ImgModule src={props.item.img} /> 
        {/* 이거 왜 안 됨?? 이렇게 쓰는거 아닌가?  */}
        <TextModule><h4>{props.item.title}</h4></TextModule>
        <TextModule><p>{props.item.content}</p></TextModule>
    </div>
    )
}

export default Card;