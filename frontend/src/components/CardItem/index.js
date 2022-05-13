import { Link } from 'react-router-dom';
import style from './cardItem.module.scss';
const CardItem = ({ item, category }) => {
    return (
        <div className={style.card__item}>
            <Link to={category === 'trainings' ? `${category}/${item.url}` : `recipes/${item.link}`} key={item.id} state={item}>
                <img
                    src={require("../../images/" + category + '/' + item.url + '/' + item.img)}
                    className={style.card__item__img}
                    alt=""
                />
                <h3 className={style.card__item__heading + ' heading--top-left'}>
                    {category === 'trainings' ? item.trainingName : item.recipesCategory}
                </h3>
            </Link>
        </div>
    )
}

export default CardItem;
