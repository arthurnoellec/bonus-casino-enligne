const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');

const hostname = 'https://www.bonus-casino-enligne.com'; // Remplacez par l'URL de votre site

const pagesDirectory = path.join(__dirname, 'src', 'pages');
const pageFiles = fs.readdirSync(pagesDirectory).filter(file => path.extname(file) === '.js'); // Exclure les fichiers .css

const blogDirectory = path.join(__dirname, 'src', 'donees', 'blogs');
const blogFiles = fs.readdirSync(blogDirectory).filter(file => path.extname(file) === '.json');

const casinoUrls = Array.from({ length: 20 }, (_, index) => ({
  url: `/casinos/${index + 1}`,
  changefreq: 'monthly', // Fréquence mensuelle pour les casinos
  priority: 0.6,
}));

const urls = [
  ...pageFiles.map(pageFile => {
    const pagePath = path.join('/' + path.basename(pageFile, '.js'));
    return { url: pagePath, changefreq: 'daily', priority: 1.0 }; // Fréquence quotidienne pour les autres pages
  }),
  ...blogFiles.map(blogFile => {
    const blogPath = path.join('/articleblog/' + path.basename(blogFile, '.json'));
    return { url: `${blogPath}.json`, changefreq: 'daily', priority: 0.8 }; // Fréquence quotidienne pour les blogs
  }),
  ...casinoUrls,
];

const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

urls.forEach(url => {
  const urlNode = root.ele('url');
  urlNode.ele('loc', `${hostname}${url.url}`);
  urlNode.ele('changefreq', url.changefreq);
  urlNode.ele('priority', url.priority);
});

const sitemapContent = root.end({ pretty: true });

const sitemapPath = path.join(__dirname, 'build', 'sitemap.xml'); // Chemin pour enregistrer dans le répertoire build

fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`Sitemap généré avec succès. Chemin du fichier : ${sitemapPath}`);
