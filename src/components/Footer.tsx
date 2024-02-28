import logo from '../../../fintech/public/images/Logo.svg'

const Footer = () => {
    return (
        <div>
            <img src={logo} alt="logo"/>
            <p>FinTech
                © 2024 All rights reserved </p>
            <div>
                <p>Главная</p>
                <p>Контакты</p>
               <p> Документы</p>
            </div>
           <button>Связаться с нами <img src="" alt="arrow"/></button>
            <img src="" alt="big logo"/>
        </div>
    );
}

export default Footer;