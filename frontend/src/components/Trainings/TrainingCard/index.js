import { Link } from 'react-router-dom';
import style from './trainingcard.module.scss'

const TrainingCard = ({ item }) => {
  return (
    <div className={style.training__card} key={item.id}>
      <img src={require('../../../images/trainings/' + item.img)} alt="img" />
      <div className={style.training__card_info}>
        <Link to={'/trainings/' + item.url} state={item}>
          <h2 className={style.training__card_heading}>{item.trainingName}</h2>
        </Link>
        <p className={style.training__card_duration}>{item.duration}</p>
        <div className={style.training__card_footer}>
          <button className={style.training__card_button}>Добавить в избранное</button>
          <div className={style.training__card_favorite}>{item.fav}</div>
          <div className={style.training__card_like}>{item.likes}</div>
          <div className={style.training__card_dislike}>{item.dislikes}</div>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;