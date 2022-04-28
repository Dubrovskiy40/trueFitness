import style from './food.module.scss';

const Food = (props) => {

    const foodPseudoAPI = [
        {imgPath: '/src/images/food/salads.png', name: 'Салаты'},
        {imgPath: '/src/images/food/dessert.png', name: 'Десерты'},
        {imgPath: '/src/images/food/firstCourse.png', name: 'Первое блюдо'},
    ];

    return (
        <div className={style.food}>
            <div className={style.food__wrap}>
                <h2 className={ [style.food__title, style.title].join(' ') }>Рецепты</h2>
            </div>
        </div>
    );
};

export default Food;