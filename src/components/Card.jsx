import React, {useState} from "react";
import styled, {css} from "styled-components"
import { useHistory, useParams } from "react-router-dom";
import Data from '../data'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

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
                    return    <CardItem item={item[i]} i={i}/>
                })
            }

    </div>)}




function CardItem(props){
    let history =useHistory();
    return (
    

        <div className="CardItem" onClick={()=>{history.push('/detail/'+ props.item.id)}}>
            {/* <a href={"/detail/`${props.item.id}`"}> */}
            {/* 태그 네임으로 어떻게 스타일드 컴포넌트 쓰지 */}
        <ImgModule src={props.item.img} /> 
        <TextModule><h4>{props.item.title}</h4></TextModule>
        <TextModule><p>{props.item.content}</p></TextModule>
        {/* </a>   */}
        
    </div>
    )
}

export default Card;