import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CasinoCard from './CasinoCard';
import "./DepotNewList.css";

import { useTranslation } from 'react-i18next';


const BonusList = () => {
    const { t, i18n } = useTranslation();
    const casinosData = require(`../donees/casinos_${i18n.language}.json`);
    const [filteredCasinos, setFilteredCasinos] = useState(casinosData);
    const [selectedFilter, setSelectedFilter] = useState('');
    const { search } = useLocation();
    const activeFilterClass = 'btn-primary-red';
    const [isExpanded, setIsExpanded] = useState(false);
    const [filterDescriptions, setFilterDescriptions] = useState({});




    useEffect(() => {
        const descriptions = {
            Visa: [
                { text: t("visa_titre_1"), type: 'h2' },
                { text: t("visa_description_1"), type: 'p' },
                { text: t("visa_description_2"), type: 'p' },
                { text: t("visa_description_3"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("visa_titre_2"), type: 'h2' },
                { text: t("visa_description_4"), type: 'p' },
                { text: t("visa_description_5"), type: 'p' },
                { text: t("visa_description_6"), type: 'p' },
                { text: t("visa_description_7"), type: 'p' },
                { text: t("visa_description_8"), type: 'p' },
                { text: t("visa_description_9"), type: 'p' },
                { text: t("visa_description_10"), type: 'p' },
                { text: t("visa_description_11"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("visa_titre_3"), type: 'h2' },
                { text: t("visa_description_12"), type: 'p' },
                { text: t("visa_description_13"), type: 'p' },
                { text: t("visa_description_14"), type: 'p' },
                { text: t("visa_description_15"), type: 'p' },
                { text: t("visa_description_16"), type: 'p' },
                { text: t("visa_description_17"), type: 'p' },
                { text: t("visa_description_18"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("visa_titre_4"), type: 'h2' },
                { text: t("visa_description_19"), type: 'p' },
                { text: t("visa_description_20"), type: 'p' },
                { text: t("visa_description_21"), type: 'p' },
                { text: t("visa_description_22"), type: 'p' },
                { text: t("visa_description_23"), type: 'p' },
                { text: t("visa_description_24"), type: 'p' },
                { text: t("visa_description_25"), type: 'p' },
            ],
            MasterCard: [
                { text: t("mastercard_titre_1"), type: 'h2' },
                { text: t("mastercard_description_1"), type: 'p' },
                { text: t("mastercard_description_2"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("mastercard_titre_2"), type: 'h2' },
                { text: t("mastercard_description_3"), type: 'p' },
                { text: t("mastercard_description_4"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("mastercard_titre_3"), type: 'h2' },
                { text: t("mastercard_description_5"), type: 'p' },
                { text: t("mastercard_description_6"), type: 'p' },
                { text: t("mastercard_description_7"), type: 'p' },
                { text: t("mastercard_description_8"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("mastercard_titre_4"), type: 'h2' },
                { text: t("mastercard_description_9"), type: 'p' },
                { text: t("mastercard_description_10"), type: 'p' },
            ],
            Paypal: [
                { text: t("paypal_titre_1"), type: 'h2' },
                { text: t("paypal_description_1"), type: 'p' },
                { text: t("paypal_description_2"), type: 'p' },
                { text: t("paypal_titre_2"), type: 'h2' },
                { text: t("paypal_description_3"), type: 'p' },
                { text: t("paypal_description_4"), type: 'p' },
                { text: t("paypal_description_5"), type: 'p' },
                { text: t("paypal_description_6"), type: 'p' },
                { text: t("paypal_description_7"), type: 'p' },
                { text: t("paypal_description_8"), type: 'p' },
                { text: t("paypal_description_9"), type: 'p' },
                { text: t("paypal_description_10"), type: 'p' },
                { text: t("paypal_titre_3"), type: 'h2' },
                { text: t("paypal_description_11"), type: 'p' },
                { text: t("paypal_description_12"), type: 'p' },
                { text: t("paypal_description_13"), type: 'p' },
                { text: t("paypal_description_14"), type: 'p' },
                { text: t("paypal_description_15"), type: 'p' },
                { text: t("paypal_description_16"), type: 'p' },
                { text: t("paypal_description_17"), type: 'p' },
                { text: t("paypal_titre_4"), type: 'h2' },
                { text: t("paypal_description_18"), type: 'p' },
                { text: t("paypal_description_19"), type: 'p' },
                { text: t("paypal_description_20"), type: 'p' },
                { text: t("paypal_description_21"), type: 'p' },
                { text: t("paypal_description_22"), type: 'p' },
                { text: t("paypal_description_23"), type: 'p' },
                { text: t("paypal_description_24"), type: 'p' },
            ],
            Crypto: [
                { text: t("crypto_titre_1"), type: 'h2' },
                { text: t("crypto_description_1"), type: 'p' },
                { text: t("crypto_description_2"), type: 'p' },
                { text: t("crypto_description_3"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("crypto_titre_2"), type: 'h2' },
                { text: t("crypto_description_4"), type: 'p' },
                { text: t("crypto_description_5"), type: 'p' },
                { text: t("crypto_description_6"), type: 'p' },
                { text: t("crypto_description_7"), type: 'p' },
                { text: t("crypto_description_8"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("crypto_titre_3"), type: 'h2' },
                { text: t("crypto_description_9"), type: 'p' },
                { text: t("crypto_description_10"), type: 'p' },
                { text: t("crypto_description_11"), type: 'p' },
                { text: t("crypto_description_12"), type: 'p' },
                { text: t("crypto_description_13"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("crypto_titre_4"), type: 'h2' },
                { text: t("crypto_description_14"), type: 'p' },
                { text: t("crypto_description_15"), type: 'p' },
                { text: t("crypto_description_16"), type: 'p' },
                { text: t("crypto_description_17"), type: 'p' },
            ],
            Cashlib: [
                { text: t("cashlib_titre_1"), type: 'h2' },
                { text: t("cashlib_description_1"), type: 'p' },
                { text: t("cashlib_description_2"), type: 'p' },
                { text: t("cashlib_description_3"), type: 'p' },
                { text: t("cashlib_description_4"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("cashlib_titre_2"), type: 'h2' },
                { text: t("cashlib_description_5"), type: 'p' },
                { text: t("cashlib_description_6"), type: 'p' },
                { text: t("cashlib_description_7"), type: 'p' },
                { text: t("cashlib_description_8"), type: 'p' },
                { text: t("cashlib_description_9"), type: 'p' },
                { text: t("cashlib_description_10"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("cashlib_titre_3"), type: 'h2' },
                { text: t("cashlib_description_11"), type: 'p' },
                { text: t("cashlib_description_12"), type: 'p' },
                { text: t("cashlib_description_13"), type: 'p' },
                { text: t("cashlib_description_14"), type: 'p' },
                { text: t("cashlib_description_15"), type: 'p' },
                { text: t("cashlib_description_16"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("cashlib_titre_4"), type: 'h2' },
                { text: t("cashlib_description_17"), type: 'p' },
                { text: t("cashlib_description_18"), type: 'p' },
                { text: t("cashlib_description_19"), type: 'p' },
                { text: t("cashlib_description_20"), type: 'p' },
                { text: t("cashlib_description_21"), type: 'p' },
                { text: t("cashlib_description_22"), type: 'p' },
            ],
            Paysafecard: [
                { text: t("paysafecard_titre_1"), type: 'h2' },
                { text: t("paysafecard_description_1"), type: 'p' },
                { text: t("paysafecard_description_2"), type: 'p' },
                { text: t("paysafecard_description_3"), type: 'p' },
                { text: t("paysafecard_description_4"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("paysafecard_titre_2"), type: 'h2' },
                { text: t("paysafecard_description_5"), type: 'p' },
                { text: t("paysafecard_description_6"), type: 'p' },
                { text: t("paysafecard_description_7"), type: 'p' },
                { text: t("paysafecard_description_8"), type: 'p' },
                { text: t("paysafecard_description_9"), type: 'p' },
                { text: t("paysafecard_description_10"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("paysafecard_titre_3"), type: 'h2' },
                { text: t("paysafecard_description_11"), type: 'p' },
                { text: t("paysafecard_description_12"), type: 'p' },
                { text: t("paysafecard_description_13"), type: 'p' },
                { text: t("paysafecard_description_14"), type: 'p' },
                { text: t("paysafecard_description_15"), type: 'p' },
                { text: t("paysafecard_description_16"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("paysafecard_titre_4"), type: 'h2' },
                { text: t("paysafecard_description_17"), type: 'p' },
                { text: t("paysafecard_description_18"), type: 'p' },
                { text: t("paysafecard_description_19"), type: 'p' },
                { text: t("paysafecard_description_20"), type: 'p' },
                { text: t("paysafecard_description_21"), type: 'p' },
                { text: t("paysafecard_description_22"), type: 'p' },
            ],
            Skrill: [
                { text: t("skrill_titre_1"), type: 'h2' },
                { text: t("skrill_description_1"), type: 'p' },
                { text: t("skrill_description_2"), type: 'p' },
                { text: t("skrill_description_3"), type: 'p' },
                { text: t("skrill_description_4"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("skrill_titre_2"), type: 'h2' },
                { text: t("skrill_description_5"), type: 'p' },
                { text: t("skrill_description_6"), type: 'p' },
                { text: t("skrill_description_7"), type: 'p' },
                { text: t("skrill_description_8"), type: 'p' },
                { text: t("skrill_description_9"), type: 'p' },
                { text: t("skrill_description_10"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("skrill_titre_3"), type: 'h2' },
                { text: t("skrill_description_11"), type: 'p' },
                { text: t("skrill_description_12"), type: 'p' },
                { text: t("skrill_description_13"), type: 'p' },
                { text: t("skrill_description_14"), type: 'p' },
                { text: t("skrill_description_15"), type: 'p' },
                { text: t("skrill_description_16"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("skrill_titre_4"), type: 'h2' },
                { text: t("skrill_description_17"), type: 'p' },
                { text: t("skrill_description_18"), type: 'p' },
                { text: t("skrill_description_19"), type: 'p' },
            ],
            Neosurf: [
                { text: t("neosurf_titre_1"), type: 'h2' },
                { text: t("neosurf_description_1"), type: 'p' },
                { text: t("neosurf_description_2"), type: 'p' },
                { text: t("neosurf_description_3"), type: 'p' },
                { text: t("neosurf_description_4"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("neosurf_titre_2"), type: 'h2' },
                { text: t("neosurf_description_5"), type: 'p' },
                { text: t("neosurf_description_6"), type: 'p' },
                { text: t("neosurf_description_7"), type: 'p' },
                { text: t("neosurf_description_8"), type: 'p' },
                { text: t("neosurf_description_9"), type: 'p' },
                { text: t("neosurf_description_10"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("neosurf_titre_3"), type: 'h2' },
                { text: t("neosurf_description_11"), type: 'p' },
                { text: t("neosurf_description_12"), type: 'p' },
                { text: t("neosurf_description_13"), type: 'p' },
                { text: t("neosurf_description_14"), type: 'p' },
                { text: t("neosurf_description_15"), type: 'p' },
                { text: t("neosurf_description_16"), type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: "", type: 'p' },
                { text: t("neosurf_titre_4"), type: 'h2' },
                { text: t("neosurf_description_17"), type: 'p' },
                { text: t("neosurf_description_18"), type: 'p' },
                { text: t("neosurf_description_19"), type: 'p' },
                { text: t("neosurf_description_20"), type: 'p' },
                { text: t("neosurf_description_21"), type: 'p' },
                { text: t("neosurf_description_22"), type: 'p' },
            ],
        };

        setFilterDescriptions(descriptions);

    }, []);


    console.log(t("visa_titre_1"));

    useEffect(() => {
        const params = new URLSearchParams(search);

        const filters = [
            'Visa',
            'MasterCard',
            'Paypal',
            'Crypto',
            'Cashlib',
            'Paysafecard',
            'Skrill',
            'Neosurf',
        ];

        let filterFound = false;
        for (const filter of filters) {
            if (params.get(filter) === 'true') {
                setSelectedFilter(filter);
                filterFound = true;
                break;
            }
        }

        if (!filterFound) {
            const filter = params.get('filter');
            setSelectedFilter(filter || '');
        }
    }, [search]);


    useEffect(() => {
        let updatedFilteredCasinos;
        switch (selectedFilter) {
            case 'Visa':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Visa' && mp.disponible === 'oui'));
                break;
            case 'MasterCard':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'MasterCard' && mp.disponible === 'oui'));
                break;
            case 'Paypal':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Paypal' && mp.disponible === 'oui'));
                break;
            case 'Crypto':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Crypto' && mp.disponible === 'oui'));
                break;
            case 'Cashlib':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Cashlib' && mp.disponible === 'oui'));
                break;
            case 'Paysafecard':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Paysafecard' && mp.disponible === 'oui'));
                break;
            case 'Skrill':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Skrill' && mp.disponible === 'oui'));
                break;
            case 'Neosurf':
                updatedFilteredCasinos = casinosData.filter(casino => casino.methodes_paiement.some(mp => mp.nom === 'Neosurf' && mp.disponible === 'oui'));
                break;
            default:
                updatedFilteredCasinos = casinosData;
        }
        setFilteredCasinos(updatedFilteredCasinos);
    }, [selectedFilter]);


    const toggleAffiliateLink = (casino) => {
        const link = document.querySelector(`#casino-${casino.id} button`);
        if (casino.lien_affilie) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                window.location.href = `https://${casino.lien_affilie}`;
            });
        }
    };

    useEffect(() => {
        filteredCasinos.forEach((casino) => {
            toggleAffiliateLink(casino);
        });
    }, [filteredCasinos]);

    return (
        <div className='contener_bonus_page'>
            <div className="page_depot_titre">
                <h1>
                    {t('titredepotpage')}
                </h1>
            </div>
            <div className="div_filtre">
                <div className="btn-group">
                    <button type="button" className={`btn Visa ${selectedFilter === 'Visa' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Visa')}>
                        <img src={require('../donees/icon/mt_visa_off.png')} alt="Visa icon" />
                    </button>
                    <button type="button" className={`btn MasterCard ${selectedFilter === 'MasterCard' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('MasterCard')}>
                        <img src={require('../donees/icon/mt_master_off.png')} alt="MasterCard icon" />
                    </button>
                    <button type="button" className={`btn Paypal ${selectedFilter === 'Paypal' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Paypal')}>
                        <img src={require('../donees/icon/mth_paypal.png')} alt="Paypal icon" />
                    </button>
                    <button type="button" className={`btn Crypto ${selectedFilter === 'Crypto' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Crypto')}>
                        <img src={require('../donees/icon/crypto_off.png')} alt="Crypto icon" />
                    </button>
                    <button type="button" className={`btn Cashlib ${selectedFilter === 'Cashlib' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Cashlib')}>
                        <img src={require('../donees/icon/cashlib_off.png')} alt="Cashlib icon" />
                    </button>
                    <button type="button" className={`btn Paysafecard ${selectedFilter === 'Paysafecard' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Paysafecard')}>
                        <img src={require('../donees/icon/paysafe-card-logo-black-and-white.png')} alt="Cashlib icon" />
                    </button>
                    <button type="button" className={`btn Skrill ${selectedFilter === 'Skrill' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Skrill')}>
                        <img src={require('../donees/icon/free-skrill-4-566359.png')} alt="Cashlib icon" />
                    </button>
                    <button type="button" className={`btn Neosurf ${selectedFilter === 'Neosurf' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setSelectedFilter('Neosurf')}>
                        <img src={require('../donees/icon/neosurf_off.png')} alt="Cashlib icon" />
                    </button>
                </div>

                <div className='imageDepot'>

                </div>
            </div>
            <div className='ctn_expli'>
                {filterDescriptions[selectedFilter] && (
                    <>
                        {filterDescriptions[selectedFilter].slice(0, isExpanded ? filterDescriptions[selectedFilter].length : 5).map((description, index) => {
                            if (description.text === "") {
                                return null; // Ignore les chaînes vides
                            } else if (description.type === "h2") {
                                return <h2 key={index} className="texte_explicatif">{t(description.text)}</h2>;
                            } else {
                                return <p key={index} className="texte_explicatif">{t(description.text)}</p>;
                            }
                        })}
                        {filterDescriptions[selectedFilter].length > 5 && (
                            <button onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? (t('voirmoins')) : (t('voirplus'))}
                            </button>
                        )}
                    </>
                )}
            </div>

            <div>
                {filteredCasinos.map((casino) => (
                    <div key={casino.id} className="lalistos" id={`casino-${casino.id}`}>
                        <Link to={`/casinos/${casino.id}`}>
                            <CasinoCard casino={casino} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BonusList;