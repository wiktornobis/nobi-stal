import './_sectors.scss';

import img1 from '../../assets/maszynybudowlane.jpg'
import img2 from '../../assets/maszynyrolnicze.jpg'
import img3 from '../../assets/gornictwo.jpg'

function Sectors() {
    return (
        <section className="sectors">
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img1} alt="" />
                <h3 className="sectors_article_title">Budownictwo</h3>
            </div>
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img2} alt="" />
                <h3 className="sectors_article_title">Rolnictwo</h3>
            </div>
            <div className="sectors_article">
                <img class="defer-image is-loaded image-ratio:61 applied-default" src={img3} alt="" />
                <h3 className="sectors_article_title">Górnictwo</h3>
            </div>
        </section>
    );
}

export default Sectors;