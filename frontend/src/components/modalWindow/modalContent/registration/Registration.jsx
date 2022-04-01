import state from '../modalContent.module.scss';

const Registration = (props) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Введите ваше Имя:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="text" placeholder="Имя" />
            </label>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Введите номер телефона:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="tel" placeholder="8-(999)-999-99-99" />
            </label>
        </>
    );
};

export default Registration;
