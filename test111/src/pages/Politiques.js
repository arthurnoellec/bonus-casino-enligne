import React from 'react';
import './Politiques.css';
import { useTranslation } from 'react-i18next';

const PolitiqueConfidentialite = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    return (
        <div className='pagePoli'>
            <div className="containerPolituques">
                <h1>{t('politiqueT1')}</h1>
                <p>{t('politiqueP1')}</p>

                <h2>{t('politiqueT2')}</h2>
                <p>{t('politiqueP2')}</p>
                <p>{t('politiqueP3')}</p>

                <h2>{t('politiqueT3')}</h2>
                <p>{t('politiqueP4')}</p>

                <h2>{t('politiqueT4')}</h2>
                <p>{t('politiqueP5')}</p>
                <p>{t('politiqueP6')}</p>

                <h2>{t('politiqueT5')}</h2>
                <p>{t('politiqueP7')}</p>
                <p>{t('politiqueP8')}</p>
                <p>{t('politiqueP9')}</p>

                <h2>{t('politiqueT6')}</h2>
                <p>{t('politiqueP10')}</p>
                <p>{t('politiqueP11')}</p>

                <h2>{t('politiqueT7')}</h2>
                <p>{t('politiqueP12')}</p>
                <p>{t('politiqueP13')}</p>
            </div>
        </div>
    );
}

export default PolitiqueConfidentialite;
