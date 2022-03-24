import style from './style.module.scss'

const AccountNavbar = () => {
  return (
    <div className={style.account__navbar_wrapper}>
      <ul className={style.account__navbar}>
        <li className={style.account__navbar_item}>
          <a className={style.account__navbar_link} href="#" >Общая информация</a>
        </li>
        <li className={style.account__navbar_item}>
          <a className={style.account__navbar_link} href="#" >Цель</a>
        </li>
        <li className={style.account__navbar_item}>
          <a className={style.account__navbar_link} href="#" >Достижения</a>
        </li>
        <li className={style.account__navbar_item}>
          <a className={style.account__navbar_link} href="#" >Избранное</a>
        </li>
      </ul>
    </div>
  )
}

export default AccountNavbar;