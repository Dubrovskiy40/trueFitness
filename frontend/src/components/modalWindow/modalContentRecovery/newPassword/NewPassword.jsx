import style from '../modalContentRecovery.module.scss';

const NewPassword = ({ state }) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">{state[2].nameLabel1}
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">{state[2].nameLabel2}
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" placeholder="******" />
            </label>
        </>
    );
};

export default NewPassword;
