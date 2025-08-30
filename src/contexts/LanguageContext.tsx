import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Certified mountain guides for ski touring in Swedish Lapland',
    'hero.subtitle2': 'Swedish Mountain Leaders for adventures in the Scandinavian mountains',
    'hero.location': 'Hemavan, Sweden',
    'hero.bookAdventure': 'Book your adventure',
    'hero.aboutUs': 'About us',
    'hero.services': 'Services',

    // Navigation menu items
    'nav.toppturPrivate': 'Ski touring with private guide',
    'nav.offpistPrivate': 'Off-piste with private guide',
    'nav.toppturHelgeland': 'Ski touring in Helgeland',

    // About
    'about.title': 'Your specialists for every mountain adventure',
    'about.description': 'Experience the arctic wilderness with our experienced guides. We offer memorable adventures in one of Europe\'s most pristine mountain ranges.',
    'about.expertGuides': 'Swedish Mountain Leaders',
    'about.expertGuidesDesc': 'Our guides are certified by the Swedish Mountain Leader Organization and have many years of experience in the Hemavan area.',
    'about.localKnowledge': 'Local knowledge',
    'about.localKnowledgeDesc': 'We know Hemavan like our own pocket – from the best skiing and routes to weather patterns and hidden gems that only locals know about.',
    'about.safetyFirst': 'Safety first',
    'about.safetyFirstDesc': 'On all our tours, safety is in focus. With the right equipment, training and experience, we ensure that you can enjoy the mountains in a safe way. All our guides have completed SVELAV\'s avalanche training.',
    'about.discoverTitle': 'Discover Hemavan\'s wilderness',
    'about.discoverDesc1': 'Located in the heart of the Scandinavian mountain range, Hemavan offers a unique ski area. Here you\'ll find everything from gentle slopes suitable for beginners to challenging peaks for the more experienced – adventures for all levels.',
    'about.discoverDesc2': 'Our small group sizes give you personal attention and close contact with both the guide and the magnificent landscape all around.',
    'about.imagePlaceholder': '[Mountain landscape image placeholder]',
    'about.imageCaption': 'Stunning views of Hemavan\'s peaks',

    // Services
    'services.title': 'Our guide services',
    'services.description': 'Discover our range of guided experiences – adapted for different levels and adventure dreams.',
    'services.halfDay': 'Half-day tours',
    'services.halfDayDesc': 'Perfect introduction to ski touring with basic technique instruction and scenic routes.',
    'services.fullDay': 'Ski touring with private guide',
    'services.fullDayDesc': 'A full day tour with private guide',
    'services.multiDay': 'Off-piste guiding',
    'services.multiDayDesc': 'Guiding in Hemavan\'s off-piste where we utilize the lift system.',
    'services.skiSchool': 'Off-piste ski school',
    'services.skiSchoolDesc': 'We offer ski school for those who want to develop their technique in off-piste.',
    'services.duration': 'Duration:',
    'services.groupSize': 'Group Size:',
    'services.difficulty': 'Difficulty:',
    'services.price': 'Price:',
    'services.halfDayDuration': '4-5 hours',
    'services.fullDayDuration': '7 hours',
    'services.multiDayDuration': '2-5 days',
    'services.skiSchoolDuration': '3 hours',
    'services.groupSizeSmall': '1-6 people',
    'services.groupSizeTiny': '1-6 people',
    'services.groupSizeMedium': '1-6 people',
    'services.beginner': 'Adapted according to group',
    'services.intermediate': 'Adapted according to group',
    'services.advanced': 'Adapted according to group',
    'services.learnMore': 'Learn More',
    'services.bottomDesc': 'All tours include professional guiding and safety equipment.',
    'services.bookToday': 'Book your adventure today',
    'services.bookNow': 'Book now',
    'services.contactUs': 'Contact us',
    'services.price6000': '6000 sek',
    'services.price4000': '4000 sek',

    // Service descriptions
    'services.toppturPrivateTitle': 'Ski touring with private guide',
    'services.toppturPrivateDesc': 'A full day tour with private guide.',
    'services.offpistPrivateTitle': 'Off-piste with private guide',
    'services.offpistPrivateDesc': 'Lift-accessed off-piste skiing',
    'services.helgelandTitle': 'Ski touring in Helgeland',
    'services.helgelandDesc': 'Ski touring to the Helgeland coast',
    'services.serviceDuration': 'Full day',
    'services.threeHours': '3 hours',
    'services.oneToSixPeople': '1-6 people',

    // Contact
    'contact.title': 'Ready for your adventure?',
    'contact.description': 'Get in touch to book your adventure or ask any questions about our services.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.emailResponse': 'We respond within 24 hours',
    'contact.location': 'Location',
    'contact.locationDetails': 'Hemavan, Västerbotten',
    'contact.season': 'Season',
    'contact.seasonDates': 'December - May',
    'contact.peakSeason': 'Peak season: February - April',
    'contact.sendMessage': 'Send us a message',
    'contact.fullName': 'Full Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can we help you?',
    'contact.sendButton': 'Send Message',

    // Topptur Privatguide page
    'topptur.fullExperience': 'A complete mountain experience',
    'topptur.description1': 'Join us for an unforgettable ski tour in Hemavan\'s beautiful mountain world. We ascend with climbing skins under our skis and are then rewarded with one or more wonderful runs in untouched terrain.',
    'topptur.description2': 'Our certified guide selects the day\'s route based on weather, wind and snow conditions – but we also listen to the group\'s wishes. The ski tour is adapted to the participants\' skiing experience and no previous ski touring experience is required. Want to try for the first time? Then we\'ll gladly introduce you to the basics. What\'s important is that everyone in the group can ski safely on red runs under varying conditions.',
    'topptur.description3': 'For ski touring you need your own equipment (can be rented at Centrumliften or Solkatten). To get the most out of the experience, we recommend booking several consecutive days.',
    'topptur.description4': 'The booking includes a certified guide for a full day and complete avalanche equipment. Lift tickets are added if needed.',
    'topptur.tourDetails': 'Tour Details',
    'topptur.time': 'Time',
    'topptur.fullDay': 'Full day',
    'topptur.groupSize': 'Group Size',
    'topptur.level': 'Level',
    'topptur.price': 'Price',
    'topptur.readyForAdventure': 'Ready for an adventure?',
    'topptur.contactUs': 'Contact us and we\'ll book a guide for you!',

    // Off-pist Guiding page
    'offpist.title': 'Off-piste with private guide',
    'offpist.subtitle': 'Experience Hemavan\'s best off-piste – without walking a single vertical meter.',
    'offpist.bookToday': 'Book today',
    'offpist.heading': 'Off-piste guiding',
    'offpist.description1': 'Our experienced guide takes you to secret honey spots and ensures you get to ski in the best snow of the day. During the tour you also get tips and personal coaching to develop your freeriding.',
    'offpist.description2': 'Here you avoid climbing skins and heavy backpacks – the focus is on the skiing itself. When hunger creeps in, there are several restaurants in the lift system to choose from for a well-deserved lunch break.',
    'offpist.description3': 'The guiding is always adapted to the group\'s skiing ability and no previous off-piste experience is required. If you want to try for the first time, we\'re happy to help you with the basics. Own ski equipment is needed (can be rented at Centrumliften or Solkatten). Lift tickets are purchased separately.',
    'offpist.readyForSkiing': 'Ready for skiing?',
    'offpist.contactForBooking': 'Contact us to book your guide!',
    'offpist.sendMessage': 'Send message',
    'offpist.price': '6000 sek',

    // Ski School page
    'skiSchool.subtitle': 'Ski school for all levels – from first turns to freeriding in terrain',
    'skiSchool.privateLessons': 'Private lessons',
    'skiSchool.description1': 'Whether you\'re taking your first steps off-piste or want to sharpen advanced techniques, you get personal guidance from our experienced instructors. Teaching takes place in small groups so you get the most out of your time on snow.',
    'skiSchool.description2': 'We adapt the teaching to your level – everything from basic technique and safety on the slope to mastering steeper terrain and off-piste skiing. Our instructors also go through the basics of safety for skiing off-piste.',
    'skiSchool.description3': 'To participate you need to be comfortable skiing red runs under varying conditions. Own ski equipment is required, but can be rented at Centrumliften or Solkatten. The booking includes a ski instructor for three hours. Lift tickets are purchased separately.',
    'skiSchool.details': 'Details',
    'skiSchool.time': 'Time',
    'skiSchool.duration': '3 hours',
    'skiSchool.allLevels': 'All levels',
    'skiSchool.readyToDevelop': 'Ready to develop your skiing?',
    'skiSchool.contactUs': 'Contact us!',

    // Topptur Helgeland page
    'helgeland.title': 'Ski touring in Helgeland',
    'helgeland.subtitle': 'Experience Helgeland\'s beautiful ski tours with fantastic views over coast and mountains',
    'helgeland.bookToday': 'Book today',
    'helgeland.skiingWithOceanView': 'Skiing with ocean view',
    'helgeland.description1': 'Helgeland offers some of Norway\'s most spectacular ski tours, where mountains meet sea and views stretch for miles. Our experienced guides lead you safely to the best peaks and ensure you have a memorable experience.',
    'helgeland.description2': 'The ski tours are always adapted to the participants\' skiing ability, and no previous experience is required. Want to try for the first time? Then we\'ll gladly introduce you to the basics.',
    'helgeland.description3': 'Own ski equipment is needed (can be rented from local ski rental shops). To really experience the area\'s diversity, we recommend booking several consecutive days.',
    'helgeland.description4': 'The booking includes a certified guide for a full day and complete avalanche equipment. Transport and possible accommodation are additional.',
    'helgeland.askUs': 'Ask us',

    'footer.description': 'Your trusted partner for adventures in Hemavan.',
    'footer.quickContact': 'Quick Contact',
    'footer.services': 'Services',
    'footer.halfDayTours': 'Half-day tours',
    'footer.fullDayAdventures': 'Full-day adventures',
    'footer.multiDayExpeditions': 'Off-piste guiding',
    'footer.privateGuiding': 'Private guiding',
    'footer.copyright': '© 2025 Hemavan Adventure. All rights reserved.'
  },
  sv: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Certifierade fjälledare för toppturer i svenska Lappland',
    'hero.subtitle2': 'Fjälledare för äventyr i den Skandinaviska fjällkedjan',
    'hero.location': 'Hemavan, Sverige',
    'hero.bookAdventure': 'Boka ditt äventyr',
    'hero.aboutUs': 'Om oss',
    'hero.services': 'Tjänster',

    // Navigation menu items
    'nav.toppturPrivate': 'Topptur med privatguide',
    'nav.offpistPrivate': 'Offpist med privatguide',
    'nav.toppturHelgeland': 'Topptur i Helgeland',

    // About
    'about.title': 'Dina specialister på fjälläventyr',
    'about.description': 'Upplev den arktiska vildmarken tillsammans med våra erfarna guider. Vi erbjuder minnesvärda äventyr i en av Europas mest orörda fjällkedjor.',
    'about.expertGuides': 'Fjälledare',
    'about.expertGuidesDesc': 'Våra certifierade fjälledare har många års erfarenhet av området runt Hemavan och säkerställer din säkerhet samtidigt som de maximerar din äventyrsupplevelse.',
    'about.localKnowledge': 'Lokalkännedom',
    'about.localKnowledgeDesc': 'Vi känner Hemavan som vår egen ficka – från de bästa åken och rutterna till vädermönster och dolda pärlor som bara lokalborna känner till.',
    'about.safetyFirst': 'Säkerhet först',
    'about.safetyFirstDesc': 'På alla våra turer står säkerheten i fokus. Med rätt utrustning, utbildning och erfarenhet ser vi till att du kan njuta av fjället på ett tryggt sätt. Alla våra guider har genomgått SVELAVs lavinutbildningar.',
    'about.discoverTitle': 'Upptäck Hemavans vildmark',
    'about.discoverDesc1': 'Beläget mitt i den Skandinaviska fjällkedjan bjuder Hemavan på ett unikt skidområde. Här finns allt från snälla sluttningar som passar nybörjare till utmanande toppar för den mer erfarne – äventyr för alla nivåer.',
    'about.discoverDesc2': 'Våra små gruppstorlekar ger dig personlig uppmärksamhet och en nära kontakt med både guiden och det storslagna landskapet runt omkring.',
    'about.imagePlaceholder': '[Bergslandskap bildplatshållare]',
    'about.imageCaption': 'Fantastisk utsikt över Hemavans toppar',

    // Services
    'services.title': 'Våra guidetjänster',
    'services.description': 'Upptäck vårt utbud av guidade upplevelser – anpassade för olika nivåer och äventyrsdrömmar.',
    'services.halfDay': 'Halvdagsturer',
    'services.halfDayDesc': 'Perfekt introduktion till skidturer med grundläggande teknikinstruktion och natursköna rutter.',
    'services.fullDay': 'Topptur med privatguide',
    'services.fullDayDesc': 'En heldagstur med privat guide',
    'services.multiDay': 'Offpist guidning',
    'services.multiDayDesc': 'Guidning i Hemavans offpist där vi utnyttjar liftsystemet.',
    'services.skiSchool': 'Offpist skidskola',
    'services.skiSchoolDesc': 'Vi erbjuder skidskola till er som vill utveckla sin teknik inom offpist.',
    'services.duration': 'Varaktighet:',
    'services.groupSize': 'Gruppstorlek:',
    'services.difficulty': 'Svårighetsgrad:',
    'services.price': 'Pris:',
    'services.halfDayDuration': '4-5 timmar',
    'services.fullDayDuration': '7 timmar',
    'services.multiDayDuration': '2-5 dagar',
    'services.skiSchoolDuration': '3 timmar',
    'services.groupSizeSmall': '1-6 personer',
    'services.groupSizeTiny': '1-6 personer',
    'services.groupSizeMedium': '1-6 personer',
    'services.beginner': 'Anpassas enligt grupp',
    'services.intermediate': 'Anpassas enligt grupp',
    'services.advanced': 'Anpassas enligt grupp',
    'services.learnMore': 'Läs mer',
    'services.bottomDesc': 'Alla turer inkluderar professionell guidning och säkerhetsutrustning.',
    'services.bookToday': 'Boka ditt äventyr idag',
    'services.bookNow': 'Boka nu',
    'services.contactUs': 'Kontakta oss',
    'services.price6000': '6000 sek',
    'services.price4000': '4000 sek',

    // Service descriptions
    'services.toppturPrivateTitle': 'Topptur med privatguide',
    'services.toppturPrivateDesc': 'En heldagstur med privat guide.',
    'services.offpistPrivateTitle': 'Offpist med privatguide',
    'services.offpistPrivateDesc': 'Liftburen offpist-åkning',
    'services.helgelandTitle': 'Topptur i Helgeland',
    'services.helgelandDesc': 'Topptur till Helgelandskusten',
    'services.serviceDuration': 'Heldag',
    'services.threeHours': '3 timmar',
    'services.oneToSixPeople': '1-6 personer',

    // Contact
    'contact.title': 'Redo för ditt äventyr?',
    'contact.description': 'Kontakta oss för att boka ditt äventyr eller för att ställa frågor om våra tjänster.',
    'contact.phone': 'Telefon',
    'contact.phoneAvailable': 'Tillgänglig 8:00 - 18:00 (CET)',
    'contact.email': 'E-post',
    'contact.emailResponse': 'Vi svarar inom 24 timmar',
    'contact.location': 'Plats',
    'contact.locationDetails': 'Hemavan, Västerbotten',
    'contact.season': 'Säsong',
    'contact.seasonDates': 'December - Maj',
    'contact.peakSeason': 'Högsäsong: Februari - April',
    'contact.sendMessage': 'Skicka oss ett meddelande',
    'contact.fullName': 'Fullständigt Namn',
    'contact.namePlaceholder': 'Ditt namn',
    'contact.emailPlaceholder': 'din@epost.se',
    'contact.message': 'Meddelande',
    'contact.messagePlaceholder': 'Vad kan vi hjälpa dig med?',
    'contact.sendButton': 'Skicka',

    // Topptur Privatguide page
    'topptur.fullExperience': 'En fullständig fjällupplevelse',
    'topptur.description1': 'Följ med oss på en oförglömlig topptur i Hemavans vackra fjällvärld. Vi tar oss uppför med stighudar under skidorna och belönas sedan med ett eller flera härliga åk i orörd terräng.',
    'topptur.description2': 'Vår certifierade guide väljer dagens rutt utifrån väder, vind och snöförhållanden – men självklart lyssnar vi också på gruppens önskemål. Toppturen anpassas efter deltagarnas skidvana och ingen tidigare erfarenhet av toppturer krävs. Vill du prova för första gången? Då introducerar vi dig gärna till grunderna. Det viktiga är att alla i gruppen kan åka säkert i röd pist under varierande förhållanden.',
    'topptur.description3': 'För toppturer behöver du egen utrustning (kan hyras vid Centrumliften eller Solkatten). För att få ut det mesta av upplevelsen rekommenderar vi att du bokar flera dagar i följd.',
    'topptur.description4': 'I bokningen ingår en certifierad guide för en heldag samt komplett lavinutrustning. Liftkort tillkommer vid behov.',
    'topptur.tourDetails': 'Turdetaljer',
    'topptur.time': 'Tid',
    'topptur.fullDay': 'Heldag',
    'topptur.groupSize': 'Gruppstorlek',
    'topptur.level': 'Nivå',
    'topptur.price': 'Pris',
    'topptur.readyForAdventure': 'Redo för ett äventyr?',
    'topptur.contactUs': 'Kontakta oss så bokar vi en guide åt er!',

    // Off-pist Guiding page
    'offpist.title': 'Offpist med privatguide',
    'offpist.subtitle': 'Upplev Hemavans bästa offpist – utan att gå en enda höjdmeter.',
    'offpist.bookToday': 'Boka idag',
    'offpist.heading': 'Offpistguidning',
    'offpist.description1': 'Vår erfarna guide tar dig med till hemliga smultronställen och ser till att du får åka i den bästa snön för dagen. Under turen får du även tips och personlig coachning för att utveckla din friåkning.',
    'offpist.description2': 'Här slipper du stighudar och tunga ryggsäckar – fokus ligger på själva åkningen. När hungern smyger sig på finns flera restauranger i liftsystemet att välja mellan för en välförtjänt lunchpaus.',
    'offpist.description3': 'Guidningen anpassas alltid efter gruppens skidvana och ingen tidigare erfarenhet av offpist krävs. Vill du prova för första gången hjälper vi dig gärna in i grunderna. Egen skidutrustning behövs (kan hyras vid Centrumliften eller Solkatten). Liftkort köps separat.',
    'offpist.readyForSkiing': 'Redo för skidåkning?',
    'offpist.contactForBooking': 'Kontakta oss för att boka din guide!',
    'offpist.sendMessage': 'Skicka meddelande',
    'offpist.price': '6000 kr',

    // Ski School page
    'skiSchool.subtitle': 'Skidskola för alla nivåer – från första svängar till friåkning i terräng',
    'skiSchool.privateLessons': 'Privatlektioner',
    'skiSchool.description1': 'Oavsett om du tar dina första steg utanför pisten eller vill slipa på avancerade tekniker får du personlig vägledning av våra erfarna instruktörer. Undervisningen sker i små grupper för att du ska få ut så mycket som möjligt av tiden på snö.',
    'skiSchool.description2': 'Vi anpassar undervisningen efter din nivå – allt från grundläggande teknik och trygghet i backen till att bemästra brantare terräng och offpiståkning. Våra instruktörer går även igenom grunderna i säkerhet för åkning utanför pisten.',
    'skiSchool.description3': 'För att delta behöver du vara bekväm med att åka i röd pist under varierande förhållanden. Egen skidutrustning krävs, men går att hyra vid Centrumliften eller Solkatten. Bokningen inkluderar en skidinstruktör i tre timmar. Liftkort köps separat.',
    'skiSchool.details': 'Detaljer',
    'skiSchool.time': 'Tid',
    'skiSchool.duration': '3 timmar',
    'skiSchool.allLevels': 'Alla nivåer',
    'skiSchool.readyToDevelop': 'Redo att utveckla din åkning?',
    'skiSchool.contactUs': 'Kontakta oss!',

    // Topptur Helgeland page
    'helgeland.title': 'Topptur i Helgeland',
    'helgeland.subtitle': 'Upplev Helgelands vackra toppturer med fantastiska vyer över kust och fjäll',
    'helgeland.bookToday': 'Boka idag',
    'helgeland.skiingWithOceanView': 'Skidåkning med havsutsikt',
    'helgeland.description1': 'Helgeland bjuder på några av Norges mest spektakulära toppturer, där fjäll möter hav och vyerna sträcker sig mil efter mil. Våra erfarna guider leder dig säkert till de bästa topparna och ser till att du får en minnesvärd upplevelse.',
    'helgeland.description2': 'Toppturerna anpassas alltid efter deltagarnas skidvana, och ingen tidigare erfarenhet krävs. Vill du prova för första gången? Då introducerar vi dig gärna till grunderna.',
    'helgeland.description3': 'Egen skidutrustning behövs (kan hyras hos lokala skiduthyrningar). För att verkligen uppleva områdets mångfald rekommenderar vi att boka flera dagar i följd.',
    'helgeland.description4': 'I bokningen ingår en certifierad guide för en heldag samt komplett lavinutrustning. Transport och eventuell logi tillkommer.',
    'helgeland.askUs': 'Fråga oss',

    'footer.description': 'Din pålitliga partner för äventyr i Hemavan.',
    'footer.quickContact': 'Snabbkontakt',
    'footer.services': 'Tjänster',
    'footer.halfDayTours': 'Halvdagsturer',
    'footer.fullDayAdventures': 'Heldagsäventyr',
    'footer.multiDayExpeditions': 'Offpist guidning',
    'footer.privateGuiding': 'Privat guidning',
    'footer.copyright': '© 2024 Hemavan Adventure. Alla rättigheter förbehållna.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine language from URL
  const getLanguageFromPath = (pathname: string): Language => {
    if (pathname.startsWith('/sv')) return 'sv';
    if (pathname.startsWith('/en')) return 'en';
    return 'en'; // default to English
  };

  const [language, setLanguageState] = useState<Language>(() => 
    getLanguageFromPath(location.pathname)
  );

  // Update language when URL changes
  useEffect(() => {
    const newLanguage = getLanguageFromPath(location.pathname);
    if (newLanguage !== language) {
      setLanguageState(newLanguage);
    }
  }, [location.pathname]); // Remove language from dependency array

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath: string;

    // Remove existing language prefix
    const pathWithoutLang = currentPath.replace(/^\/(en|sv)/, '') || '/';
    
    // Add new language prefix
    if (pathWithoutLang === '/') {
      newPath = `/${lang}`;
    } else {
      newPath = `/${lang}${pathWithoutLang}`;
    }

    navigate(newPath, { replace: true });
  };

  const getLocalizedPath = (path: string): string => {
    if (path === '/') {
      return `/${language}`;
    }
    return `/${language}${path}`;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
