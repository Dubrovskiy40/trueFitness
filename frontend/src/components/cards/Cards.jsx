import style from "./cards.module.scss";
import Card from "./card/Card";
// import leftArrow from '../../src/images/left-arrow.png';
// import rightArrow from '../../src/images/right-arrow.png';
import {useState} from "react";

const Cards = (props) => {

    return (
        <div className={style.cards}>
            {/*<button><img src={leftArrow} alt="left-arrow"/></button>*/}
            <Card props={props} />
            <Card props={props} />
            <Card props={props} />
            {/*<button><img src={rightArrow} alt="left-arrow" alt="right-arrow"/></button>*/}
        </div>
    );
};

export default Cards;
