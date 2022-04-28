import React, {useEffect, useState} from 'react';
import style from '../recipesItem.module.scss';

const Salads = () => {
    const [salads, setSalads] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/food")
            .then((response) => response.json())
            .then((data) => setSalads(data.salads));

    }, []);

    return (
        <div className={style.food}>
            <div className={style.food__header}>
                <span className={style.food__count}>Найдено {salads?.length} рецептов</span>
                <h1 className={style.food__title}>Салаты</h1>
            </div>
            {salads && (
                <ul className={style.food__wrap}>
                    {salads.map((salad) => (
                        <li className={style.food__main}>
                            <div>
                                <img className={style.food__img} src={salad.img} alt="img"/>
                            </div>
                            <div className={style.food__description}>
                                <h2 className={style.food__subtitle}>{salad.nameRecipe}</h2>
                                <div className={style.food__productDescription}>
                                    <select className={style.food__selectInp} name="Ингридиенты" id="" >
                                        <option value="">Ингридиенты</option>
                                        {
                                            salad.ingredients.map((ing, ind) => {
                                                return <option key={ing.ind} value="">{ing}</option>
                                            })
                                        }
                                    </select>
                                    <span className={style.food__portions}>Калорийность: {salad.calories}</span>
                                    <span>Время готовки: {salad.timeForPreparing}</span>
                                </div>
                                <div className={style.food__recipe}>
                                    <p>{salad.recipe}</p>
                                </div>
                                <div>
                                    <button className={style.food__btn}>Добавить в избранное</button>
                                    <span className={style.food__favorites}>555</span>
                                    <span className={style.food__like}>5</span>
                                    <span className={style.food__dislike}>5</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Salads;
