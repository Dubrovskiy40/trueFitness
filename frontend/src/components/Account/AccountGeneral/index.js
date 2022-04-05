import { useState } from 'react'
import style from './style.module.scss'

export default ({ imageSrc }) => {
    const [userData, setuserData] = useState(
        {
            userName: 'Сергей',
            userSurname: 'Иванов',
            userAge: '22',
            userLogin: 'IvanovSergey22',
            userPassword: '******',
            userEmail: 'IvanovSergey22@mail.ru',
            userPhoneNumber: '8-(999)-999-99-99'
        }
    )


    return (
        <div className={style['account-wrapper']}>
            <div className={style['user-info']}>
                <div className={style.user_image}>
                    {imageSrc && <img
                        className={style.photo}
                        src={imageSrc}
                        alt="фото пользователя" />}
                    <button className={style.user_edit_image}>Редактировать фото</button>
                </div>
                <div className={style.user__data}>
                    <h3 className={style['user-name']}>{userData.userSurname} {userData.userName}, {userData.userAge}</h3>
                    <div className={style.user_input_wrapper}>
                        <label className={style.user_label} for="user__login">Логин:</label>
                        <input className={style.user_input} type="text" id="user__login" value={userData.userLogin}></input>
                    </div>
                    <div className={style.user_input_wrapper}>
                        <label className={style.user_label} for="user__password">Пароль:</label>
                        <input className={style.user_input} type="password" id="user__password" value={userData.userPassword}></input>
                    </div>
                    <div className={style.user_input_wrapper}>
                        <label className={style.user_label} for="user__email">E-mail:</label>
                        <input className={style.user_input} type="email" id="user__email" value={userData.userEmail}></input>
                    </div>
                    <div className={style.user_input_wrapper}>
                        <label className={style.user_label} for="user__phone-number">Логин</label>
                        <input className={style.user_input} type="text" id="user__phone-number" value={userData.userPhoneNumber}></input>
                    </div>
                </div>
            </div>
        </div >

    )
}
