import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CasinoCard from './CasinoCard';
import "./BonusList.css";

import { useTranslation } from 'react-i18next';

import Select from 'react-select';






const BonusList = () => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const casinosData = require(`../donees/casinos_${i18n.language}.json`);

    console.log("La langue choisie est : " + i18n.language);
    console.log(`Chargement des données du fichier casinos_${i18n.language}.json`);
    const casino1 = casinosData.find(casino => casino.id === 1);
    console.log(casino1.nom);



    const [filteredCasinos, setFilteredCasinos] = useState(casinosData);
    const [selectedFilter, setSelectedFilter] = useState('');
    const { search } = useLocation();
    const [language, setLanguage] = useState(i18n.language);


    useEffect(() => {
        const params = new URLSearchParams(search);
        const filter = params.get('filter');
        setSelectedFilter(filter || '');
    }, [search]);

    useEffect(() => {
        const updatedCasinos = require(`../donees/casinos_${language}.json`);
        setFilteredCasinos(updatedCasinos);
    }, [language]);

    useEffect(() => {
        switch (selectedFilter) {
            case 'New':
                setFilteredCasinos(casinosData.filter(casino => casino.New === 'oui'));
                break;
            case 'No wager':
                setFilteredCasinos(casinosData.filter(casino => casino['wager'] === 'non'));
                break;
            case 'Free money':
                setFilteredCasinos(casinosData.filter(casino => casino['Free money'] === 'oui'));
                break;
            case 'Free spins offered':
                setFilteredCasinos(casinosData.filter(casino => casino['Free spins offered'] === 'oui'));
                break;
            case 'Crypto casino':
                setFilteredCasinos(casinosData.filter(casino => casino['Crypto casino'] === 'oui'));
                break;
            case 'PayPal':
                setFilteredCasinos(casinosData.filter(casino => casino.PayPal === 'oui'));
                break;
            default:
                setFilteredCasinos(casinosData);
        }
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

    const getTitle = (filter) => {
        switch (filter) {
            case 'New':
                return t('titrepagebonusnouveaute');
            case 'No wager':
                return t('titrepagebonussanswager');
            case 'Free money':
                return t('titrepagebonusargentgratuit');
            case 'Free spins offered':
                return t('titrepagebonustourgratuit');
            case 'Crypto casino':
                return t('titrepagebonuscrypto');
            case 'PayPal':
                return t('titrepagebonuspaypal');
            default:
                return t('offrebonus');
        }
    }

    const currentDate = new Date();
    const monthNames = [
      'janvier', 'février', 'mars',
      'avril', 'mai', 'juin', 'juillet',
      'août', 'septembre', 'octobre',
      'novembre', 'décembre'
    ];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();


    return (
        <div className='contener_bonus_page'>
            <div className="titre_page_bonus">
                <div className="div_titre">
                    <h1>{getTitle(selectedFilter)}{currentMonth} {currentYear}</h1>
                </div>
            </div>
            <div className="div_filtre">
                <Select
                    className="custom-select"
                    value={selectedFilter}
                    onChange={(option) => setSelectedFilter(option.value)}
                    options={[{ value: '', label: t('selectionnerunfiltre') }, { value: 'New', label: t('nouveaute') }, { value: 'No wager', label: t('sanswager') }, { value: 'Free money', label: t('argentgratuit') }, { value: 'Free spins offered', label: t('tourgratuit') }, { value: 'Crypto casino', label: 'Crypto casino' }, { value: 'PayPal', label: 'PayPal' },]}
                    placeholder={selectedFilter ? selectedFilter : t('selectionnerunfiltre')}
                />
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



// Filtre New : http://localhost:3000/bonus?filter=New
// Filtre No wager : http://localhost:3000/bonus?filter=No%20wager
// Filtre Free money : http://localhost:3000/bonus?filter=Free%20money
// Filtre Free spins offered : http://localhost:3000/bonus?filter=Free%20spins%20offered
// Filtre Crypto casino : http://localhost:3000/bonus?filter=Crypto%20casino
// Filtre PayPal : http://localhost:3000/bonus?filter=PayPal