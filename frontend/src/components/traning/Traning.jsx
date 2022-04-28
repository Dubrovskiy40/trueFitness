import style from './traning.module.scss';
import Cards from "../cards/Cards";

const Traning = (props) => {

    const traningPseudoAPI = [
        {id: 1, imgPath: '/src/images/traning/press.png', name: 'Пресс будет гореть'},
        {id: 2, imgPath: '/src/images/traning/top-body.png', name: 'Тренировка на верхнюю часть тела'},
        {id: 3, imgPath: '/src/images/traning/circuit-traning.png', name: 'Круговая тренировка'},
    ];

    return (
        <div className={style.traning}>
            <div className={style.traning__wrap}>
                <h2 className={ [style.traning__title, style.title].join(' ') }>Тренировки</h2>
                {/*<Cards path={traningPseudoAPI} />*/}
            </div>
        </div>
    );
};

export default Traning;