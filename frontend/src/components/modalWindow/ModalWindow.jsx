import style from './modalWindow.module.scss';
import ModalContent from "./modalContent/ModalContent";
import {useEffect, useState} from "react";
import { useNavigate  } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import { useNavigate } from "react-router-dom";
import {userLogin} from "../../actions/userAction";
import auth from "../../api/auth";

const ModalWindow = ({ visible, onCloseWindow, onOpenWindow }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errorFlg, setErrorFlg] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { error, user } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            setPhone("");
            setPassword("");
            setErrorFlg((prevState) => !prevState);
        }
    }, [error]);

    // useEffect(() => {
    //     if (user) {
    //         return <navigate to="/account"/>
    //     }
    // }, [user]);

    const handlerSubmit = async (e) => {
        e.preventDefault();
        setErrorFlg(false);
        try {
            const user = await auth.getUser(phone, password)
            dispatch(userLogin(user))
            onCloseWindow()
            navigate('/account')
        } catch (err) {
            console.log(err)
            setError('User not found')
        }

        // dispatch(fetchUser({ phone, password }));
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
                <ModalContent errorLogin={error} handlerSubmit={handlerSubmit} phone={phone} setPhone={setPhone} password={password} setPassword={setPassword}/>
            </div>
        </div>
    );
};

export default ModalWindow;
