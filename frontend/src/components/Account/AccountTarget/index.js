import style from "./index.module.scss";
import {useState} from "react";
import Footer from '../../footer/Footer';

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
        <form onSubmit={event => submitHandler(event)} action="" className={style.form_target}>
            <label htmlFor="mainTarget">
                <span>Ваша цель: </span>
                <input type="text" value={mainTarget} onChange={event => setMainTarget(event.target.value)}/>
            </label>
            <label htmlFor="desiredWeight" className={style.range}>
                <span>Желаемый вес: </span>
                <div className={style.survey__item}>
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
                <span className={style.span__range}>{desiredWeight}</span>
            </label>
            <label htmlFor="trainingRange">
                <span>Период тренировок (дней):</span>
                <input
                    id="trainingRange"
                    className={`${style.survey__inpRange}
                     ${style.survey__inpRange_black}`}
                    type="range" min={21} max={365}
                    value={trainingRange}
                    onChange={event => setTrainingRange(event.target.value)}
                />
                <span>{trainingRange}</span>
            </label>
            <button type="submit" className={`${style.form_target_button} button`}>Редактировать данные</button>
        </form>
        <Footer bgcWhite={false}/>
    </div>
  )
}

export default AccountTarget;
