import style from './modalContentRecovery.module.scss';
import PhoneNumber from "./phoneNumber/PhoneNumber";
import NewPassword from "./newPassword/NewPassword";
import AccessCode from "./accessCode/AccessCode";
import ModalButton from "../modalButton/ModalButton";

const ModalContentRecovery = ({ state }) => {
    return (
        <div className={style.modalContentRecovery}>
            <form type="submit" className={style.modalContentRecovery__form} action="">
                <PhoneNumber state={state} />
                <ModalButton nameBtn={"Получить код"} />
            </form>
        </div>
    );
};

export default ModalContentRecovery;
