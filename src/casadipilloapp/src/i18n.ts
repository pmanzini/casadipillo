import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      nav: { home: 'La casa', territory: 'Il territorio', activities: 'Esperienze', contact: 'Contatti' },
      hero: { eyebrow: 'Frontino · Marche', title: 'Benvenuti alla Casa di Pillo', text: 'Un rifugio autentico tra colline, boschi e montagne.', cta: 'Scopri la casa' },
      home: {
        label: 'La casa', title: 'Spazio, silenzio e materiali autentici',
        paragraphs: [
          'La Casa di Pillo si trova a circa 3 km dalla strada provinciale 257 Apecchiese, raggiungibile con strada privata ad uso esclusivo, il che garantisce una completa tranquillità e riservatezza. La casa è completamente ristrutturata con materiali originali (pietre, tavelle in cotto, legno), posizionata sulla sommità di una collinetta e recintata con un giardino di oltre un ettaro, dove sono presenti numerose querce secolari e piante da frutto.',
          'Si sviluppa su 2 piani, con 2 grandi terrazze al piano superiore da cui si possono ammirare albe e tramonti sulle colline e sulle montagne ed un meraviglioso loggiato esposto ad est.',
          'Al piano terra è presente un grande salone, con camino utilizzabile in inverno, un bagno con doccia, una lavanderia con lavatrice e 2 camere di cui una matrimoniale ed una con 2 letti singoli.',
          'Al primo piano si trova la cucina completamente attrezzata (piano cottura a gas, forno elettrico e lavastoviglie, robot da cucina) e con stufa economica utilizzabile nei mesi freddi per scaldarsi e cucinare; è presente anche uno studio e una ulteriore camera matrimoniale.'
        ],
        map: 'Dove si trova La Casa di Pillo', gallery: 'Galleria della casa'
      },
      territory: {
        label: 'Il territorio', title: 'Natura, colline e montagne',
        text: 'La Casa di Pillo si trova nell’entroterra marchigiano, a circa 400 msl, immersa in un ambiente naturale perfettamente curato e conservato, nel cuore degli Appennini. È completamente isolata e in una posizione privilegiata per giornate tranquille, ma vicina a paesi come Acqualagna, Cagli e Fossombrone e a servizi come superstrada, supermercati, farmacie e cinema.', gallery: 'Galleria del territorio'
      },
      activities: {
        label: 'Esperienze', title: 'Idee per vivere il territorio',
        nature: { title: 'Natura e paesaggio', items: ['Gola del Furlo: area naturale protetta con sentieri escursionistici e panorami mozzafiato.', 'Parco Pubblico La Golena: passeggiate rilassanti immersi nella natura.', 'Monti Catria, Nerone e Petrano: trekking e tranquillità per chi ama la natura e il relax.', 'Grotte di Frasassi.'] },
        sport: { title: 'Sport', items: ['Escursioni in mountain bike sui monti Nerone, Catria e Petrano.', 'Arrampicata su tratti attrezzati delle coste rocciose dei monti.', 'Illumia Padel Arena: centro sportivo moderno per il padel.', 'Canoa e kayak lungo la gola del Furlo.'] },
        culture: { title: 'Cultura', items: ['Urbino: città del Rinascimento e patrimonio UNESCO dal 1998.', 'Mondavio: borgo storico tra i più belli d’Italia.', 'Gradara: borgo e castello ricchi di storia.', 'Monastero di Fonte Avellana: eremo millenario ai piedi del monte Catria.', 'Antiquarium Pitinum Mergens: museo archeologico.', 'Museo del Tartufo: esperienza dedicata alla tradizione del tartufo.'] },
        food: { title: 'Enogastronomia', text: 'Acqualagna è famosa per il tartufo. Tra i locali consigliati:', places: ['Braceria da Plinc', 'Antico Furlo', 'Osteria Zanchetti', 'La collina delle Fate', 'Azienda Guerrieri', 'Birrificio del Catria'] }
      },
      arrival: { label: 'Come arrivare', title: 'La strada verso casa', text: 'È facilmente raggiungibile dalla strada provinciale 257 Apecchiese, che collega le Marche con la Toscana e l’Umbria. A poca distanza da Acqualagna e dalla superstrada SS3 che collega Fano e l’autostrada A14 con l’entroterra.', cta: 'Apri in Google Maps' },
      footer: { contact: 'Contatti', visit: 'Seguici su Facebook', rights: 'Tutti i diritti riservati.', email: 'Scrivici', phone: 'Chiamaci' },
      gallery: { open: 'Apri immagine', close: 'Chiudi galleria', previous: 'Immagine precedente', next: 'Immagine successiva' }
    }
  },
  en: {
    translation: {
      nav: { home: 'The house', territory: 'The area', activities: 'Experiences', contact: 'Contact' },
      hero: { eyebrow: 'Frontino · Marche', title: 'Welcome to Casa di Pillo', text: 'An authentic retreat among hills, woods and mountains.', cta: 'Explore the house' },
      home: { label: 'The house', title: 'Space, quiet and authentic materials', paragraphs: ['Casa di Pillo is about 3 km from provincial road 257 Apecchiese, reached by a private road reserved for guests, guaranteeing complete peace and privacy. The house has been fully renovated with original materials (stone, terracotta tiles and wood), sits on top of a small hill and is surrounded by more than one hectare of garden with centuries-old oaks and fruit trees.', 'It has two floors, with two large upstairs terraces overlooking sunrises and sunsets across the hills and mountains, plus a wonderful east-facing loggia.', 'The ground floor has a large living room with a fireplace for winter use, a bathroom with shower, a laundry room with washing machine and two bedrooms: one double and one twin.', 'Upstairs there is a fully equipped kitchen (gas hob, electric oven, dishwasher and food processor) with a traditional stove for heating and cooking in the colder months, a study and another double bedroom.'], map: 'Find Casa di Pillo', gallery: 'House gallery' },
      territory: { label: 'The area', title: 'Nature, hills and mountains', text: 'Casa di Pillo lies in the Marche hinterland, around 400 metres above sea level, immersed in a carefully preserved natural setting in the Apennines. It is secluded and perfectly placed for peaceful days, while still close to towns such as Acqualagna, Cagli and Fossombrone and to useful services including the main road, supermarkets, pharmacies and cinemas.', gallery: 'Landscape gallery' },
      activities: { label: 'Experiences', title: 'Ideas for exploring the area', nature: { title: 'Nature and landscape', items: ['Furlo Gorge: a protected natural area with hiking trails and breathtaking views.', 'La Golena Public Park: a perfect place for peaceful walks in nature.', 'Mounts Catria, Nerone and Petrano: trekking and quiet for nature lovers.', 'Frasassi Caves.'] }, sport: { title: 'Sport', items: ['Mountain bike rides on Mounts Nerone, Catria and Petrano.', 'Climbing on equipped sections of the mountain rock faces.', 'Illumia Padel Arena: a modern padel centre.', 'Canoeing and kayaking along Furlo Gorge.'] }, culture: { title: 'Culture', items: ['Urbino: Renaissance city and UNESCO World Heritage Site since 1998.', 'Mondavio: one of Italy’s most beautiful historic villages.', 'Gradara: a village and castle full of history.', 'Fonte Avellana Monastery: a thousand-year-old hermitage at the foot of Mount Catria.', 'Antiquarium Pitinum Mergens: archaeological museum.', 'Truffle Museum: an experience dedicated to the local truffle tradition.'] }, food: { title: 'Food and wine', text: 'Acqualagna is famous for truffles. Recommended places include:', places: ['Braceria da Plinc', 'Antico Furlo', 'Osteria Zanchetti', 'La collina delle Fate', 'Azienda Guerrieri', 'Birrificio del Catria'] } },
      arrival: { label: 'Getting here', title: 'The road home', text: 'The house is easy to reach from provincial road 257 Apecchiese, connecting the Marche with Tuscany and Umbria. It is close to Acqualagna and the SS3 highway linking Fano and the A14 motorway with the hinterland.', cta: 'Open in Google Maps' },
      footer: { contact: 'Contact', visit: 'Follow us on Facebook', rights: 'All rights reserved.', email: 'Email us', phone: 'Call us' },
      gallery: { open: 'Open image', close: 'Close gallery', previous: 'Previous image', next: 'Next image' }
    }
  }
};

void i18n.use(initReactI18next).init({ resources, lng: localStorage.getItem('language') ?? 'it', fallbackLng: 'it', interpolation: { escapeValue: false } });
export default i18n;
