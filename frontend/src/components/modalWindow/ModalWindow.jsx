import style from './modalWindow.module.scss';
import ModalContent from "./modalContent/ModalContent";
import {useEffect, useState} from "react";


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
                <ModalContent />
                {/*<h2 className={`modal__title  ${style.modalWindow__title}`}>Вход</h2>*/}
                {/*<ModalContent handlerSubmit={handlerSubmit} phone={phone} */}
                {/*              password={password} setPhone={setPhone} */}
                {/*              setPassword={setPassword} isLink={isLink} */}
                {/*              path={"/account"} errorFlg={errorFlg} />*/}
                {/*{*/}
                {/*    isFlag && <EnterBtnsBottom />*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default ModalWindow;
