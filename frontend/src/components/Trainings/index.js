import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TrainingCard from "./TrainingCard";
import ItemPagination from "../ItemPagination";
import style from "./trainings.module.scss"
import { fetchTrainings } from "../../actions/trainingsActions";

const Trainings = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTrainings())
  }, []);

  const trainings = useSelector((state) => (state.trainingsReducer));
  const [currentPage, setCurrentPage] = useState(1);
  const [trainingsPerPage, setTrainingsPerPage] = useState(2)

  const indexOfLastTrainings = currentPage * trainingsPerPage;
  const indexOfFirstTrainings = indexOfLastTrainings - trainingsPerPage;
  const currentTrainings = trainings.slice(indexOfFirstTrainings, indexOfLastTrainings);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(trainings.length / trainingsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className={style.trainings}>
      <div className={style.trainings__header}>
        <div className={style.trainings__header_wrapper}>
          <p className={style.trainings__header_count}>Найдено тренировок: {trainings?.length}</p>
          <h1 className={style.trainings__header_title}>Тренировки</h1>
        </div>
      </div>
      <div className={style.trainings__cards}>
        {currentTrainings && currentTrainings.map((item, idx) => (
          <TrainingCard item={item} key={idx} />
        ))
        }
      </div>
      <ItemPagination
        pageNumbers={pageNumbers}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default Trainings;
