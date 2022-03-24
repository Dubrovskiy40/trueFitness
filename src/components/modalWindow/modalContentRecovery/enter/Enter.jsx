import style from '../modalContentRecovery.module.scss';

const Enter = (props) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Телефон:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="tel" placeholder="8-(999)-999-99-99" />
            </label>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Пароль:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
        </>
    );
};

export default Enter;
