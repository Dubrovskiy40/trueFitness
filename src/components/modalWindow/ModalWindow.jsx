import style from './modalWindow.module.scss';
import ModalContentRecovery from "./modalContentRecovery/ModalContentRecovery";
import {useEffect, useState} from "react";

const ModalWindow = ({ visible, title, onCloseWindow }) => {
    const [state, setState] =useState([
        {id: 1, title: 'Восстановление пароля', nameBtn: 'Получить код', nameLabel1: 'Введите номер телефона:'},
        {id: 2, title: 'Восстановление пароля', nameBtn: 'Вход', nameLabel1: 'Введите код доступа:',},
        {id: 3, title: 'Восстановление пароля', nameBtn: 'Изменить пароль', nameLabel1: 'Пароль:', nameLabel2: 'Повторить пароль:'},
        {id: 4, title: 'Вход', nameBtn: 'Войти', nameLabel1: 'Телефон:', nameLabel2: 'Пароль:'},
        {id: 5, title: 'Регистрация', nameBtn: 'Получить код', nameLabel1: 'Введите ваше Имя:', nameLabel2: 'Введите номер телефона:'},
        {id: 6, title: 'Подтверждение номера', nameBtn: 'Ввод', nameLabel1: 'Введите код доступа:'},
        {id: 7, title: 'Создание пароля', nameBtn: 'Сохранить пароль', nameLabel1: 'Пароль:', nameLabel2: 'Повторите пароль:'},
    ]);

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onCloseWindow()
                break
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    });

    if (!visible) return null

    return (
        <div className='modal' onClick={onCloseWindow}>
            <div className='modal__dialog' onClick={e => e.stopPropagation()}>
                <h2 className={`modal__title  ${style.modalWindow__title}`}>{title}</h2>
                <ModalContentRecovery state={state} />
            </div>
        </div>
    );
};

export default ModalWindow;
