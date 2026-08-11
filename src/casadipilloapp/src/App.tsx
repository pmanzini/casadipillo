import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { image, rootImage, houseImages, territoryImages } from './gallery';

type GalleryKind = 'house' | 'territory';

const mapsUrl = 'https://maps.app.goo.gl/bt5gmtdy3DJM6fxF7';
const links = { Urbino: 'https://www.vieniaurbino.it/', Mondavio: 'https://turismo.comune.mondavio.pu.it/', Gradara: 'https://www.gradara.org/home/', 'Fonte Avellana': 'https://fonteavellana.it/', tartufo: 'https://www.cittadeltartufo.com/le-citta-del-tartufo/acqualagna/', 'Braceria da Plinc': 'https://braceriaplinc.it/', 'Antico Furlo': 'https://anticofurlo.it/', 'Osteria Zanchetti': 'https://www.osteriazanchetti.it/', 'La collina delle Fate': 'https://www.collinadellefate.com/', 'Azienda Guerrieri': 'https://www.aziendaguerrieri.it/', 'Birrificio del Catria': 'https://www.birradelcatria.com/' };

function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [gallery, setGallery] = useState<GalleryKind | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentImages = gallery === 'house' ? houseImages : territoryImages;
  const galleryFolder = gallery === 'house' ? 'lacasa' : 'ilterritorio';

  const changeLanguage = (language: 'it' | 'en') => { void i18n.changeLanguage(language); localStorage.setItem('language', language); };
  const openGallery = (kind: GalleryKind, index: number) => { setGallery(kind); setActiveIndex(index); };
  const closeGallery = () => setGallery(null);
  const move = (step: number) => setActiveIndex((index) => (index + step + currentImages.length) % currentImages.length);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (!gallery) return; if (event.key === 'Escape') closeGallery(); if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); };
    window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown);
  }, [gallery, currentImages.length]);

  return <>
    <header className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 35, 32, .82), rgba(12, 35, 32, .18)), url("${rootImage('monte.jpg')}")` }}>
      <nav className="nav container"><a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">⌂</span><span>Casa di Pillo<small>Frontino · Marche</small></span></a><button className="menu-toggle" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button><div className={`nav-links ${menuOpen ? 'is-open' : ''}`}><a href="#casa" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a><a href="#territorio" onClick={() => setMenuOpen(false)}>{t('nav.territory')}</a><a href="#esperienze" onClick={() => setMenuOpen(false)}>{t('nav.activities')}</a><a href="#contatti" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a><div className="language"><button className={i18n.language === 'it' ? 'active' : ''} onClick={() => changeLanguage('it')}>IT</button><button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button></div></div></nav>
      <div className="hero-content container"><p className="eyebrow">{t('hero.eyebrow')}</p><h1>{t('hero.title')}</h1><p className="hero-text">{t('hero.text')}</p><a className="button button-gold" href="#casa">{t('hero.cta')} <span>↘</span></a></div><div className="scroll-note">01 <span></span> {t('nav.home')}</div>
    </header>

    <main>
      <section className="intro container" id="casa"><div className="section-heading"><p className="eyebrow">{t('home.label')}</p><h2>{t('home.title')}</h2></div><div className="copy-grid"><div>{(t('home.paragraphs', { returnObjects: true }) as string[]).slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div>{(t('home.paragraphs', { returnObjects: true }) as string[]).slice(2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a className="text-link" href={mapsUrl} target="_blank" rel="noreferrer">{t('home.map')} ↗</a></div></div></section>
      <GalleryStrip kind="house" images={houseImages} label={t('home.gallery')} onOpen={openGallery} />

      <section className="territory section-dark" id="territorio"><div className="container territory-grid"><div className="section-heading"><p className="eyebrow">{t('territory.label')}</p><h2>{t('territory.title')}</h2></div><div><p className="lead">{t('territory.text')}</p><a className="button button-outline" href="#esperienze">{t('hero.cta')} <span>↘</span></a></div></div></section>
      <GalleryStrip kind="territory" images={territoryImages} label={t('territory.gallery')} onOpen={openGallery} />

      <section className="experiences container" id="esperienze"><div className="section-heading"><p className="eyebrow">{t('activities.label')}</p><h2>{t('activities.title')}</h2></div><div className="experience-grid"><Experience title={t('activities.nature.title')} items={t('activities.nature.items', { returnObjects: true }) as string[]} /><Experience title={t('activities.sport.title')} items={t('activities.sport.items', { returnObjects: true }) as string[]} /><Experience title={t('activities.culture.title')} items={(t('activities.culture.items', { returnObjects: true }) as string[]).map((item) => item)} /><div className="food"><h3>{t('activities.food.title')}</h3><p>{t('activities.food.text')} <a href={links.tartufo} target="_blank" rel="noreferrer">{i18n.language === 'it' ? 'scopri il tartufo' : 'discover truffles'} ↗</a></p><div className="places">{(t('activities.food.places', { returnObjects: true }) as string[]).map((place) => <a key={place} href={links[place as keyof typeof links]} target="_blank" rel="noreferrer">{place} ↗</a>)}</div></div></div></section>
      <section className="arrival" id="arrivo"><div className="container arrival-inner"><div><p className="eyebrow">{t('arrival.label')}</p><h2>{t('arrival.title')}</h2></div><div><p>{t('arrival.text')}</p><a className="button button-gold" href={mapsUrl} target="_blank" rel="noreferrer">{t('arrival.cta')} ↗</a></div></div></section>
    </main>

    <footer id="contatti"><div className="container footer-grid"><div><a className="brand footer-brand" href="#home"><span className="brand-mark">⌂</span><span>Casa di Pillo<small>Frontino · Marche</small></span></a><p className="footer-note">Un luogo da abitare lentamente.</p></div><div><p className="eyebrow">{t('footer.contact')}</p><a href="mailto:pmanzini@hotmail.it">pmanzini@hotmail.it</a><a href="tel:3358194110">335 819 4110</a></div><div><p className="eyebrow">{t('footer.visit')}</p><a href="https://www.facebook.com/p/La-Casa-di-Pillo-a-Frontino-100042583646372/" target="_blank" rel="noreferrer">Facebook ↗</a></div></div><div className="container copyright">© {new Date().getFullYear()} B&B Casa di Pillo a Frontino. {t('footer.rights')}</div></footer>
    {gallery && <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery === 'house' ? t('home.gallery') : t('territory.gallery')} onClick={closeGallery}><button className="lightbox-close" aria-label={t('gallery.close')} onClick={closeGallery}>×</button><button className="lightbox-arrow left" aria-label={t('gallery.previous')} onClick={(event) => { event.stopPropagation(); move(-1); }}>‹</button><img src={image(galleryFolder, currentImages[activeIndex])} alt="Casa di Pillo" onClick={(event) => event.stopPropagation()} /><button className="lightbox-arrow right" aria-label={t('gallery.next')} onClick={(event) => { event.stopPropagation(); move(1); }}>›</button></div>}
  </>;
}

function GalleryStrip({ kind, images, label, onOpen }: { kind: GalleryKind; images: string[]; label: string; onOpen: (kind: GalleryKind, index: number) => void }) { return <div className="gallery-wrap" aria-label={label}><div className="gallery-track">{images.map((filename, index) => <button className="gallery-item" key={filename} onClick={() => onOpen(kind, index)} aria-label={`${label}: ${index + 1}`}><img src={image(kind === 'house' ? 'lacasa' : 'ilterritorio', filename)} alt="" loading="lazy" /></button>)}</div></div>; }
function Experience({ title, items }: { title: string; items: string[] }) { return <article className="experience"><span className="experience-number">{String(items.length).padStart(2, '0')}</span><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>; }

export default App;
