import style from './modalWindow.module.scss';
import ModalContentRecovery from "./modalContentRecovery/ModalContentRecovery";
import {useEffect, useState} from "react";
import ModalBtnsBottom from "./modalBtnsBottom/ModalBtnsBottom";

import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../actions/userAction";

const ModalWindow = ({ visible, onCloseWindow }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorFlg, setErrorFlg] = useState(false);
    const dispatch = useDispatch();
    const [isLink, setIsLink] = useState(false);

    const { error, user } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            setPhone("");
            setPassword("");
            setErrorFlg((prevState) => !prevState);
        }
    }, [error]);

    useEffect(() => {
        if (user) {
            setIsLink(true);
        }
    }, [user]);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setErrorFlg(false);
        dispatch(fetchUser({ phone, password }));
    };

    const [state, setState] =useState([
        {id: 1, title: 'Восстановление пароля', nameBtn: 'Получить код'},
        {id: 2, title: 'Восстановление пароля', nameBtn: 'Вход'},
        {id: 3, title: 'Восстановление пароля', nameBtn: 'Изменить пароль'},
        {id: 4, title: 'Вход', nameLabel1: 'Телефон:', nameBtn: 'Войти'},
        {id: 5, title: 'Регистрация', nameLabel1: 'Введите ваше Имя:', nameBtn: 'Получить код'},
        {id: 6, title: 'Подтверждение номера', nameBtn: 'Ввод'},
        {id: 7, title: 'Создание пароля', nameBtn: 'Сохранить пароль'},
    ]);
    const [isFlag, setIsFlag] = useState(false);

    // создаем обработчик нажатия клавиши Esc
    const onKeydown = ({key}: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                onCloseWindow();
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    });

    if (!visible) return null

    return (
        <div className='modal' onClick={onCloseWindow}>
            <div className='modal__dialog' onClick={e => e.stopPropagation()}>
                <h2 className={`modal__title  ${style.modalWindow__title}`}>Вход</h2>
                <ModalContentRecovery handlerSubmit={handlerSubmit} phone={phone} password={password} setPhone={setPhone} setPassword={setPassword} isLink={isLink} path={"/account"} errorFlg={errorFlg} />
                {
                    isFlag
                        ? <ModalBtnsBottom />
                        : null
                }
            </div>
        </div>
    );
};

export default ModalWindow;
