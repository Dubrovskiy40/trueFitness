import style from '../modalContentRecovery.module.scss';

const PhoneNumber = (props) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Введите номер телефона:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="tel" placeholder="8-(999)-999-99-99" />
            </label>
        </>
    );
};

export default PhoneNumber;
