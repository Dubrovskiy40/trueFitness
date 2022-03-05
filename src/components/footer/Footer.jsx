import './footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <h2 className="footer__title title">
                Around the web
            </h2>
            <ul className="footer__socialNetwork socialNetwork__list">
                <li className="socialNetwork__item google__item">
                    <a href="https://plus.google.com/" className="socialNetwork__link google__link"></a>
                </li>
                <li className="socialNetwork__item youtube__item">
                    <a href="https://www.youtube.com/" className="socialNetwork__link youtube__link"></a>
                </li>
                <li className="socialNetwork__item pinterest__item">
                    <a href="https://www.pinterest.ru/" className="socialNetwork__link pinterest__link"></a>
                </li>
                <li className="socialNetwork__item facebook__item">
                    <a href="https://www.facebook.com/" className="socialNetwork__link facebook__link"></a>
                </li>
                <li className="socialNetwork__item twitter__item">
                    <a href="https://twitter.com/" className="socialNetwork__link twitter__link"></a>
                </li>
                <li className="socialNetwork__item instagram__item">
                    <a href="https://www.instagram.com/" className="socialNetwork__link instagram__link"></a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
