import React, { useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { useHistory, useParams } from "react-router-dom";
import Data from '../data'
import styled from "styled-components";


const HomePage = () => {
    let [item, setItem] = useState(Data);
    let history = useHistory();

    return (
        <>
            <Header />
            <Slider />

            <div className="item-container">
                {
                    item.map((a, i) => {
                        return <CardItem item={item[i]} i={i} ></CardItem>
                    })
                }

            </div>

        </>
    )
}

export default HomePage;


const CardItem = styled.div`
    width:390px;
    height: 750px;
    margin: auto;
    background: white;
    overflow: hidden;
`