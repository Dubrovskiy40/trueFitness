import style from '../modalContent.module.scss';

const Enter = ({ phone, password, setPhone, setPassword }) => {
    return (
        <>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Телефон:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="telNo" type="tel" minLength="10" maxLength="11" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="8-(999)-999-99-99" required />
            </label>
            <label className={style.modalContentRecovery__label} htmlFor="modalInp">Пароль:
                <input className={style.modalContentRecovery__inp} id="modalInp" name="" type="password" minLength="6" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" required />
            </label>
        </>
    );
};

export default Enter;
