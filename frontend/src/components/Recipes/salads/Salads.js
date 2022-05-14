import React, { useEffect, useState } from 'react';
import style from '../recipesItem.module.scss';
import ItemPagination from '../../ItemPagination';
import { Link } from 'react-router-dom'
const Salads = () => {
    const [salads, setSalads] = useState(null);
    const [likeActive, setLikeActive] = useState(false);
    const [like, setLike] = useState(5);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [dislike, setDislike] = useState(3);

    useEffect(() => {
        fetch("http://localhost:3001/food")
            .then((response) => response.json())
            .then((data) => setSalads(data.salads));

    }, []);

    const handleLike = () => {
        if (dislikeActive) {
            setLikeActive(prevState => !prevState)
            setLike(likeActive ? like - 1 : like + 1)

            setDislikeActive(prevState => !prevState)
            setDislike(dislikeActive ? dislike - 1 : dislike + 1)
        }
        setLikeActive(prevState => !prevState)
        setLike(likeActive ? like - 1 : like + 1)
    };

    const handleDislike = () => {
        if (likeActive) {
            setDislikeActive(prevState => !prevState)
            setDislike(dislikeActive ? dislike - 1 : dislike + 1)

            setLikeActive(prevState => !prevState)
            setLike(likeActive ? like - 1 : like + 1)
        }
        setDislikeActive(prevState => !prevState)
        setDislike(dislikeActive ? dislike - 1 : dislike + 1)
    };

    // /////////////////////////////////////////////////////

    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(2)

    // const indexOfLastItems = currentPage * itemsPerPage;
    // const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    // const currentItems = salads.slice(indexOfFirstItems, indexOfLastItems);
    // const pageNumbers = [];

    // for (let i = 1; i <= Math.ceil(salads.length / itemsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const nextPage = () => {
    //     if (currentPage !== pageNumbers.length) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }

    // const prevPage = () => {
    //     if (currentPage !== 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }
    // /////////////////////////////////////////////////////

    return (
        <div className={style.food}>
            <div className={style.food__header}>
                <span className={style.food__count}>Найдено {salads?.length} рецептов</span>
                <h1 className={style.food__title}>Салаты</h1>
            </div>
            {salads && (
                <ul className={style.food__wrap}>
                    {salads.map((salad) => (
                        <li key={salad.id} className={style.food__main}>
                            <Link to={`/recipes/salads/${salad.id}`} >
                                <img className={style.food__img} src={salad.img} alt="img" />
                            </Link>
                            <div className={style.food__description}>
                                <h2 className={style.food__subtitle}>{salad.nameRecipe}</h2>
                                <div className={style.food__productDescription}>
                                    <select className={style.food__selectInp} name="Ингридиенты" id="" >
                                        <option value="">Ингридиенты</option>
                                        {
                                            salad.ingredients.map((ing, ind) => {
                                                return <option key={ing.ind} value="">{ing}</option>
                                            })
                                        }
                                    </select>
                                    <span className={style.food__portions}>Калорийность: {salad.calories}</span>
                                    <span>Время готовки: {salad.timeForPreparing}</span>
                                </div>
                                <div className={style.food__recipe}>
                                    <p>{salad.recipe}</p>
                                </div>
                                <div>
                                    <button className={style.food__btn}>Добавить в избранное</button>
                                    <span className={style.food__favorites}>555</span>
                                    <span className={likeActive ? `${style.food__checked_red} ${style.food__like}` : style.food__like} onClick={handleLike}>{like}</span>
                                    <span className={dislikeActive ? `${style.food__checked_red} ${style.food__dislike}` : style.food__dislike} onClick={handleDislike}>{dislike}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {/* <ItemPagination
                pageNumbers={pageNumbers}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
            /> */}
        </div>
    );
};

export default Salads;
