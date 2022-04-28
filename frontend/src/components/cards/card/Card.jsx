import style from "./card.module.scss";

const Card = (props) => {
    console.log(props)
    return (
        <div className={style.card} style={{
            backgroundImage: `url(${props.imgPath})`,
            width: '300px',
            height: '402px'
        }}
        >
            <h2 className={style.card__title}>{props.name}</h2>
        </div>
    );
};

export default Card;