// ./src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate, useParams, HashRouter as Router, Switch } from 'react-router-dom';






import CasinoList from './pages/CasinoList';
import CasinoDetail from './pages/CasinoDetail';
import Accueil from './pages/Accueil';
import NotFound from './pages/Err404';
import NavBar from './modules';
import Space from './modules/Space';
import BonusList from './pages/BonusList';
import DepotList from './pages/DepotList';
import DepotNewList from './pages/DepotNewList';
import Footer from './modules/Footer';
import PolitiqueConfidentialite from './pages/Politiques';
import TermeConfidentialite from './pages/Termes';
import BlogList from './pages/BlogList';
import BlogArticle from './pages/BlogArticle';


import { useTranslation } from 'react-i18next';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const dataLayer = [];


const locale = 'fr';
const messages = {
  requiredCodeErrorMessage: 'Veuillez choisir un code pays',
  invalidErrorMessage: 'Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.',
  requiredErrorMessage: 'Vous devez renseigner ce champ.',
  genericErrorMessage: 'Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.',
  translation: {
    common: {
      selectedList: '{quantity} liste sélectionnée',
      selectedLists: '{quantity} listes sélectionnées'
    }
  }
};
const autoHide = true;




function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Insérer votre script ici
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-7PJF55PK88";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7PJF55PK88');

    return () => {
      document.body.removeChild(script);
    }
  }, []);


  

  return (
    <BrowserRouter>
      <div className='indexNav' style={{ position: 'fixed', width: '100vw' }}>
        <NavBar />
      </div>
      <Space />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste" element={<CasinoList />} />
        <Route path="/casinos/:id" element={<CasinoDetail />} /> 
        <Route path="/bonus" element={<BonusList />} />
        <Route path="/depot" element={<DepotList />} />
        <Route path="/depot2" element={<DepotNewList />} />
        <Route path="/politiques" element={<PolitiqueConfidentialite />} />
        <Route path="/termes" element={<TermeConfidentialite />} />     
        <Route exact path="/bloglist" element={<BlogList/>} />
        <Route path="/articleblog/:filename" element={<BlogArticle />} />
        <Route path="/404" element={<NotFound />} /> {/* Ajout de la route pour la page 404 */}
        <Route path="*" element={<Navigate to="/404" />} /> {/* Redirection vers la page 404 pour toutes les autres routes */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
