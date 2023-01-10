import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";  
import logo from './assets/nobistal.png';
import './App.scss'

function Cookie() {
    let testCookieName = getCookieConsentValue()
    Cookies.remove(testCookieName)
    console.log("cookie: ", Cookies.get(testCookieName));
    Cookies.set(testCookieName, 500);
    console.log("cookie: ", Cookies.get(testCookieName));
    console.log(getCookieConsentValue());

    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="Akceptuj"
                cookieName="CookieUsers"
                enableDeclineButton
                declineButtonText="Nie zgadzam się"
                declineButtonStyle={{fontSize: "15px", padding:"8px 12px"}}
                style={{ background: "#ddd" }}
                buttonStyle={{ color: "#fff", fontSize: "15px", padding:"8px 12px" }}
                expires={150}
            >   <img className="logo" src={logo} alt="" />
                <span style={{ fontSize: "16px", color: "#000"}}>Na tej stronie używamy plików cookies
                 i podobnych funkcji do przetwarzania informacji o urządzeniach końcowych i danych osobowych. Przetwarzanie jest wykorzystywane do celów takich jak integracja treści,
                 usług zewnętrznych i elementów stron trzecich, analiza/pomiary 
                 statystyczne, spersonalizowanie reklam oraz integracja mediów społecznościowych.
                </span>
            </CookieConsent>
          
        </div>
       
    );
}

export default Cookie;