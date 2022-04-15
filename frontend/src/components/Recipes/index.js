import CardItem from "../CardItem";
import useFetch from "../useFetch/useFetch";
import style from "./Recipes.module.scss"

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
            <li className={`${style.recipes__item} ${style.item1}`} onClick={handleTransition}>
                <h2 className={style.recipes__title}>Салаты</h2>
            </li>
            <li className={`${style.recipes__item} ${style.item2}`} onClick={handleTransition}>
                <h2 className={style.recipes__title}>Первые блюда</h2>
            </li>
            <li className={`${style.recipes__item} ${style.item3}`} onClick={handleTransition}>
                <h2 className={style.recipes__title}>Вторые блюда</h2>
            </li>
            <li className={`${style.recipes__item} ${style.item4}`} onClick={handleTransition}>
                <h2 className={style.recipes__title}>Десерты</h2>
            </li>
        </ul>
    )
}
