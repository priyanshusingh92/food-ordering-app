import React from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Priyanshu's Kitchen</h1>
              <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img alt="Delicious meal" src={mealsImage}/>
            </div>
        </React.Fragment>

       
    )
}

export default Header;