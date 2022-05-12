import React, {useEffect, useState} from 'react';
import style from "../recipesItem.module.scss";
import {addFavorites, fetchFavorites} from "../../../actions/favoritesAction";
import {useDispatch, useSelector} from "react-redux";

const FirstCourse = () => {
    const [state, setState] = useState(null);
    const [likeActive, setLikeActive] = useState(false);
    const [like, setLike] = useState(5);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [dislike, setDislike] = useState(3);
    const dataFavorites = useSelector((state) => state.favorites);
    const [value, setValue] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3001/food")
            .then((response) => response.json())
            .then((data) => setState(data.firstCourse));
    }, []);

    useEffect(() => {
        console.log('dataFavorites',dataFavorites);
        if (!dataFavorites) {
            dispatch(fetchFavorites());
        }
    }, [dataFavorites]);

    const handlerSubmit = (e) => {
        e.preventDefault();

        console.log('local',window.location.href)
        // const form = e.target;
        console.log('target', e.target.value);
        setValue('Добавили суп');
        dispatch(addFavorites(value));
        setValue(null);
    };

    const handleLike = () => {
        if (dislikeActive) {
            setLikeActive(prevState => !prevState)
            setLike( likeActive ? like - 1 : like + 1)

            setDislikeActive(prevState => !prevState)
            setDislike(dislikeActive ? dislike - 1 : dislike + 1)
        }
        setLikeActive(prevState => !prevState)
        setLike( likeActive ? like - 1 : like + 1)
    };

    const handleDislike = () => {
        if (likeActive) {
            setDislikeActive(prevState => !prevState)
            setDislike(dislikeActive ? dislike - 1 : dislike + 1)

            setLikeActive(prevState => !prevState)
            setLike( likeActive ? like - 1 : like + 1)
        }
        setDislikeActive(prevState => !prevState)
        setDislike(dislikeActive ? dislike - 1 : dislike + 1)
    };

    return (
        <div className={style.food}>
            <div className={style.food__header}>
                <span className={style.food__count}>Найдено {state?.length} рецептов</span>
                <h1 className={style.food__title}>Первые блюда</h1>
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
                                        <span className={likeActive ? `${style.food__checked_red} ${style.food__like}` : style.food__like} onClick={handleLike}>{like}</span>
                                        <span className={dislikeActive ? `${style.food__checked_red} ${style.food__dislike}` : style.food__dislike} onClick={handleDislike}>{dislike}</span>
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
