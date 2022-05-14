import { useLocation } from "react-router-dom";
import style from "./trainingpage.module.scss"
import Footer from "../../footer/Footer";

const TrainingPage = () => {
  const location = useLocation();
  const { duration, fav, likes, dislikes, trainingName, url, exercises } = location.state;

  return (
    <div>
      <header>
        <div className={style.training_page__header_title_background}>
          <h1 className={style.training_page__header_title}>
            {trainingName}
          </h1>
        </div>
        <div className={style.training_page__header_info}>
          <p className={style.training_page__header_duration}>{duration}</p>
          <button className={style.training_page__header_button}>Добавить в избранное</button>
          <div className={style.training_page__header_favorite}>{fav}</div>
          <div className={style.training_page__header_like}>{likes}</div>
          <div className={style.training_page__header_dislike}>{dislikes}</div>
        </div>
      </header>
      <main>
        {exercises.map((exercise, idx) => (
          <section className={style.training_page__exercise} key={idx}>
            <h1 className={style.training_page__exercise_title}>{exercise.exerciseName}</h1>
            {exercise.exerciseImg.map((img, idx) => (
              <img src={require('../../../images/trainings/' + url + '/' + img)} alt="img" />
            ))}
            <p className={style.training_page__exercise_description}>{exercise.exerciseDescription}</p>
          </section>
        ))}
      </main>
      <Footer bgcWhite={false} />
    </div>
  )
}

export default TrainingPage;