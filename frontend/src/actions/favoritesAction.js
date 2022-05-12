import {SET_FAVORITES} from "../store/types/favoritesTypes";

export const setFavorites = (data) => ({
    type: SET_FAVORITES,
    payload: data,
});

export const fetchFavorites = () => (dispatch) => {
    fetch("http://localhost:3001/favorites")
        .then((response) => response.json())
        .then((data) => dispatch(setFavorites(data)));
};

export const deleteFavorites = () => {
    fetch("http://localhost:3001/favorites?id=${id}", {
        method: "DELETE",
    });
};

export const addFavorites = (value) => (dispatch) => {
    fetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({value}),
    })
        .then((response) => response.json())
        .then((newData) => dispatch(setFavorites(newData)));
};