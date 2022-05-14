import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./style.module.scss"

const RecipesCard = () => {
    const { paramId } = useParams();
    const [salads, setSalads] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/food")
            .then((response) => response.json())
            .then((data) => setSalads(data.salads));

    }, []);

    return (
        <div className={style.salad}>
            <header className={style.salad__header}>
                <span className={style.salad__header__title}>Сырный суп по-французски с курицей</span>
            </header>
        </div>
    )
}

export default RecipesCard;