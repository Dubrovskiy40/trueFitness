import style from './cardItem.module.scss';
const CardItem = ({ item, category }) => {
    return (
        <div className={style.card__item}>
            <a target="_blank" href={`${category}/${item.url}`} key={item.id}>
                <img
                    // src={require("../../images/carousel/" + item.backgroundImg)}
                    src={require("../../images/" + category + '/' + item.url + '/' + item.img)}
                    className={style.card__item__img}
                    alt=""
                />
                <h3 className={style.card__item__heading + ' heading--top-left'}>{item.trainingName}</h3>
            </a>
        </div>
    )
}

export default CardItem;
