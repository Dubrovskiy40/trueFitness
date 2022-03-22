import style from './survey.module.scss';
import '../../styles/style.scss'
import {useState} from "react";

const Survey = () => {
    const [age, setAge] = useState('18');
    const [weight, setWeight] = useState('65');
    const [height, setHeight] = useState('180');
    const [targetWeight, setTargetWeight] = useState('60');
    const [howDays, setHowDays] = useState('30');

    const [checked, setChecked] = useState(false);

    const handleChangeCheckbox = () => {
        setChecked(checked ? true : !checked);
    };

    return (
        <div className={style.survey}>
            <form className={style.survey__form} action="">
                <div className={style.survey__top}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <h2 className={style.survey__title}>Персональные данные</h2>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваше имя:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="text" placeholder="Имя" />
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша фамилия:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="text" placeholder="Фамилия" />
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша возраст:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="range" id="volumeAge" name="volAge" min="14" max="99" value={age} step="1" onChange={event => setAge(event.target.value)} />
                                    <span className={style.span__range}>{age}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваш пол:</h3>
                                </div>
                                <div className={[style.survey__item, style.survey__item_gender].join(' ')}>
                                    <label className={style.survey__gender} htmlFor="gender1">
                                        <input type="radio" id="gender1" name="survey-gender" />
                                        <span>М</span>
                                    </label>
                                    <label className={style.survey__gender} htmlFor="gender2">
                                        <input type="radio" id="gender2" name="survey-gender" />
                                        <span>Ж</span>
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша вес:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="range" id="volumeWeight" name="volWeight" min="40" max="140" value={weight} step="1" onChange={event => setWeight(event.target.value)} />
                                    <span className={style.span__range}>{weight}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша рост:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="range" id="volumeHeight" name="volHeight" min="100" max="210" value={height} step="1" onChange={event => setHeight(event.target.value)} />
                                    <span className={style.span__range}>{height}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.survey__center}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Ваша Цель:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.survey__radio} htmlFor="aim1">
                                        <input type="radio" id="aim1" name="aim" onClick={() => (setChecked(false))} />
                                        <span>Потеря веса</span>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="aim2">
                                        <input type="radio" id="aim2" name="aim" onClick={handleChangeCheckbox} />
                                        <span>Сохранение моего нынешнего веса</span>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="aim3">
                                        <input type="radio" id="aim3" name="aim" onClick={() => (setChecked(false))} />
                                        <span>Увеличение веса</span>
                                    </label>
                                </div>
                            </div>
                            <div className={`${style.survey__wrap1} ${checked ? style.block__disabled : ''}`}>
                                <div className={style.survey__subtitle}>
                                    <h3>Желаемый<br/> Вес:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={[style.survey__inp, style.survey__inpRange].join(' ')} type="range" id="wantWeight" name="weight" min="40" max="140" value={targetWeight} step="1" onChange={event => setTargetWeight(event.target.value)} />
                                    <span className={style.span__range}>{targetWeight}</span>
                                </div>
                            </div>
                            <div className={`${style.survey__wrap1} ${checked ? style.block__disabled : ''}`}>
                                <div className={style.survey__subtitle}>
                                    <h3>Период<br/> тренировок<br/> (дней):</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <input className={style.survey__inp} type="range" id="countDays" name="days" min="21" max="365" value={howDays} step="1" onChange={event => setHowDays(event.target.value)} />
                                    <span className={style.span__range}>{howDays}</span>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3 >Ваш Уровень<br/> Активности:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.survey__radio} htmlFor="active1">
                                        <input type="radio" id="active1" name="active" />
                                        <span>Сидячий</span>
                                        <p>Виды повседневной деятельности, требующие минимальных усилий, таких как отдых, сидение за рабочим столом или за рулем</p>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="active2">
                                        <input type="radio" id="active2" name="active" />
                                        <span>Малоактивный</span>
                                        <p>Виды повседневной деятельности, требующие некоторых усилий, таких как временное пребывание в стоячем положении, работа по дому или несложные упражнения</p>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="active3">
                                        <input type="radio" id="active3" name="active" />
                                        <span>Активный</span>
                                        <p>Виды повседневной деятельности, трребующие небольших усилий, таких как стояние, физическая рработа или регулярные умеренные физические нагрузки</p>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="active4">
                                        <input type="radio" id="active4" name="active" />
                                        <span>Очень Активный</span>
                                        <p>Виды повседневной деятельности, требующие интенсивных физических усилий, таких как строительные работы или регулярные энергичные упражнения</p>
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Продолжитель&shy;ность сна:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.survey__radio} htmlFor="sleep1">
                                        <input type="radio" id="sleep1" name="sleep" value="" />
                                        <span>менее 6 часов</span>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="sleep2">
                                        <input type="radio" id="sleep2" name="sleep" value="" />
                                        <span>6-8 часов</span>
                                    </label>
                                    <label className={style.survey__radio} htmlFor="sleep3">
                                        <input type="radio" id="sleep3" name="sleep" value="" />
                                        <span>более 8 часов</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.survey__bottom}>
                    <div className={style.survey__wrap}>
                        <div className={style.survey__wrap_block}>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Питание:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={style.survey__checkbox} htmlFor="food1">
                                        <input type="checkbox" id="food1" name="food1" />
                                        <span>Кушаю на ночь</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food2">
                                        <input type="checkbox" id="food2" name="food2" />
                                        <span>Пью газировку, кофе, соки ...</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food3">
                                        <input type="checkbox" id="food3" name="food3" />
                                        <span>Кушаю много сладкого</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food4">
                                        <input type="checkbox" id="food4" name="food4" />
                                        <span>Кушаю много соленого</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food5">
                                        <input type="checkbox" id="food5" name="food5" />
                                        <span>Кушаю фастфуд/жирную пищу</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food6">
                                        <input type="checkbox" id="food6" name="food6" />
                                        <span>Стараюсь придерживаться ПП</span>
                                    </label>
                                    <label className={style.survey__checkbox} htmlFor="food7">
                                        <input type="checkbox" id="food7" name="food7" />
                                        <span>Правильно питаюсь</span>
                                    </label>
                                </div>
                            </div>
                            <div className={style.survey__wrap1}>
                                <div className={style.survey__subtitle}>
                                    <h3>Потребление<br/> воды в день:</h3>
                                </div>
                                <div className={style.survey__item}>
                                    <label className={[style.survey__radio, style.survey__radio_white].join(' ')} htmlFor="water1">
                                        <input type="radio" id="water1" name="survey-water" value="" />
                                        <span>до 0,5 л</span>
                                    </label>
                                    <label className={[style.survey__radio, style.survey__radio_white].join(' ')} htmlFor="water2">
                                        <input type="radio" id="water2" name="survey-water" value="" />
                                        <span>0,5 - 1,5 л</span>
                                    </label>
                                    <label className={[style.survey__radio, style.survey__radio_white].join(' ')} htmlFor="water3">
                                        <input type="radio" id="water3" name="survey-water" value="" />
                                        <span>более 1,5 л</span>
                                    </label>
                                    <label className={[style.survey__radio, style.survey__radio_white].join(' ')} htmlFor="water4">
                                        <input type="radio" id="water4" name="survey-water" value="" />
                                        <span>Не пью воду</span>
                                    </label>
                                </div>
                            </div>
                            <bottom className={style.survey__btn} type="submit">Сохранить Данные</bottom>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Survey;
