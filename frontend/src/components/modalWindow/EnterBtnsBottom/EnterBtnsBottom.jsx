import style from './EnterBtnsBottom.module.scss';

const EnterBtnsBottom = () => {
    return (
        <div className={style.modalBtnsBottom}>
            <a className={style.modalBtnsBottom__btn} href="#">Забыли пароль?</a>
            <a className={style.modalBtnsBottom__btn} href="#">Регистрация</a>
        </div>
    );
};

export default EnterBtnsBottom;
