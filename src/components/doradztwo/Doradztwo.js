import './_doradztwo.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import img from '../../assets/sprezynynaciskowe.jpeg';

function Doradztwo() {
    return (
        <section className="information general-container">
            <div className="information_first_container">
                <FontAwesomeIcon className="information_first_container_icon" icon={faMessage} />
                <h3 className="information_first_container_title">Potrzebujesz doradztwa?</h3>
                <h4 className="information_first_container_text">wypełnij formularz</h4>
            </div>
            <div className="information_second_container">
                <h2 className="information_second_container_title">Produkcja sprężyn oraz sit</h2>
                <p className="information_second_container_text">
                    Nobi-Stal posiada ogromne doświadczenie i oferuje jedne z największych 
                    na rynku możliwości produkcji sprężyn technicznych, sit preferowanych,
                     tkanych, plecionych oraz cięto ciągnionych 
                </p>
                <img class="defer-image is-loaded image-ratio:61 applied-default img" src={img} alt="" />
            </div>
        </section>
    );
}

export default Doradztwo;