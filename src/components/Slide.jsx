import React from "react";
import styled from "styled-components";


export default function Slide({ img }) {
    return <IMG src={img} />;
  }
  
  const IMG = styled.img`
    width: 200px;
    height: 100px;
    margin: 20px;
    opacity: 0.5;
    background-color: black;
    
  `;