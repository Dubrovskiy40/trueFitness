import style from './survey.module.scss';
import '../../styles/style.scss'
import {useState} from "react";

const InputRange = (props) => {
    return (
        <label>Ваша возраст: <input className={style.survey__inpRange} type="range" id="volumeAge" name="volAge" min="14" max="99" value={age} step="1" onChange={event => setAge(event.target.value)} />
            <div id="volumeAge" htmlFor="volAge">{age}</div>
        </label>
    );
};

export default InputRange;
