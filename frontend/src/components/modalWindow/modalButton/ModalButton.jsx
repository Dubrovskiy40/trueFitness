import style from './modalButton.module.scss';
import {NavLink} from "react-router-dom";

const ModalButton = ({ nameBtn, isLink, path, handleClick = () => {}, }) => {
    console.log('path', path)
    return (
        isLink
            ? <NavLink className={style.modalButton__btn} to={path} onClick={handleClick}>Вход</NavLink>
            :
            <div className={style.modalButton}>
                <button type="submit" className={style.modalButton__btn} onClick={handleClick}>{nameBtn}</button>
            </div>
    );
};

export default ModalButton;
