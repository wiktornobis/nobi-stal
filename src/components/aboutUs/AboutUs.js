import './_aboutUs.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function AboutUs() {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="about general-container">
            <h2 className="about_title">O nas</h2>
            <h3 className="about_text">
                Firma Nobi-Stal jest ekspertem w dziedzinie produkcji sprężyn i sit. 
                Klientami Nobi-Stal są firmy z całego świata, którzy wykorzystują 
                nasze produkty w branży górniczej, rolniczej, budowlanej, energetycznej.
                Nasze sprężyny charakteryzują się bardzo dobrymi własnościami 
                wytrzymałościowymi gdyż wykorzystują zaawansowaną technologię produkcyjną. 
                Branże takie jak: rolnicza, górnicza, budowlana, energetyczna wymagają 
                podzespołów, które sprostają trudnym warunkom i zapewnią długą 
                żywotność maszyn. Nasze sprężyny stosowane są m.in.: traktorach,
                kombajnach, pługach. Na specjalne zamówienie oferujemy sprężyny 
                wykorzystywane w maszynach do spulchniania gleby.
            </h3>
            <h2 className="about_sectors" data-aos="fade-up">Zastosowanie naszych produktów</h2>
        </section>
    );
}

export default AboutUs;