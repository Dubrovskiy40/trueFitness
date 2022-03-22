import style from "../modalContentRecovery.module.scss";

const AccessCode = ({ state }) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">{state[1].nameLabel}
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
        </>
    );
};

export default AccessCode;
