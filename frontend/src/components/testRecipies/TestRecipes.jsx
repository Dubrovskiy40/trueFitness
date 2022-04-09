import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFood, deleteFood, fetchFood} from "../../actions/foodAction";
import style from './testRecipies.module.scss';
import img1 from '../../images/recipe/weightUp/firstCourse/1.jpg';
import img2 from '../../images/recipe/weightUp/firstCourse/2.jpg';
import img3 from '../../images/recipe/weightUp/firstCourse/3.jpg';
import img4 from '../../images/recipe/weightUp/firstCourse/4.jpg';
import img5 from '../../images/recipe/weightUp/firstCourse/5.jpg';
import img6 from '../../images/recipe/weightUp/firstCourse/6.jpg';

const TestRecipes = () => {
    const [value, setValue] = useState("");

    const data = useSelector((state) => state.food);
    console.log('data', data)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('data',data)
        if (!data) {
            dispatch(fetchFood());
        }
    }, [data]);

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addFood(value));
        setValue("");
    };

    return (
        <div className={style.testRecipe}>
            <div className={style.testRecipe__wrap}>
                <h2>Рецепты....</h2>
                <div className={style.wrap}>
                    {
                        data?.firstCourse?.map((el, ind) => {
                            return (
                                <div className={style.recipe} key={el.ind}>
                                    <h1 className={style.recipe__title}><b>{el.nameRecipe}</b></h1>
                                    <div className={`${style.recipe__card} ${style.card}`}>
                                        <ul className={style.card__content}>
                                            <li className={style.card__item}><b>Время подготовки:</b> {el.preparationTime}</li>
                                            <li className={style.card__item}><b>Время приготовления:</b> {el.timeForPreparing}</li>
                                            <li className={style.card__item}><b>Ингредиенты:</b> {el.ingredients}</li>
                                            <li className={style.card__item}>{el.recipe}</li>
                                        </ul>
                                        <div className={style.card__img_block}>
                                            <img className={style.card__img} src={img1} alt="img"/>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default TestRecipes;