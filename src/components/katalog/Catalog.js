import { Button} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import Aos from 'aos';
import 'aos/dist/aos.css';
import './_catalog.scss';
import { useEffect } from 'react';
import { useTranslation} from 'react-i18next';

function Catalog() {
    const { t } = useTranslation();
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <section className="catalog general-container" data-aos="fade-up">
            <div className="container">
                <h2 className="catalog_title">{t('catalog.title')}</h2>
                <h4 className="catalog_text">{t('catalog.text1')}</h4>
                <Button className='catalog_btn' variant="outlined" size="small" endIcon={<DownloadIcon />}>
                    <a className='catalog_btn_text' href="okladka.pdf" target="_blank" download="okladka.pdf">
                        {t('catalog.text2')}
                    </a>
                </Button>
            </div>
        </section>
    );
}

export default Catalog;