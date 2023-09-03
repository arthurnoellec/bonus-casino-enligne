import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogs } from './BlogList'; // Importez 'blogs' depuis le fichier BlogList
import './BlogArticle.css';

function BlogArticle() {
    const { filename } = useParams();
    const { i18n } = useTranslation();
    const { t } = useTranslation();


    // Trouver l'article correspondant dans le tableau 'blogs'
    const blog = blogs.find(blog => blog.link === filename);

    if (!blog) {
        return <div>Article non trouvé.</div>;
    }

    const { title, image, blocks } = blog.module.lang[i18n.language];

    return (
        <div className='artcile_complet'>
            <div className='cc_article'>
                <h1>{title}</h1>
                <img src={image} alt={title} />

                <div className='share-buttons'>
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                        className='share-button twitter-button'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-x'></i>  {t('Partager')} {t('sur')} X
                    </a>
                    <a
                        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`}
                        className='share-button email-button'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fas fa-envelope'></i> {t('Partager')} {t('par')} e-mail
                    </a>
                </div>

                {blocks.map((block, blockIndex) => (
                    <div key={blockIndex}>
                        <h2>{block.title}</h2>
                        {block.subBlocks.map((subBlock, subBlockIndex) => (
                            <div key={subBlockIndex}>
                                <h3>{subBlock.title}</h3>
                                {subBlock.paragraphs.map((paragraph, paragraphIndex) => (
                                    <p key={paragraphIndex}>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogArticle;
