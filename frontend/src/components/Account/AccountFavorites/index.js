import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default () => {
    const data = useSelector((state) => state.favorites);
    console.log('data',data)

  return (
    <div>
        <h1>Избранное</h1>
        <ul>
            {
                data
                    ? data.map(el => {
                        <li key={el.id}>{el.test}</li>
                    })
                    : 'В избранное ничего не добавлено ¯\\_(ツ)_/¯'
            }
        </ul>
    </div>
  )
}