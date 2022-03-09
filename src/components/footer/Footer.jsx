import style from './footer.module.scss';

const Footer = (props) => {
    return (
        <div className={style.footer}>
            <h2 className={ [style.footer__title, style.title].join(' ') }>
                Around the web
            </h2>
            <ul className={ [style.footer__socialNetwork, style.socialNetwork__list].join(' ') }>
                <li className={ [style.socialNetwork__item, style.google__item].join(' ') }>
                    <a href="https://plus.google.com/" className={ [style.socialNetwork__link, style.google__link].join(' ') }></a>
                </li>
                <li className={ [style.socialNetwork__item, style.youtube__item].join(' ') }>
                    <a href="https://www.youtube.com/" className={ [style.socialNetwork__link, style.youtube__link].join(' ') }></a>
                </li>
                <li className={ [style.socialNetwork__item, style.pinterest__item].join(' ') }>
                    <a href="https://www.pinterest.ru/" className={ [style.socialNetwork__link, style.pinterest__link].join(' ') }></a>
                </li>
                <li className={ [style.socialNetwork__item, style.facebook__item].join(' ') }>
                    <a href="https://www.facebook.com/" className={ [style.socialNetwork__link, style.facebook__link].join(' ') }></a>
                </li>
                <li className={ [style.socialNetwork__item, style.twitter__item].join(' ') }>
                    <a href="https://twitter.com/" className={ [style.socialNetwork__link, style.twitter__link].join(' ') }></a>
                </li>
                <li className={ [style.socialNetwork__item, style.instagram__item].join(' ') }>
                    <a href="https://www.instagram.com/" className={ [style.socialNetwork__link, style.instagram__link].join(' ') }></a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
