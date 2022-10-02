
import './_contact.scss';

function AboutUs(props) {
    return (
        <section className='contact general-container'>
            <h2 className='main-contact'>KONTAKT</h2>
            <div className='contact_container'>
                <div className="contact_container_left">
                    <h3 className='second-contact'>Dane kontaktowe</h3>
                    <div className="contact_container_left_text">
                        <p>E:mail: example123@.gmail.com</p>
                        <p>Full name: Example ® - Official Online Boutique</p>
                        <p>Address: 118 Kasprzaka Street, 01-234 Warsaw (POLAND)</p>
                    </div>
                </div>
                <div className="contact_container_right">
                    <h3 className='second-contact'>Dane firmy</h3>
                    <div className="contact_container_right_text">
                        <p>Official Online Boutique Sp. z o.o.</p>
                        <p>Kasprzaka 118, 01-234 Warsaw(POLAND)</p>
                        <p>NIP: XXXXXXXX</p>
                        <p>Registration number: XXXXXXXXXX</p>
                        <p>REGON:XXXXXXX
                            Account number for payments: XX XXXX XXXX XXXX XXXX XXXX XXXX</p>
                        <p>SWIFT:BREXPLPWXXX</p>
                        <p>Our bank: XXXX</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;