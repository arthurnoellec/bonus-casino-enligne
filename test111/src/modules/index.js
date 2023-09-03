import React, { useState, useEffect } from 'react';

import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import Form from './Form';
import './index.css'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBar';



const Navbar = () => {

    const [showPopup, setShowPopup] = useState(false);


    const { t } = useTranslation();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({ bonus: false, methodes: false });
    const [isWindowSmall, setIsWindowSmall] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleBodyScroll = (allowScroll) => {
        document.body.style.overflow = allowScroll ? 'auto' : 'hidden';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setDropdownOpen({ bonus: false, methodes: false });
        handleBodyScroll(true);
    };

    const handleResize = () => {
        setIsWindowSmall(window.innerWidth <= 990);
    };

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    useEffect(() => {
        handleResize();
        handleBodyScroll(!mobileMenuOpen);
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mobileMenuOpen]);

    const handleNavLinkClick = (event, type) => {
        if (type === 'bonus' || type === 'methodes') {
            setDropdownOpen({
                bonus: type === 'bonus' ? !dropdownOpen.bonus : false,
                methodes: type === 'methodes' ? !dropdownOpen.methodes : false,
            });
        } else {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        }
    };

    const handleDropdownClick = (type) => {
        if (isWindowSmall) {
            setDropdownOpen({
                bonus: type === 'bonus',
                methodes: type === 'methodes',
            });
        }
    };

    const handleBackClick = () => {
        setDropdownOpen({ bonus: false, methodes: false });
    };




    return (
        <>
            <Nav dropdownOpen={{ bonus: dropdownOpen.bonus, methodes: dropdownOpen.methodes }}
                scrolled={scrolled}>
                <NavLink to='/#up' onClick={closeMobileMenu}>
                    <img className='logo_typo' src={require('../donees/images/logo_typo.png')} alt='logo' />
                </NavLink>
                <Bars onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
                <NavMenu mobileMenuOpen={mobileMenuOpen}>
                    <NavLink to='#' onClick={(e) => handleNavLinkClick(e, 'bonus')} className="noActive">
                        Bonus <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)" /></svg>
                    </NavLink>
                    {dropdownOpen.bonus && (
                        <div className='listeDroulante fade-in listeBonus open'>
                            <NavLink to='/bonus?filter=New' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres1')}
                            </NavLink>
                            <NavLink to='/bonus?filter=No%20wager' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres2')}
                            </NavLink>
                            <NavLink to='/bonus?filter=Free%20money' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres3')}
                            </NavLink>
                            <NavLink to='/bonus?filter=Free%20spins%20offered' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres4')}
                            </NavLink>
                            <NavLink to='/bonus?filter=Crypto%20casino' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres5')}
                            </NavLink>
                            <NavLink to='/bonus?filter=PayPal' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('offres6')}
                            </NavLink>
                        </div>
                    )}
                    {/* <NavLink to='/about' activeStyle onClick={closeMobileMenu}>
                        {t('machine')}
                    </NavLink> */}
                    <NavLink to='#' onClick={(e) => handleNavLinkClick(e, 'methodes')} className="noActive">
                        {t('methode')} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" fill="rgba(255,255,255,1)" /></svg>
                    </NavLink>
                    {dropdownOpen.methodes && (
                        <div className='listeDroulante fade-in listeBonus open liste_methode'>
                            <NavLink to='/depot2?Visa=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes1')}                         </NavLink>
                            <NavLink to='/depot2?MasterCard=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes2')}                           </NavLink>
                            <NavLink to='/depot2?Paypal=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes3')}                          </NavLink>
                            <NavLink to='/depot2?Crypto=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes4')}                            </NavLink>
                            <NavLink to='/depot2?Cashlib=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes5')}                            </NavLink>
                            <NavLink to='/depot2?Paysafecard=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes6')}                           </NavLink>
                            <NavLink to='/depot2?Skrill=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes7')}                          </NavLink>
                            <NavLink to='/depot2?Neosurf=true' activeStyle onClick={() => { closeMobileMenu(); }}>
                                {t('methodes8')}                           </NavLink>
                        </div>
                    )}
                    <NavLink to='/bloglist' activeStyle onClick={closeMobileMenu}>
                        {t('actualite')}
                    </NavLink>
                    {isWindowSmall && (
                        <NavLink to='#' activeStyle className='LangueTel'>
                            <LanguageSwitcher className='none selecteurLangue'></LanguageSwitcher>
                        </NavLink>
                    )}
                    {isWindowSmall && (dropdownOpen.bonus || dropdownOpen.methodes) && (
                        <button onClick={handleBackClick} className="backButton">
                            Retour
                        </button>
                    )}
                </NavMenu>
                <NavBtn>
                    <LanguageSwitcher />
                    <NavBtnLink onClick={togglePopup}>{t('sinscrire')}</NavBtnLink>
                    {showPopup && (
                        <div className="popup">
                            <Form />
                            <button className="closeButton" onClick={togglePopup}>X</button>
                        </div>
                    )}
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
