import React, {useState} from 'react';
import Header from './components/Header';
import ItemTemplate from './components/ItemTemplate';
import {createGlobalStyle} from 'styled-components'
import Slider from './components/Slider';
import Card from './components/Card';
import Detail from './components/Detail';
import Data from './data'
import Cart from './components/Cart';
import { Link, Route, Switch } from 'react-router-dom'



const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef
}
`;

function App() {
  let [itemDetail, setItemDetail] = useState(Data)
  
    return (

    <div className='App'>
      <Switch>

        <Route exact path ="/">
            <GlobalStyle />
          <Header/>
          <Slider />
          <ItemTemplate><Card /></ItemTemplate>
          </Route>

          <Route path ="/detail/:id">
          <GlobalStyle/>
          <Header/>
          <Detail itemDetail={itemDetail}></Detail>
          </Route>

          <Route path="/cart">
            <Header/>
            <Cart/>
          </Route>
          </Switch>
    </div>
  );
          
}

export default App;
