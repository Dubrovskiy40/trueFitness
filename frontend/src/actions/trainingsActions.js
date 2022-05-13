import { SET_TRAININGS } from "../store/types/trainingsTypes";

export const setTrainings = (data) => ({
  type: SET_TRAININGS,
  payload: data,
});

export const fetchTrainings = () => (dispatch) => {
  fetch("http://localhost:3001/trainings")
    .then((response) => response.json())
    .then((data) => dispatch(setTrainings(data.allTrainings)));
};