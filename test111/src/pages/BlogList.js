import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './BlogList.css';

function importAll(r) {
  return r.keys().map(fileName => ({
    link: fileName.substr(2).replace(/\/index\.json$/, ''),
    module: r(fileName)
  }));
}

export const blogs = importAll(require.context('../donees/blogs', true, /\.json$/));

function BlogList() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [availableFilters, setAvailableFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    // Create a list of unique filters from the articles
    const uniqueFilters = new Set();
    blogs.forEach(blog => {
      const langData = blog.module.lang[i18n.language];
      if (langData && langData.filtres) {
        langData.filtres.forEach(filter => uniqueFilters.add(filter));
      }
    });
    setAvailableFilters(Array.from(uniqueFilters));
  }, [i18n.language]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setSelectedFilters(prevState => {
      if (prevState.includes(selectedFilter)) {
        return prevState.filter(filter => filter !== selectedFilter);
      } else {
        return [selectedFilter];
      }
    });
  };

  const filteredBlogs = blogs.filter(blog => {
    const langData = blog.module.lang[i18n.language];
    const missingProperties = [];

    if (!langData) {
      missingProperties.push("lang");
    } else {
      if (!langData.filtres) missingProperties.push("filtres");
      if (!langData.image) missingProperties.push("image");
      if (!langData.title) missingProperties.push("title");
      if (!langData.date) missingProperties.push("date");
    }

    if (missingProperties.length > 0) {
      console.error("Données manquantes pour le blog :", blog.link);
      console.error("Propriétés manquantes :", missingProperties);
      return false;
    }

    if (selectedFilters.length === 0) return true;
    return selectedFilters.every(filter => langData.filtres.includes(filter));
  });

  const isFilterSelected = (filter) => {
    return selectedFilters.includes(filter);
  };

  const filteredBlogsReversed = filteredBlogs.reverse();

  return (
    <div className='tout'>
      <div style={{ marginBottom: '20px' }} className='lesfiltres'>
        <label style={{
          background: selectedFilters.length === 0 ? 'linear-gradient(180deg, #F9BF12 0%, #E2FF31 100%)' : '#1B1B19',
          color: selectedFilters.length === 0 ? 'black' : 'white',
        }}>
          <input
            type="radio"
            value=""
            checked={selectedFilters.length === 0}
            onChange={() => setSelectedFilters([])}
          />
          {t('toutesactu')}
        </label>
        {availableFilters.map((filter) => (
          <label key={filter} style={{
            background: isFilterSelected(filter) ? 'linear-gradient(180deg, #F9BF12 0%, #E2FF31 100%)' : '#1B1B19',
            color: isFilterSelected(filter) ? 'black' : 'white',
          }}>
            <input
              type="radio"
              value={filter}
              checked={isFilterSelected(filter)}
              onChange={handleFilterChange}
            />
            {filter}
          </label>
        ))}
      </div>
      <div className='c_blogs'>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className='cc_blogs'>
          {filteredBlogsReversed.map((blog, index) => (
            <div key={index} style={{ flex: '1 0 300px', margin: '20px', padding: '10px' }}>
              {/* Ajoutez une div supplémentaire avec la classe "blog-image" */}
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${blog.module.lang[i18n.language].image})` }}
              />
              <Link to={`/articleblog/${blog.link}`} style={{ textDecoration: 'none', color: '#333' }} className='article'>
                <h3 style={{ marginTop: '10px' }}>{blog.module.lang[i18n.language].title}</h3>
                <p>{blog.module.lang[i18n.language].date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
