import React, {useEffect, useState} from "react";
import styled, {css} from "styled-components"
import { useHistory, useParams } from "react-router-dom";
import Detail1 from './img/Detail1.png'
import Detail2 from './img/Detail2.png'
import img1 from './img/1.jpeg'

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

function Tab(props) {
    const [currentTab, setCurrentTab] = useState(0)

    

    return (
        <div>
            <TabMenu>
        <div>
        <button onClick={()=> {setCurrentTab(0)}}>상세메뉴</button>
        <button onClick={()=> {setCurrentTab(1)}}>후기</button>
        </div>
            </TabMenu>
       <TabContent currentTab={currentTab}/>
        </div>
    )
}

function TabContent(props){
    if(props.currentTab ===0){
        return <div>0번쨰 내용임</div>
        
    } else if(props.currentTab === 1) {
        return <div>1번째 내용임</div>
    }
}




function Detail(props) {
let history = useHistory();
let {id} = useParams();
useEffect(()=>{

});
    return (
    <div className="container">
        <div className="row">
        <ImgModule img src={props.itemDetail[id].img}/>
        <TextModule> <h2>{props.itemDetail[id].title}</h2></TextModule>
        <TextModule><p>{props.itemDetail[id].content}</p></TextModule>
        <TextModule><p>{props.itemDetail[id].price}</p></TextModule>

        <Tab></Tab>

                
            <ImgModule img src={Detail1}/>
            <ImgModule img src={Detail2}/>

            

            <BtnModule><button className='btn order' onClick={()=>{
                history.push('/cart');
            }}>주문하기</button></BtnModule>
            <BtnModule><button className='btn order' onClick={()=>{
                history.goBack();
            }}>뒤로가기</button></BtnModule>
        </div>
    </div>)
}
export default Detail