import React from 'react';
import './CasinoCard.css'
import { useTranslation } from 'react-i18next';


const CasinoCard = ({ casino }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();


  return (
    <div className="contenaireCards">
      <div className="cardsCasino">
        <div class="div_titre">
          <div>
            <img src={casino.img_logo} alt="Logo d'un casino en ligne" />
            <span class="nomCasino">{casino.nom}</span>
          </div>
          <span class="info_btn">i</span>
        </div>

        <span className="bonusCasino">
          <span className="iconCards"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M15.0049 2.00293C17.214 2.00293 19.0049 3.79379 19.0049 6.00293C19.0049 6.73196 18.8098 7.41544 18.4691 8.00404L23.0049 8.00293V10.0029H21.0049V20.0029C21.0049 20.5552 20.5572 21.0029 20.0049 21.0029H4.00488C3.4526 21.0029 3.00488 20.5552 3.00488 20.0029V10.0029H1.00488V8.00293L5.54065 8.00404C5.19992 7.41544 5.00488 6.73196 5.00488 6.00293C5.00488 3.79379 6.79574 2.00293 9.00488 2.00293C10.2001 2.00293 11.2729 2.52714 12.0058 3.35819C12.7369 2.52714 13.8097 2.00293 15.0049 2.00293ZM11.0049 10.0029H5.00488V19.0029H11.0049V10.0029ZM19.0049 10.0029H13.0049V19.0029H19.0049V10.0029ZM9.00488 4.00293C7.90031 4.00293 7.00488 4.89836 7.00488 6.00293C7.00488 7.05729 7.82076 7.92109 8.85562 7.99744L9.00488 8.00293H11.0049V6.00293C11.0049 5.00129 10.2686 4.17162 9.30766 4.0257L9.15415 4.00842L9.00488 4.00293ZM15.0049 4.00293C13.9505 4.00293 13.0867 4.81881 13.0104 5.85367L13.0049 6.00293V8.00293H15.0049C16.0592 8.00293 16.923 7.18705 16.9994 6.15219L17.0049 6.00293C17.0049 4.89836 16.1095 4.00293 15.0049 4.00293Z"
              fill="rgba(249,191,18,1)"></path>
          </svg></span>
          <div className="bonusInfo">
            <span className="pourcent">{casino.bonus_1_bonus}</span>
            <span className="jusqua">{casino.bonus_1_jusqua}</span>
          </div>
        </span>


        <span className="maxBonusCasino">
          <span className="iconCards"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z" fill="rgba(249,191,18,1)"></path></svg></span>
          <div className="spinInfo">
            <span className="pourcent">{casino.free_spin}</span>
            <span className="jusqua">{t('spinoffert')}</span>
          </div>
        </span>


        <span className="wagerCasino">
          <span className="iconCards"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"
              fill="rgba(249,191,18,1)"></path>
          </svg></span>
          <div className="wagerInfo">
            <span className="pourcent">{casino.bonus_1_wager}</span>
            <span className="jusqua">wager</span>
          </div>
        </span>

        <div className="lesBoutonsCards">
          <button><a className='link' href={casino.lien_affilie} target='_blank'>{t('obtenirbonus')}</a></button>
          <button className='iTelephone'>i</button>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;