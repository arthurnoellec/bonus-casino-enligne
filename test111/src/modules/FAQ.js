import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './FAQ.css'

import { useTranslation } from 'react-i18next';


const Accordion = () => {

  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    { header: t('faqHeader1'), content: t('faqContent1') },
    { header: t('faqHeader2'), content: t('faqContent2') },
    { header: t('faqHeader3'), content: t('faqContent3') },
    { header: t('faqHeader4'), content: t('faqContent4') },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
    <h2 class="title_liste title_faq">F.A.Q</h2>
    <div className="faq">
      <div className="accordion">
        {data.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{item.header}</h2>
              <div className="icon">
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Accordion;
