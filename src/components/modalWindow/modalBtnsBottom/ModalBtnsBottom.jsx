import style from './modalBtnsBottom.module.scss';

const ModalBtnsBottom = () => {
    return (
        <div className={style.modalBtnsBottom}>
            <a className={style.modalBtnsBottom__btn} href="#">Забыли пароль?</a>
            <a className={style.modalBtnsBottom__btn} href="#">Регистрация</a>
        </div>
    );
};

export default ModalBtnsBottom;
