import style from './modalContent.module.scss';
import ModalButton from "../modalButton/ModalButton";
import Enter from "./enter/Enter";
import CreatePassword from "./createPassword/CreatePassword";
import NumberConfirmation from "./numberСonfirmation/NumberConfirmation";
import Registration from "./registration/Registration";
import RecoveryNewPassword from "./recoveryNewPassword/RecoveryNewPassword";
import RecoveryEnter from "./recoveryEnter/RecoveryEnter";

const ModalContent = ({ handlerSubmit, phone, password, setPhone, setPassword, isLink, path, errorFlg }) => {

    return (
        // <CreatePassword handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
        // <NumberConfirmation handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
        // <Registration handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
        <Enter handlerSubmit={handlerSubmit} phone={phone} password={password} setPhone={setPhone} setPassword={setPassword} isLink={isLink} path={path} />
        // <RecoveryNewPassword handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
        // <RecoveryEnter handlerSubmit={handlerSubmit} isLink={isLink} path={path} />


        // <div className={style.modalContent}>
        //     <form onSubmit={handlerSubmit} className={style.modalContent__form}>
        //         <Enter phone={phone} password={password} setPhone={setPhone} setPassword={setPassword} />
        //         <ModalButton type="submit" nameBtn={"Получить код"} isLink={isLink} path={path} />
        //     </form>
        //     {
        //         errorFlg && (
        //             <div className={style.modalContent__message}>Ошибка доступа. Такой пользователь не зарегистрирован!</div>
        //         )
        //     }
        // </div>
    );
};

export default ModalContent;
