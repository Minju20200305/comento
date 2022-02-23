import React, {useState} from 'react';
import Header from './components/Header';
import ItemTemplate from './components/ItemTemplate';
import {createGlobalStyle} from 'styled-components'
import Slider from './components/Slider';
import Card from './components/Card';



const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef
}
`;

function App() {
  
    return (

    <div>
      <GlobalStyle />
          <Header/>
          <Slider />
          <ItemTemplate><Card /></ItemTemplate>
        
        
    </div>
  );
}

export default App;
