import style from '../modalContentRecovery.module.scss';

const NumberConfirmation = (props) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Введите код доступа:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
        </>
    );
};

export default NumberConfirmation;
