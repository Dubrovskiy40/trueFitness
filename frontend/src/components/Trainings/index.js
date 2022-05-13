import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchTrainings } from "../../actions/trainingsActions";
import TrainingCard from "./TrainingCard";
import style from "./trainings.module.scss"

const Trainings = () => {
  const trainings = useSelector((state) => (state.trainingsReducer))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrainings())
  }, []);

  return (
    <div className={style.trainings}>
      <div className={style.trainings__header}>
        <div className={style.trainings__header_wrapper}>
          <p className={style.trainings__header_count}>Найдено тренировок: {trainings?.length}</p>
          <h1 className={style.trainings__header_title}>Тренировки</h1>
        </div>
      </div>
      <div className={style.trainings__cards}>
        {trainings && trainings.map((item, idx) => (
          <TrainingCard item={item} key={idx} />
        ))
        }
      </div>
    </div>
  );
}

export default Trainings;