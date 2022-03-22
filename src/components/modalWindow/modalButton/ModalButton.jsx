import style from './modalButton.module.scss';

const ModalButton = ({ nameBtn }) => {
    return (
        <div class={style.modalButton}>
            <button class={style.modalButton__btn}>{nameBtn}</button>
        </div>
    );
};

export default ModalButton;
