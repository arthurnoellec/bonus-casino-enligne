import React, { useEffect, useState } from "react";
import './Accueil.css';
import CasinoList from './CasinoList';
import CasinoDetail from './CasinoDetail';
import CasinoCard from './CasinoCard';
import { Outlet, Link } from 'react-router-dom';
import FAQ from "../modules/FAQ"
import { useTranslation } from 'react-i18next';

import ReactGA from "react-ga";


const wildsultant = require('../donees/images/wildsultant.png');
const magical = require('../donees/images/magicalspin.png');
const winouin = require('../donees/images/winoui.png');




const Accueil = () => {

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [casinosData, setCasinosData] = useState([]);

  const loadCasinosData = () => {
    const casinos = require(`../donees/casinos_${i18n.language}.json`);
    setCasinosData(casinos);
  };

  useEffect(() => {
    loadCasinosData();
  }, [i18n.language]);


  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);


  const casinosWithBonus1 = casinosData.filter((casino) => casino.bonus_1 === 'oui');
  const firstThreeCasinosWithBonus1 = casinosWithBonus1.slice(0, 3);

  const casinosWithFreeMoney = casinosData.filter((casino) => casino["Free money"] === 'oui');
  const firstThreeCasinosWithFreeMoney = casinosWithFreeMoney.slice(0, 3);

  const casinosWithNoWager = casinosData.filter((casino) => casino["wager"] === 'non');
  const firstThreeCasinosWithNoWager = casinosWithNoWager.slice(0, 3);

  const casinosWithNoWagerNo = casinosData.filter((casino) => casino["wager"] === 'oui');
  const firstThreeCasinosWithNoWagerNo = casinosWithNoWagerNo.slice(0, 3);


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
    <>
      <div class="header">
        <div class="headerContenu">
          <div class="headerTitre">
            <h1 className="header_title">
              {t('titresite')} {currentMonth} {currentYear}
            </h1>
          </div>
          <div class="shape_container">
            <div class="shape_wrapper item_1">
              <div class="top_shape">
              <img src={wildsultant} alt="Logo de Wildsultant" />
              </div>
              <div class="content">
                {/* <a href="/casinos/4"> */}
                <div class="carteContenu">
                  <h2 class="carteTitre">WILD SULTAN</h2>
                  <span class="cartePourcentage txtDegrade">100%</span>
                  <span class="carteJusqua txtDegrade">{t('jusqua')}  500€</span>
                  <span class="carteAtout">+50 {t('spinoffert')} </span>
                  <Link className="lienCarte" to="/casinos/4">
                    <div className="carteBTN BTN">
                      {t('btnbonus')}
                    </div>
                  </Link>
                </div>
                {/* </a> */}
              </div>
            </div>
          </div>
          <div class="shape_container">
            <div class="shape_wrapper item_2">
              <div class="top_shape">
              <img src={magical} alt="Logo de Magical" />
              </div>
              <div class="content">
                {/* <a href="/casinos/2"> */}
                <div class="carteContenu">
                  <h2 class="carteTitre">MAGICAL SPIN</h2>
                  <span class="cartePourcentage txtDegrade">120%</span>
                  <span class="carteJusqua txtDegrade">{t('jusqua')} 1000€</span>
                  <span class="carteAtout">+10€ {t('gratuitsansdepot')} </span>
                  <Link className="lienCarte" to="/casinos/2">
                    <div className="carteBTN BTN">
                      {t('btnbonus')}
                    </div>
                  </Link>
                </div>
                {/* </a> */}
              </div>
            </div>
            <div class="shape_wrapper item_3">
              <div class="top_shape">
              <img src={winouin} alt="Logo de Winouin" />
              </div>
              <div class="content">
                {/* <a href="/casinos/3"> */}
                <div class="carteContenu">
                  <h2 class="carteTitre">WINOUI</h2>
                  <span class="cartePourcentage txtDegrade">100%</span>
                  <span class="carteJusqua txtDegrade">{t('jusqua')} 500€</span>
                  <span class="carteAtout">+300 {t('spinoffert')}</span>
                  <Link className="lienCarte" to="/casinos/3">
                    <div className="carteBTN BTN">
                      {t('btnbonus')}
                    </div>
                  </Link>
                </div>
                {/* </a> */}
              </div>
            </div>
          </div>
          <div class="casinoN2_3">
            <div class="casinoN2 carte"></div>
            <div class="casinoN3 carte"></div>
          </div>
          <div class="headerTitre">
            <p className="header_sou_titre">
              {t('soustitreaccueil')}
            </p>
          </div>
        </div>
      </div>
      <CasinoList currentLanguage={i18n.language} />
      <div class="cont_pa">
        <div class="info-block">
          <img
            src="https://zupimages.net/up/23/25/j6qu.jpeg"
            alt="Description de l'image" />
          <div class="info-text">
            <h2>{t('titrepremierdepot')} </h2>
            <p>{t('contenuepremierdepot')}</p>

          </div>
        </div>
      </div>
      <h2 class="title_liste">{t('selectioncasinopremierdepot')}</h2>

      {firstThreeCasinosWithBonus1.map((casino, index) => (
        <div key={index} className="lalistos" id={`casino-${casino.id}`}>
          <Link to={`/casinos/${casino.id}`}>
            <CasinoCard casino={casino} />
          </Link>
        </div>
      ))}



      <div class="cont_pa">
        <div class="info-block reverseee">
          <div class="info-text">
            <h2>{t('bonusansdepot')}</h2>
            <p>{t('contenuebonusansdepot')}</p>

          </div>
          <img
            src="https://zupimages.net/up/23/20/0xbc.png"
            alt="Description de l'image" />
        </div>
      </div>
      <h2 class="title_liste">{t('selectioncasinosansdepot')}</h2>


      {firstThreeCasinosWithFreeMoney.map((casino, index) => (
        <div key={index} className="lalistos" id={`casino-${casino.id}`}>
          <Link to={`/casinos/${casino.id}`}>
            <CasinoCard casino={casino} />
          </Link>
        </div>
      ))}


      <div class="cont_pa">
        <div class="info-block">
          <img
            src="https://zupimages.net/up/23/20/c643.jpeg"
            alt="Description de l'image" />
          <div class="info-text">
            <h2>{t('bonusanswager')}</h2>
            <p>{t('contenuebonusanswager')}</p>

          </div>
        </div>
      </div>
      <h2 class="title_liste">{t('selectioncasinosanswager')}</h2>


      {firstThreeCasinosWithNoWager.map((casino, index) => (
        <div key={index} className="lalistos" id={`casino-${casino.id}`}>
          <Link to={`/casinos/${casino.id}`}>
            <CasinoCard casino={casino} />
          </Link>
        </div>
      ))}

      <div class="cont_pa">
        <div class="info-block reverseee">
          <div class="info-text">
            <h2>{t('bonusavecwager')}</h2>
            <p>{t('contenuebonusavecwager')}</p>

          </div>
          <img
            src="https://zupimages.net/up/23/20/qbj1.jpeg"
            alt="Description de l'image" />
        </div>
      </div>
      <h2 class="title_liste">{t('selectioncasinoavecwager')}</h2>

      {firstThreeCasinosWithNoWagerNo.map((casino, index) => (
        <div key={index} className="lalistos" id={`casino-${casino.id}`}>
          <Link to={`/casinos/${casino.id}`}>
            <CasinoCard casino={casino} />
          </Link>
        </div>
      ))}


      <FAQ></FAQ>
    </>
  );
};

export default Accueil;