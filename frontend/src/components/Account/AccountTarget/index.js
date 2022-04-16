import style from "./index.module.scss";
import { useEffect, useState } from "react";
import Footer from '../../footer/Footer';
import { useSelector } from "react-redux";

const AccountTarget = () => {
    const [mainTarget, setMainTarget] = useState("Сохранение моего нынешнего веса");
    const [desiredWeight, setDesiredWeight] = useState(75);
    const [trainingRange, setTrainingRange] = useState(30);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(mainTarget, desiredWeight, trainingRange);
    }


    return (
        <div>
            <div className={style.form__wrap}>
                <form onSubmit={event => submitHandler(event)} action="" className={style.form_target}>
                    <label className={style.form_target_item} htmlFor="mainTarget">
                        <span>Ваша цель: </span>
                        <select className={style.form_target_item_select} value={mainTarget} onChange={event => setMainTarget(event.target.value)}>
                            <option value="Сохранение моего нынешнего веса">Сохранение моего нынешнего веса</option>
                            <option value="Увеличение веса">Увеличение веса</option>
                            <option value="Уменьшение веса">Уменьшение веса</option>
                            <option value="Другая">Другая</option>
                        </select>
                    </label>
                    <label htmlFor="desiredWeight" className={`${style.range} ${style.form_target_item}`}>
                        <span className={style.range_subtitle}>Желаемый вес: </span>
                        <div className={style.survey__item}>
                            <div className={style.range_wrap}>
                                <span className={`${style.range__span} ${style.range__spanMin}`}>0</span>
                                <input
                                    id="desiredWeight"
                                    className={`${style.survey__inpRange} ${style.survey__inpRange_black}`}
                                    type="range"
                                    min={0}
                                    max={200}
                                    value={desiredWeight}
                                    onChange={event => setDesiredWeight(event.target.value)}
                                />
                                <span className={`${style.range__span} ${style.range__spanMax}`}>200</span>
                            </div>
                            <span>{desiredWeight}</span>
                        </div>
                    </label>
                    <label className={style.form_target_item} htmlFor="trainingRange">
                        <span className={style.range_subtitle}>Период тренировок (дней):</span>
                        <div className={style.survey__item}>
                            <div className={style.range_wrap}>
                                <span className={`${style.range__span} ${style.range__spanMin}`}>21</span>
                                <input
                                    id="trainingRange"
                                    className={`${style.survey__inpRange}
                                 ${style.survey__inpRange_black}`}
                                    type="range" min={21} max={365}
                                    value={trainingRange}
                                    onChange={event => setTrainingRange(event.target.value)}
                                />
                                <span className={`${style.range__span} ${style.range__spanMax}`}>365</span>
                            </div>
                            <span>{trainingRange}</span>
                        </div>
                    </label>
                    <button type="submit" className={`${style.form_target_button} button`}>Редактировать данные</button>
                </form>
            </div>
            <Footer bgcWhite={false} />
        </div>
    )
}

export default AccountTarget;
