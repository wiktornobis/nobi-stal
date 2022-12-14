import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { Field } from './Field';
import { useState } from 'react';
import { Button} from '@mui/material';
import logo from '../../../assets/nobistal.png';
import Axios from 'axios';

import './_form.scss';

import { useTranslation} from 'react-i18next';
function Formularz() {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const validate = Yup.object({
        name: Yup.string()
            .min(3, 'Musi zawierać conajmniej 3 znaki!')
            .required('Podane imię jest nieprawidłowe!')
            .trim('Nie może być spacji')
            .strict(true),
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        message: Yup.string()
            .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
            .required('Wiadomość musi mieć conajmniej 120 znaków!'),
    })
    return (
        <div id='kontakt' className="contact_form_form">        
            <div className="contact_form_right">
                <img src={logo} alt="logo firmy" className='logo'/>
                <h3 className="contact_form_right_title">{t('form.title')}</h3>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={validate}
                    onSubmit={async (values, {resetForm}) => {
                        const data = {
                            name:values.name,
                            email: values.email,
                            message: values.message,                    
                        }
                        resetForm()
                        const url = 'http://localhost/project_nobi_stal/dodaj.php';
                        const axiosConfig = {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                           
                        }
                        await Axios.post(
                            // 'https://fer-api.coderslab.pl/v1/portfolio/contact',
                            JSON.stringify(data),
                            axiosConfig,
                            url
                            
                        )
                            .then((response) => {
                                setModal(true)          
                            })
                            
                            .catch((e) => {
                                setErrorModal(true)
                            })
                    }}
                >
                    {({ values, isSubmitting }) => (
                        <div className='contact_form_right_form'>
                            <Form>
                                 {errorModal && <p className='error-send'>{t('form.error')}</p>}
                                 {modal && <p className='success-send'>{t('form.success1')}</p>}
                                 {modal && <p className='success-send'>{t('form.success2')}</p>}

                                <div className="contact_form_right_form_first">
                                    <div className="contact_form_right_form_first-name">
                                        <TextField label={t('form.name')}
                                                   name="name" 
                                                   id="name"
                                                   type="text" 
                                                   placeholder='Krzysztof' 
                                                   value={values.name}
                                        />
                                    </div>
                                    <div className="contact_form_right_form_first-name">
                                        <TextField label="Email" 
                                                   name="email" 
                                                   id="email"
                                                   type="email" 
                                                   placeholder='abc@xyz.pl' 
                                                   value={values.email}
                                        />
                                    </div>
                                </div>
                                <div className="contact_form_right_form_first-text">
                                    <Field 
                                        className="contact_form_right_form_first-text-area" 
                                        label={t('form.text')}
                                        name="message"
                                        id="message" 
                                        type="message" 
                                        placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                                        value={values.message}
                                    />
                                </div>
                                <div className="contact_form_right_form_first-btn">
                                    <Button className='catalog_btn' variant="outlined" size="small" type='submit'>
                                        {t('form.send')}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>  
            </div>
        </div>
    );
}

export default Formularz;