import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import styled, { css } from "styled-components"
import { useHistory, useParams } from "react-router-dom";
import Detail1 from '../asssets/images/Detail1.png'
import Detail2 from '../asssets/images/Detail2.png'
import img1 from '../asssets/images/1.jpeg'
import data from "../data"

const DetailPage = () => {
    // 변수들

    const [currentTab, setCurrentTab] = useState(0);
    let [itemDetail, setItemDetail] = useState(data);
    let history = useHistory();
    let { id } = useParams();

    // 함수들
    useEffect(() => {
    });

    // render 코드
    return (<>
        <Header />

        <div className="container">
            <div className="row">
                <ImgModule img src={itemDetail[id].img} />
                <TextModule> <h2>{itemDetail[id].title}</h2></TextModule>
                <TextModule><p>{itemDetail[id].content}</p></TextModule>
                <TextModule><p>{itemDetail[id].price}</p></TextModule>

                <div>
                    <TabMenu>
                        <div>
                            <button onClick={() => { setCurrentTab(0) }}>상세메뉴</button>
                            <button onClick={() => { setCurrentTab(1) }}>후기</button><button onClick={() => { setCurrentTab(2) }}>춤추기</button>
                        </div>
                    </TabMenu>

                    {currentTab === 0 &&
                        <>
                            <ImgModule img src={Detail1} />
                            <ImgModule img src={Detail2} />
                        </>
                    }
                    {currentTab === 1 &&
                        <>
                            후기
                        </>
                    }
                    {currentTab === 2 &&
                        <>
                            춤을 추겠다
                        </>
                    }
                </div>


                <BtnModule><button className='btn order' onClick={() => {
                    history.push('/cart');
                }}>주문하기</button></BtnModule>
                <BtnModule><button className='btn order' onClick={() => {
                    history.goBack();
                }}>뒤로가기</button></BtnModule>
            </div>
        </div></>
    )

}

export default DetailPage;


const ImgModule = styled.img`
    width: 390px;
    height: 300px;
    display: block;
    margin: 0px auto;
    padding-top: 30px;
    padding-bottom: 20px;
    background-color: white;
`
const TextModule = styled.div`
    display:flex;
    justify-content: center;
    margin: 0px auto;
    border-bottom: 1px solid #e9ecef;
    width: 390px;
    background: white;`

const BtnModule = styled.button`
    border-bottom: 1px solid #e9ecef;
    background: white;
    font-weight: 500; 
    font-size: 30px;
    box-sizing: border-box;
    border: none;
    width: 390px;
    margin: 0px auto;
    display:flex;
    justify-content: center;
    padding-bottom: 65px;
`

const TabMenu = styled.div`
    background-color: #dcdcdc;
    width: 390px;
    margin: 0 auto;
    display:flex;
    justify-content: center;
`;
