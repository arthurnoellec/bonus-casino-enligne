import React, { useState } from 'react';
import "./Footer.css";
import Form from './Form';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {

    const { t } = useTranslation();

    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Email soumis : ' + email);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }


    return (
        <>
            <footer>
                <div class="newsletter">
                    <Form></Form>
                </div>
                <div class="links">
                    <div class="container">
                        <div class="column">
                            <h3>{t('nosoffres')}</h3>
                            <ul>
                                <li><Link to="/bonus?filter=New">{t('offres1')}</Link></li>
                                <li><Link to="/bonus?filter=No%20wager">{t('offres2')}</Link></li>
                                <li><Link to="/bonus?filter=Free%20money">{t('offres3')}</Link></li>
                                <li><Link to="/bonus?filter=Free%20spins%20offered">{t('offres4')}</Link></li>
                                <li><Link to="/bonus?filter=Crypto%20casino">{t('offres5')}</Link></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h3>{t('methode')}</h3>
                            <ul>
                                <li><Link to="/depot2?Visa=true">Visa</Link></li>
                                <li><Link to="/depot2?MasterCard=true">MasterCard</Link></li>
                                <li><Link to="/depot2?Paypal=true">PayPal</Link></li>
                                <li><Link to="/depot2?Crypto=true">Crypto</Link></li>
                                <li><Link to="/depot2?Cashlib=true">CashLib</Link></li>
                            </ul>
                        </div>
                        <div class="column">
                            <h3>{t('exclusivités')}</h3>
                            <ul>
                                <li><Link to="/casinos/3">WINOUI</Link></li>
                                <li><Link to="/casinos/1">MADNIX</Link></li>
                                <li><Link to="/casinos/7">BOOMERANG</Link></li>
                                <li><Link to="/casinos/2">MAGICAL SPIN</Link></li>
                                <li><Link to="/casinos/4">WILD SULTAN</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="gambleaware">
                    <div class="container">
                        <p>{t('texteprevention')}</p>
                        <a href='https://www.begambleaware.org/' target="_blank" ><img className='gambleawareimg' alt="Logo de gambleware" src='https://global-uploads.webflow.com/5b3a9e4571762f377da3a176/5b3a9e4571762f6be4a3a2cc_gambleaware.webp'></img></a>
                    </div>
                </div>
                <div class="bottom-links">
                    <div class="container">
                        <ul>
                            <li><Link to="/">{t('accueil')}</Link></li>
                            <li><Link to="/politiques">{t('politique')}</Link></li>
                            <li><Link to="/termes">{t('termes')}</Link></li>
                            <li><a href="mailto:contact@bonus-casino-enligne.com">contact@bonus-casino-enligne.com</a></li>
                            {/* <li><a href="#">Cookies</a></li> */}
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container">
                        <p>{t('droit')}</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
