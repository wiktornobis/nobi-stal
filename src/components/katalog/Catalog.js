import { Button} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import './_catalog.scss';

function Catalog() {
    
    return (
        <section className="catalog general-container">
            <div className="catalog_container">
                <h2 className="catalog_title">Potrzebujesz sprężyn na specjalne zamówienie?</h2>
                <h4 className="catalog_text">
                    Zapoznaj się z naszą szeroką gamą produktów. 
                    Kliknij przycisk i pobierz katalog zawierający wszystkie produkty.
                </h4>
                <Button className='catalog_btn' variant="outlined" size="small" endIcon={<DownloadIcon />}>
                    <a className='catalog_btn_text' href="okladka.pdf" target="_blank" download="okladka.pdf">
                    Pobierz plik
                    </a>
                </Button>
            </div>
        </section>
    );
}

export default Catalog;