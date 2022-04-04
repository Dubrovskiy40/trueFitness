import style from './modalButton.module.scss';
import {NavLink} from "react-router-dom";

const ModalButton = ({ nameBtn, isLink, path, handleClick = () => {}, handleChangeFlag}) => {
    console.log('path', path)

    const multiFunc = (e) => {
        handleClick();
        handleChangeFlag(e);
    };

    return (
        isLink
            ? <NavLink className={style.modalButton__btn} to={path} onClick={multiFunc}>Вход</NavLink>
            :
            <div className={style.modalButton}>
                <button type="submit" className={style.modalButton__btn} onClick={multiFunc}>{nameBtn}</button>
            </div>
    );
};

export default ModalButton;
