import './_footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_logo"></div>
            <div className="footer__text">
                <a href="https://github.com/wiktornobis" 
                   className="footer_text_name"
                   target='blank'
                >
                    © Copyright 2022 - Wiktor Nobis
                </a>
            </div>
        </div>
    );
}

export default Footer;