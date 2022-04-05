import style from './modalContent.module.scss';
import {useState} from "react";
import ModalButton from "../modalButton/ModalButton";
import Enter from "./enter/Enter";
import CreatePassword from "./createPassword/CreatePassword";
import NumberConfirmation from "./numberСonfirmation/NumberConfirmation";
import Registration from "./registration/Registration";
import RecoveryNewPassword from "./recoveryNewPassword/RecoveryNewPassword";
import RecoveryEnter from "./recoveryEnter/RecoveryEnter";

const ModalContent = ({ handlerSubmit, phone, password, setPhone, setPassword, isLink, path, errorFlg, onOpenWindow }) => {

    const [currentModalWindow, setCurrentModalWindow] = useState(1);

    return (
        currentModalWindow === 1
            ? <Enter handlerSubmit={handlerSubmit} phone={phone} password={password} setPhone={setPhone} setPassword={setPassword} isLink={isLink} path={path} setCurrentModalWindow={setCurrentModalWindow} />
            : currentModalWindow === 2
                ? <RecoveryEnter handlerSubmit={handlerSubmit} isLink={isLink} path={path} flag={true}/>
                : currentModalWindow === 3
                    ? <RecoveryEnter handlerSubmit={handlerSubmit} isLink={isLink} path={path} flag={false} />
                    : currentModalWindow === 4
                        ? <RecoveryNewPassword handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
                        : currentModalWindow === 5
                            ? <Registration handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
                            : currentModalWindow === 6
                                ? <NumberConfirmation handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
                                : currentModalWindow === 7
                                    ? <CreatePassword handlerSubmit={handlerSubmit} isLink={isLink} path={path} />
                                    : null
    );
};

export default ModalContent;
