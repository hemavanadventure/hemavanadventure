import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'se';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Certified mountain guides for ski touring in Swedish Lapland',
    'hero.subtitle2': 'Swedish Mountain Leaders for adventures in the Scandinavian mountain range',
    'hero.location': 'Hemavan, Sweden',
    'hero.bookAdventure': 'Book your adventure',
    'hero.aboutUs': 'About us',
    'hero.services': 'Services',

    // About
    'about.title': 'Your specialists for every mountain adventure',
    'about.description': 'Experience the arctic wilderness with our experienced guides. We offer memorable adventures in one of Europe\'s most pristine mountain ranges.',
    'about.expertGuides': 'Swedish Mountain Leaders',
    'about.expertGuidesDesc': 'Our guides are certified by the Swedish Mountain Leader Organization and have many years of experience in the Hemavan area.',
    'about.localKnowledge': 'Local knowledge',
    'about.localKnowledgeDesc': 'We know Hemavan like our own pocket – from the best skiing and routes to weather patterns and hidden gems that only locals know about.',
    'about.safetyFirst': 'Safety first',
    'about.safetyFirstDesc': 'On all our tours, safety is in focus. With the right equipment, training and experience, we ensure that you can enjoy the mountains in a safe way. All our guides have completed Sweden\'s avalanche training.',
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
    'contact.messagePlaceholder': 'Tell us about your ski touring experience and what you\'re looking for...',
    'contact.sendButton': 'Send Message',

    'footer.description': 'Your trusted partner for adventures in Hemavan.',
    'footer.quickContact': 'Quick Contact',
    'footer.services': 'Services',
    'footer.halfDayTours': 'Half-day tours',
    'footer.fullDayAdventures': 'Full-day adventures',
    'footer.multiDayExpeditions': 'Off-piste guiding',
    'footer.privateGuiding': 'Private guiding',
    'footer.copyright': '© 2025 Hemavan Adventure. All rights reserved.'
  },
  se: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Certifierade fjälledare för toppturer i svenska Lappland',
    'hero.subtitle2': 'Fjälledare för äventyr i den Skandinaviska fjällkedjan',
    'hero.location': 'Hemavan, Sverige',
    'hero.bookAdventure': 'Boka ditt äventyr',
    'hero.aboutUs': 'Om oss',
    'hero.services': 'Tjänster',

    // About
    'about.title': 'Dina specialister på fjälläventyr',
    'about.description': 'Upplev den arktiska vildmarken tillsammans med våra erfarna guider. Vi erbjuder minnesvärda äventyr i en av Europas mest orörda fjällkedjor.',
    'about.expertGuides': 'Fjälledare',
    'about.expertGuidesDesc': 'Våra certifierade fjälledare har många års erfarenhet av området runt Hemavan och säkerställer din säkerhet samtidigt som de maximerar din äventyrsupplevelse.',
    'about.localKnowledge': 'Lokalkännedom',
    'about.localKnowledgeDesc': 'Vi känner Hemavan som vår egen ficka – från de bästa åken och rutterna till vädermönster och dolda pärlor som bara lokalborna känner till.',
    'about.safetyFirst': 'Säkerhet först',
    'about.safetyFirstDesc': 'På alla våra turer står säkerheten i fokus. Med rätt utrustning, utbildning och erfarenhet ser vi till att du kan njuta av fjället på ett tryggt sätt. Alla våra guider har genomgått Sveriges Lavinutbildningar.',
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
  const [language, setLanguage] = useState<Language>('se');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
