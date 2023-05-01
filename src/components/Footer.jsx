export default function Footer() {
    return (
        <footer>
            <div className="footer__above">
                <div className="container">
                    <div className="footercontainer">
                        <h5 className="footer__description">
                            臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                        </h5>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                            <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__below">
                <div className="container">
                    <h6>
                        &copy; Copyright All rights reserved.
                    </h6>
                </div>
            </div>
        </footer>
    );
}