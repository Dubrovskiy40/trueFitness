import style from './modalContent.module.scss';
import ModalButton from "../modalButton/ModalButton";
import Enter from "./enter/Enter";

const ModalContentRecovery = ({ handlerSubmit, phone, password, setPhone, setPassword, isLink, path, errorFlg }) => {

    return (
        <div className={style.modalContentRecovery}>
            <form onSubmit={handlerSubmit} className={style.modalContentRecovery__form}>
                <Enter phone={phone} password={password} setPhone={setPhone} setPassword={setPassword} />
                <ModalButton type="submit" nameBtn={"Получить код"} isLink={isLink} path={path} />
            </form>
            {
                errorFlg && (
                    <div className={style.modalContentRecovery__message}>Ошибка доступа. Такой пользователь не зарегистрирован!</div>
                )
            }
        </div>
    );
};

export default ModalContentRecovery;
