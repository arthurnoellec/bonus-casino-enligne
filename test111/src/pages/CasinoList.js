import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CasinoCard from './CasinoCard';
import './CasinoList.css';
import Space from '../modules/Space';



const CasinoList = ({ currentLanguage }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const dataLayer = [];

  const [casinos, setCasinos] = useState([]);
  const [filteredCasinos, setFilteredCasinos] = useState([]);

  useEffect(() => {
    const casinosData = require(`../donees/casinos_${i18n.language}.json`);
    setCasinos(casinosData);
    setFilteredCasinos(casinosData);
  }, [i18n.language]);


  const [activeFilters, setActiveFilters] = useState({ nouveaute: false, argentGratuit: false, sansWager: false, spinGratuit: false, casinoCrypto: false, exclusivite: false });


  useEffect(() => {
    let filteredIds = casinos.map((casino) => casino.id);

    if (activeFilters.nouveaute) {
      const allowedIds = [6, 8, 9, 7, 14, 20];
      filteredIds = filteredIds.filter((id) => allowedIds.includes(id));
    }

    if (activeFilters.argentGratuit) {
      const argentGratuitIds = casinos.filter((casino) => casino["Free money"] === "oui").map((casino) => casino.id);
      filteredIds = filteredIds.filter((id) => argentGratuitIds.includes(id));
    }

    if (activeFilters.sansWager) {
      const sansWagerIds = casinos.filter((casino) => casino["wager"] === "non").map((casino) => casino.id);
      filteredIds = filteredIds.filter((id) => sansWagerIds.includes(id));
    }

    if (activeFilters.spinGratuit) {
      const spinGratuitIds = casinos.filter((casino) => casino["Free spins offert"] === "oui").map((casino) => casino.id);
      filteredIds = filteredIds.filter((id) => spinGratuitIds.includes(id));
    }

    if (activeFilters.casinoCrypto) {
      const casinoCryptoIds = casinos.filter((casino) => casino["Crypto casino"] === "oui").map((casino) => casino.id);
      filteredIds = filteredIds.filter((id) => casinoCryptoIds.includes(id));
    }

    if (activeFilters.exclusivite) {
      const exclusiviteIds = [3,1,7,2,4];
      filteredIds = filteredIds.filter((id) => exclusiviteIds.includes(id));
    }

    const filteredCasinos = casinos.filter((casino) => filteredIds.includes(casino.id));
    setFilteredCasinos(filteredCasinos);
  }, [activeFilters, casinos]);




  const toggleFilter = (filterId) => {
    setActiveFilters((prevFilters) => ({ ...prevFilters, [filterId]: !prevFilters[filterId] }));
  };

  const toggleCheckbox = (e) => {
    const label = e.target.parentElement;
    if (e.target.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  };


  const handleChange = (filterId, e) => {
    toggleFilter(filterId);
    toggleCheckbox(e);
  };

  // const sendAnalyticsEvent = (casinoId) => {
  //   if (typeof gtag !== 'undefined') {
  //     gtag('event', 'click', {
  //       event_category: 'Casino',
  //       event_action: 'Link Click',
  //       event_label: `Casino ID: ${casinoId}`,
  //     });
  //   }
  // };




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

  const newOFF = require('../donees/icon/icon_new_off.png');
  const newON = require('../donees/icon/icon_new_on.png');
  const gratuitON = require('../donees/icon/icon_gratuit_on.png');
  const gratuitOFF = require('../donees/icon/icon_gratuit_off.png');
  const wagerON = require('../donees/icon/icon_wager_on.png');
  const wagerOFF = require('../donees/icon/icon_wager_off.png');
  const spinOFF = require('../donees/icon/icon_free_spin_off.png');
  const spinON = require('../donees/icon/icon_free_spin_on.png');
  const btcON = require('../donees/icon/icon_btc_on.png');
  const btcOFF = require('../donees/icon/icon_btc_off.png');
  const paypalOFF = require('../donees/icon/exclu_off.png');
  const paypalON = require('../donees/icon/exclu_on.png');


  return (
    <div>
      <div className="titre_filtre"><span>{t('triparcategorie')}</span></div>
      <div className="lesFiltres">
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-nouveaute"
              type="checkbox"
              checked={activeFilters.nouveaute}
              onChange={(e) => handleChange("nouveaute", e)}
            />
            <img src={activeFilters.nouveaute ? newON : newOFF} alt="Nouveauté"></img>
          </label>
          <span>{t('nouveaute')}</span>
        </div>
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-argent-gratuit"
              type="checkbox"
              checked={activeFilters.argentGratuit}
              onChange={(e) => handleChange("argentGratuit", e)}
            />
            <img src={activeFilters.argentGratuit ? gratuitON : gratuitOFF} alt="Argent gratuit"></img>
          </label>
          <span>{t('argentgratuit')}</span>
        </div>
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-sans-wager"
              type="checkbox"
              checked={activeFilters.sansWager}
              onChange={(e) => handleChange("sansWager", e)}
            />
            <img src={activeFilters.sansWager ? wagerON : wagerOFF} alt="Sans wager"></img>
          </label>
          <span>{t('sanswager')}</span>
        </div>
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-spin-gratuit"
              type="checkbox"
              checked={activeFilters.spinGratuit}
              onChange={(e) => handleChange("spinGratuit", e)}
            />
            <img src={activeFilters.spinGratuit ? spinON : spinOFF} alt="Spin gratuit"></img>
          </label>
          <span>{t('tourgratuit')}</span>
        </div>
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-casino-crypto"
              type="checkbox"
              checked={activeFilters.casinoCrypto}
              onChange={(e) => handleChange("casinoCrypto", e)}
            />
            <img src={activeFilters.casinoCrypto ? btcON : btcOFF} alt="Casino crypto"></img>
          </label>
          <span>Casino crypto</span>
        </div>
        <div className="un_filtre">
          <label className="filtreBTN">
            <input
              id="filter-exclusivite"
              type="checkbox"
              checked={activeFilters.exclusivite}
              onChange={(e) => handleChange("exclusivite", e)}
            />
            <img src={activeFilters.exclusivite ? paypalON : paypalOFF} alt="Exclusivité"></img>
          </label>
          <span>{t('exclusivités')}</span>
        </div>
      </div>
      <Space />
      <div>
        {filteredCasinos.map((casino) => {
          const isExclusive = casino.id === 5 || casino.id === 2 || casino.id === 14;
          const hasAfterBadge = [2, 5, 6, 10, 11, 12, 14].includes(casino.id); // Vérifiez si l'ID du casino correspond à ceux spécifiés
          return (
            <div key={casino.id} className={`lalistos ${isExclusive ? 'exclu-badge' : ''} ${hasAfterBadge ? `after-badge ${t('afterbadge')}` : ''}`} id={`casino-${casino.id}`}>
              <Link to={`/casinos/${casino.id}`} /* onClick={() => sendAnalyticsEvent(casino.id)} */>
                <CasinoCard casino={casino} />
              </Link>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default CasinoList;
