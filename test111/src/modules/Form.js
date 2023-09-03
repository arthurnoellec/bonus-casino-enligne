import React from 'react';
import './Form.css'


import { useTranslation } from 'react-i18next';

function Form() {

  const { t } = useTranslation();

  return (
    <>
      <div class="newsletter">
        <div class="container ctn">
          <h2>{t('titreinscrivezvous')}</h2>
          <p>{t('paragrapheinscrivezvous')}</p>
        </div>
        <div className="sib-form">
          <div id="sib-form-container" className="sib-form-container">
            <div id="sib-container" className="sib-container--large sib-container--vertical">
              <form id="sib-form" method="POST" action="https://d3102074.sibforms.com/serve/MUIEAOJrbXN5H868eQyMKffndl9BFwfw_jDXehwN0PME6L8zelg6ou3sy2DohF2d_4Y2FxOXuY70EPBFgeB3RAjIn_NDXaSwIpuS3THiG5Xpx2Pdnuf44FiR1eZnzc-bnMbe-grwZQWOywJAl9MgZ1b2AYwt25aSWBm7T49tXeBGD5p16-Er3SU_8xpxAmMZwQ84qU9I1ON6kRgH">
                <div>
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row">
                        <div className="entry__field">
                          <input type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder=" EMAIL" data-required="true" required />
                        </div>
                      </div>
                      <span className='petit_texte'>{t('vousdesaboatoutmoment')}</span>
                      <label className="entry__error entry__error--primary"></label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sib-form-block" style={{ textAlign: 'left' }}>
                    <button className="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                      <span>{t('sinscrire')}</span>
                    </button>
                    <span className='petit_texte'>{/*Vous pouvez vous desabonner a tout moment.<br></br>*/}<b>{t('confirmation18ans')}</b></span>
                  </div>
                </div>
                <input type="hidden" name="locale" value="fr" />
                <input type="hidden" name="html_type" value="simple" />
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Form;
