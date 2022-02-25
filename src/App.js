import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';
import GlobalStyle from "./styles/GlobalStyles"
import { Route, Switch } from 'react-router-dom'


// 라우터 셋팅이 가장 main 역할
// 전체적으로 셋팅르 해줘야하는 것들.
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
