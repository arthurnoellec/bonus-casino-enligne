import React, { useState, useEffect } from 'react';
import { useParams, redirect } from 'react-router-dom';
import './CasinoDetail.css';
import FAQ from "../modules/FAQ"
import { useTranslation } from 'react-i18next';



const CasinoDetail = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const [casino, setCasino] = useState(null);
  const { id } = useParams(); // Get the id from the URL

  const { url } = "/casinos/" + id;
  redirect((url));

  const countYes = (methodesPaiement) => {
    let count = 0;
    methodesPaiement.forEach((methode) => {
      if (methode.disponible === "oui") {
        count++;
      }
    });
    return count;
  };

  useEffect(() => {
    if (casino) {
      // Nouveau lien de l'image de fond
      const newBackgroundImage = casino.lien_banierre;

      // Changer le lien de l'image de fond
      const backgroundElement = document.querySelector('.background_detail');
      if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url(${newBackgroundImage})`;
      }
    }
  }, [casino]);





  useEffect(() => {
    const casinosData = require(`../donees/casinos_${i18n.language}.json`);

    // Find the casino object in the casinosData array with the same id.
    // Convert the id to a number before comparing.
    const fetchedCasino = casinosData.find(c => Number(c.id) === Number(id));
    setCasino(fetchedCasino);
  }, [id, i18n.language]); // Add id and i18n.language as dependencies

  if (!casino) {
    return <div>Loading...</div>;
  }

  // Now you can safely access the 'Cashlib' property of the casino object.
  return (
    <div className="all_detail">
      <div className="background_detail"></div>
      <div className="header_detail">
        <div className="img_casino_detail">
          {/* <img src="https://zupimages.net/up/23/14/94vc.png" /> */}
          <img src={casino.img_logo} />
        </div>
        <div className="info_casi_detail_all">
          <div className="date_lien">
            <span>{casino.lien_classique}</span>
            <span>{t('enlignedepuis')} {casino.En_ligne_depuis}</span>
          </div>
          <div className="titre_note">
            <span>{casino.nom}</span>
            <span>{casino.note_casino}</span>
          </div>
          <div className="btn_bonus">
            <button className="Le_btn_detail"><a href={`https://${casino.lien_affilie}`} target='_blank'>{t('obtenirbonus')}</a></button>
          </div>
        </div>
      </div>
      <div className="contenere_des_paiement">
        <h3>Description</h3>
        <span>
          {casino.description_casino.map((element) => <p className='nospace'>{element}</p>)}
        </span>
        <div className="paiement_liste">
          <h3>{t('methodedepaie')}</h3>
          {casino.methodes_paiement &&
            casino.methodes_paiement
              .filter((methode) => methode.disponible === "oui")
              .map((methode, index) => (
                <div key={index} className={`paiement_dispo ${methode.nom.toLowerCase()}`}>
                  {/* {methode.nom} */}
                </div>
              ))}
        </div>
        <h3>{t('delaideretrait')}</h3>
        <div className="retrait_delai">
          <span>{casino.methode_de_retrait_1}</span>
          <span>{casino.methode_de_retrait_2}</span>
        </div>
      </div>
      <div className="rest_detail">
        <div className="liste_depot">
          <h4>{t('bonusbienve')}</h4>
          <div className="carteDepot">
            <div className="barre_txt">
              <span>{t('premierdepot')}</span>
              <div className="barre">
                <p></p>
              </div>
            </div>
            <div className="pourcent_depot flexos">
              <span>{casino.bonus_1_bonus}</span>
              <span>{casino.bonus_1_jusqua}</span>
            </div>
            <div className="flexos">
              <span>{casino.bonus_1_bet_max}</span>
              <span>bet max</span>
            </div>
            <div className="flexos">
              <span>{casino.bonus_1_wager}</span>
              <span>wager</span>
            </div>
            <div className="flexos">
              <span>{casino.bonus_1_depot_min}</span>
              <span>depot min</span>
            </div>
            <div className="div_btn_detail">
              <button className="Le_btn_detail"><a href={`https://${casino.lien_affilie}`} target='_blank'>{t('obtenirbonus')}</a></button>
            </div>
          </div>
          {casino.bonus_2 === "oui" && (
            <div className="carteDepot">
              <div className="barre_txt">
                <span>{t('seconddepot')}</span>
                <div className="barre">
                  <p></p>
                </div>
              </div>
              <div className="pourcent_depot flexos">
                <span>{casino.bonus_2_bonus}</span>
                <span>{casino.bonus_2_jusqua}</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_2_bet_max}</span>
                <span>bet max</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_2_wager}</span>
                <span>wager</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_2_depot_min}</span>
                <span>depot min</span>
              </div>
              <div className="div_btn_detail">
                <button className="Le_btn_detail"><a href={`https://${casino.lien_affilie}`} target='_blank'>{t('obtenirbonus')}</a></button>
              </div>
            </div>
          )}

          {casino.bonus_3 === "oui" && (
            <div className="carteDepot">
              <div className="barre_txt">
                <span>{t('troisiemedepot')}</span>
                <div className="barre">
                  <p></p>
                </div>
              </div>
              <div className="pourcent_depot flexos">
                <span>{casino.bonus_3_bonus}</span>
                <span>{casino.bonus_3_jusqua}</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_3_bet_max}</span>
                <span>bet max</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_3_wager}</span>
                <span>wager</span>
              </div>
              <div className="flexos">
                <span>{casino.bonus_3_depot_min}</span>
                <span>depot min</span>
              </div>
              <div className="div_btn_detail">
                <button className="Le_btn_detail"><a href={`https://${casino.lien_affilie}`} target='_blank'>{t('obtenirbonus')}</a></button>
              </div>
            </div>
          )}
        </div>
        <h4 className="titre_notre_avis">{t('notreavis')}</h4>
        <div className="div_notre_avis ">
          <div>
            {casino.description_avis.map((element, index) => (
              <p key={index} className='nospace'>
                {element.includes('<a') ? (
                  <span dangerouslySetInnerHTML={{ __html: element }}></span>
                ) : (
                  element.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      <FAQ></FAQ>

    </div>
  );
};

export default CasinoDetail;
