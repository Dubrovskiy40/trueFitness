import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addFavorites, fetchFavorites} from "../../../actions/favoritesAction";

export default () => {
    const data = useSelector((state) => state?.favorites);

  return (
    <div>
        <h1>Избранное</h1>
        <ul>
            {
                data
                    ? data.map(el => {
                        <li key={el}>{el}</li>
                    })
                    : 'В избранное ничего не добавлено ¯\\_(ツ)_/¯'
            }
        </ul>
    </div>
  )
}