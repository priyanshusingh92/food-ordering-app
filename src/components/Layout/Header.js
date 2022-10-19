import React from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
const Header = (props)=>{
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img className={classes['main-img']} alt="Delicious meal" src={mealsImage}/>
            </div>
        </React.Fragment>

       
    )
}

export default Header;