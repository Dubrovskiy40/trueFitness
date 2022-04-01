import style from "../modalContent.module.scss";

const CreatePassword = (props) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Пароль:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Повторите пароль:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
        </>
    );
};

export default CreatePassword;
