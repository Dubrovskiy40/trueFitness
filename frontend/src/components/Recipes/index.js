import style from "./Recipes.module.scss"
import {Link} from "react-router-dom";

// export default (props) => {
//     const { data, isLoading, error } = useFetch('http://localhost:8000/' + props.link);
//     return (
//         <div className={style.recipes__cards}>
//         {error && <h5>{error}</h5>}
//         {isLoading && <h5>Loading...</h5>}
//         {data && data.map((item) => (
//             <CardItem item={item}/>
//         ))}
//     </div>
//     )
// }

export default (props) => {

    const handleTransition = () => {
        console.log('получение нужных рецептов')
    };

    return (
        <ul className={style.recipes}>
            <Link to="/recipes/salads">
                <li className={`${style.recipes__item} ${style.item1}`} onClick={handleTransition}>
                    <h2 className={style.recipes__title}>Салаты</h2>
                </li>
            </Link>
            <Link to="/recipes/firstCourse">
                <li className={`${style.recipes__item} ${style.item2}`} onClick={handleTransition}>
                    <h2 className={style.recipes__title}>Первые блюда</h2>
                </li>
            </Link>
            <Link to="/recipes/secondCourse">
                <li className={`${style.recipes__item} ${style.item3}`} onClick={handleTransition}>
                    <h2 className={style.recipes__title}>Вторые блюда</h2>
                </li>
            </Link>
            <Link to="/recipes/desserts">
                <li className={`${style.recipes__item} ${style.item4}`} onClick={handleTransition}>
                    <h2 className={style.recipes__title}>Десерты</h2>
                </li>
            </Link>
        </ul>
    )
}
