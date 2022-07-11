import {Fragment} from "react";
import classes from './Header.module.css'
import SushiImg from '../../assets/4464064.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Sushi</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={SushiImg} alt="Sushi" />
            </div>
        </Fragment>
    )
}

export default Header