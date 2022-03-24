import style from './modalContentRecovery.module.scss';
import PhoneNumber from "./phoneNumber/PhoneNumber";
import NewPassword from "./newPassword/NewPassword";
import AccessCode from "./accessCode/AccessCode";
import ModalButton from "../modalButton/ModalButton";
import Registration from "./registration/Registration";
import NumberConfirmation from "./numberСonfirmation/NumberConfirmation";
import Enter from "./enter/Enter";
import CreatePassword from "./createPassword/CreatePassword";

const ModalContentRecovery = ({ state }) => {
    return (
        <div className={style.modalContentRecovery}>
            <form type="submit" className={style.modalContentRecovery__form} action="">
                <Enter />
                <ModalButton nameBtn={"Получить код"} />
            </form>
        </div>
    );
};

export default ModalContentRecovery;
