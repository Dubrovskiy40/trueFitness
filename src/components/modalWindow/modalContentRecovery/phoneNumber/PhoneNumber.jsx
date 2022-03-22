import style from '../modalContentRecovery.module.scss';

const PhoneNumber = ({ state }) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">{state[0].nameLabel}
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="tel" placeholder="8-(999)-999-99-99" />
            </label>
        </>
    );
};

export default PhoneNumber;
