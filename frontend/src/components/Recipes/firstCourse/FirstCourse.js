import React, {useEffect, useState} from 'react';
import style from "../recipesItem.module.scss";
import {addFavorites, fetchFavorites} from "../../../actions/favoritesAction";
import {useDispatch, useSelector} from "react-redux";

const FirstCourse = () => {
    const data = useSelector((state) => state?.favorites);
    const [state, setState] = useState(null);
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3001/food")
            .then((response) => response.json())
            .then((data) => setState(data.firstCourse));
    }, []);

    useEffect(() => {
        console.log(data);
        if (!data) {
            dispatch(fetchFavorites());
        }
    }, [data]);

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addFavorites(value));
        setValue(null);
    };

    return (
        <div className={style.food}>
            <div className={style.food__header}>
                <span className={style.food__count}>Найдено {state?.length} рецептов</span>
                <h1 className={style.food__title}>Салаты</h1>
            </div>
            {state && (
                <ul className={style.food__wrap}>
                    {state.map((item) => (
                        <li className={style.food__main}>
                            <form onSubmit={handlerSubmit}>
                                <div>
                                    <img className={style.food__img} src={item.img} alt="img"/>
                                </div>
                                <div className={style.food__description}>
                                    <h2 className={style.food__subtitle}>{item.nameRecipe}</h2>
                                    <div className={style.food__productDescription}>
                                        <select className={style.food__selectInp} name="Ингридиенты" id="" >
                                            <option value="">Ингридиенты</option>
                                            {
                                                item.ingredients.map((ing, ind) => {
                                                    return <option key={ing.ind} value="">{ing}</option>
                                                })
                                            }
                                        </select>
                                        <span className={style.food__portions}>Калорийность: {item.calories}</span>
                                        <span>Время готовки: {item.timeForPreparing}</span>
                                    </div>
                                    <div className={style.food__recipe}>
                                        <p>{item.recipe}</p>
                                    </div>
                                    <div>
                                        <button className={style.food__btn} type="submit">Добавить в избранное</button>
                                        <span className={style.food__favorites}>555</span>
                                        <span className={style.food__like}>5</span>
                                        <span className={style.food__dislike}>5</span>
                                    </div>
                                </div>
                            </form>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FirstCourse;
