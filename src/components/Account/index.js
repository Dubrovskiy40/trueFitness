import AccountNavbar from '../AccountNavbar/AccountNavbar'
import style from './style.module.scss'

export default ({ name, surname, age, imageSrc }) => {
    return (
        <div className={style['account-wrapper']}>
            <AccountNavbar />

            <div className={style['user-info']}>
                {imageSrc && <img
                    className={style.photo}
                    src={imageSrc}
                    alt="фото пользователя" />}
                <span className={style['user-name']}>{surname} {name}, {age}</span>
            </div>
            <div className={style.footer}>
                <span className={style['user-name']}>{surname} {name}, {age}</span>
            </div>
        </div>

    )
}
