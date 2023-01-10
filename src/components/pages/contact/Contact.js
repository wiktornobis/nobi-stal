
import './_contact.scss';
import { useTranslation} from 'react-i18next';
function AboutUs() {
    const { t } = useTranslation();
    return (
        <>
            <div className='contact'>
                <div className="contact-left-container">
                    <h2 className='main-contact general-container'>{t('contact.title')}</h2>
                    <div className='contact_container general-container'>
                        <div className="contact_container_left">
                            <h3 className='second-contact'>{t('contact.title2')}</h3>
                            <div className="contact_container_left_text">
                                <p className='email_title'>E-MAIL:</p>
                                <p>kontakt@nobistal.pl</p>
                                <p className='name_title'>{t('contact.name')}</p>
                                <p>P.P.U.H NOBI-STAL Iwona Nobis</p>
                                <p className='address_title'>{t('contact.address')}</p>
                                <p>Białka 17 27-100 Iłża (POLSKA)</p>
                            </div>
                        </div>
                        <div className="contact_container_right">
                            <h3 className='second-contact'>{t('contact.data')}</h3>
                            <div className="contact_container_right_text">
                                <div className='information_flex'>
                                    <p className='nip_title'>NIP:</p>
                                    <p>796-221-85-62</p>
                                </div>
                                <div className="information_flex">
                                    <p className='regon_title'>REGON:</p>
                                    <p>142448704</p>
                                </div>
                                <div className="information_flex">
                                    <p className='mobile_title'>TEL:</p>
                                    <p>698 700 270</p>
                                </div>          
                            
                                <p className='bank_title'>ING BANK Śląski Nr konta:</p>
                                <p>04 1050 1432 1000 0090 7443 8079</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right-container"></div>
            </div>
            <div className="map">elelwlelw</div>
        </>
    );
}

export default AboutUs;