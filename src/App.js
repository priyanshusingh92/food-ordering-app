import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import {Fragment, useState} from 'react';
function App() {

  const [cartIsShown, setCartIsShown]= useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
     {
      cartIsShown && <Cart onHideCart={hideCartHandler}/>
     } 
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
