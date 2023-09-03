import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  useEffect(() => {
    const currentLang = localStorage.getItem('i18nextLng');
    if (currentLang) {
      i18n.changeLanguage(currentLang);
      setSelectedLang(currentLang);
    }
  }, [i18n]);

  const changeLanguage = (event) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const dropdownStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #cccccc',
    borderRadius: '4px',
    padding: '5px 10px',
    fontSize: '14px',
    fontWeight: 'normal',
    outline: 'none',
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  };

  return (
    <div>
      <select
        onChange={changeLanguage}
        value={selectedLang}
        style={dropdownStyle}
      >
        <option value="en">English</option>
        <option value="fr-ca">Français canadien</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;