import React from 'react';
import './Termes.css';
import { useTranslation } from 'react-i18next';

const TermeConfidentialite = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    return (
        <div className='pageTerms'>
            <div className="containerTermes">
                <h1>{t('termeT1')}</h1>
                <p>{t('termeP1')}</p>
                <p>{t('termeP2')}</p>
                <p>{t('termeP3')}</p>
                <p>{t('termeP4')}</p>

                <p>{t('termeP5')}</p>
                <p>{t('termeP6')}</p>

                <p>{t('termeP7')}</p>
                <p>{t('termeP8')}</p>
            </div>
        </div>
    );
}

export default TermeConfidentialite;
