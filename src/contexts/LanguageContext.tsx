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
    'hero.subtitle': 'Ski touring and alanche courses in Swedish Lapland',
    'hero.location': 'Hemavan, Sweden',
    'hero.bookAdventure': 'Book your adventure',
    'hero.aboutUs': 'About us',
    'hero.services': 'Services',

    // About
    'about.title': 'Your specialists for every mountain adventure',
    'about.description': 'Experience the pristine wilderness of Swedish Lapland with our expert ski touring guides. We offer unforgettable adventures in one of Europe\'s most spectacular mountain regions.',
    'about.expertGuides': 'Certified guides',
    'about.expertGuidesDesc': 'Our certified mountain leaders have years of experience in the Hemavan region, ensuring your safety and maximizing your adventure.',
    'about.localKnowledge': 'Local knowledge',
    'about.localKnowledgeDesc': 'Deep local knowledge of the Hemavan area\'s best routes, weather patterns, and hidden gems that only locals know about.',
    'about.safetyFirst': 'Safety first',
    'about.safetyFirstDesc': 'All our tours prioritize safety with proper equipment and training.',
    'about.discoverTitle': 'Discover Hemavan\'s wilderness',
    'about.discoverDesc1': 'Located in the heart of Swedish Lapland, Hemavan offers some of Europe\'s most pristine ski touring terrain. From gentle slopes perfect for beginners to challenging peaks for experienced mountaineers, we have adventures for every skill level.',
    'about.discoverDesc2': 'Our small group sizes ensure personalized attention and an intimate connection with the stunning arctic landscape that surrounds us.',
    'about.imagePlaceholder': '[Mountain landscape image placeholder]',
    'about.imageCaption': 'Stunning views of Hemavan\'s peaks',

    // Services
    'services.title': 'Our ski touring services',
    'services.description': 'Choose from our range of guided ski touring experiences, tailored to different skill levels and adventure preferences.',
    'services.halfDay': 'Half-Day Tours',
    'services.halfDayDesc': 'Perfect introduction to ski touring with basic technique instruction and scenic routes.',
    'services.fullDay': 'Private guide ski touring',
    'services.fullDayDesc': 'Full day of ski touring with a certified guide.',
    'services.multiDay': 'Off-piste skiing',
    'services.multiDayDesc': 'Off-piste skiing using the lift system of Hemavan.',
    'services.skiSchool': 'Off-piste ski school',
    'services.skiSchoolDesc': 'We offer courses for people who want to improve their off-piste skiing.',
    'services.duration': 'Duration:',
    'services.groupSize': 'Group Size:',
    'services.difficulty': 'Difficulty:',
    'services.price': 'Price:',
    'services.halfDayDuration': '4-5 hours',
    'services.fullDayDuration': '7 timmar',
    'services.multiDayDuration': '2-5 dagar',
    'services.skiSchoolDuration': '3 hours',
    'services.groupSizeSmall': '1-6 people',
    'services.groupSizeTiny': '2-4 people',
    'services.groupSizeMedium': '4-8 people',
    'services.beginner': 'According to group',
    'services.intermediate': 'According to group',
    'services.advanced': 'According to group',
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

    'footer.description': 'Your trusted partner for ski touring adventures in Hemavan.',
    'footer.quickContact': 'Quick Contact',
    'footer.services': 'Services',
    'footer.halfDayTours': 'Half-Day Tours',
    'footer.fullDayAdventures': 'Full-Day Adventures',
    'footer.multiDayExpeditions': 'Off Pist Guidning',
    'footer.privateGuiding': 'Private Guiding',
    'footer.copyright': '© 2025 Hemavan Adventure. All rights reserved.'
  },
  se: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Certifierade fjälledare för toppturer i svenska Lappland',
    'hero.location': 'Hemavan, Sverige',
    'hero.bookAdventure': 'Boka ditt äventyr',
    'hero.aboutUs': 'Om oss',
    'hero.services': 'Tjänster',

    // About
    'about.title': 'Dina specialister på fjälläventyr',
    'about.description': 'Upplev den arktiska vildmarken med våra erfarna guider. Vi erbjuder oförglömliga äventyr i en av Europas mest spektakulära fjällkedjor.',
    'about.expertGuides': 'Fjälledare',
    'about.expertGuidesDesc': 'Våra certifierade fjälledare har många års erfarenhet av området runt Hemavan och säkerställer din säkerhet samtidigt som de maximerar din äventyrsupplevelse.',
    'about.localKnowledge': 'Lokalkännedom',
    'about.localKnowledgeDesc': 'Djup lokalkännedom om områdets bästa rutter, vädermönster och dolda pärlor som bara lokalbefolkningen känner till.',
    'about.safetyFirst': 'Säkerhet först',
    'about.safetyFirstDesc': 'Alla våra turer prioriterar säkerhet med rätt utrustning och utbildning.',
    'about.discoverTitle': 'Upptäck Hemavans vildmark',
    'about.discoverDesc1': 'Beläget i hjärtat av den Skandinaviska fjällkedjan erbjuder Hemavan några av Europas mest orörda topptursområden. Från snälla sluttningar perfekta för nybörjare till utmanande toppar för de mera erfarna, vi har äventyr för alla färdighetsnivåer.',
    'about.discoverDesc2': 'Våra små gruppstorlekar säkerställer personlig uppmärksamhet och en intim kontakt med det fantastiska arktiska landskapet som omger oss.',
    'about.imagePlaceholder': '[Bergslandskap bildplatshållare]',
    'about.imageCaption': 'Fantastisk utsikt över Hemavans toppar',

    // Services
    'services.title': 'Våra guidetjänster',
    'services.description': 'Välj från vårt utbud av guidade upplevelser, skräddarsydda för olika färdighetsnivåer och äventyrspreferenser.',
    'services.halfDay': 'Halvdagsturer',
    'services.halfDayDesc': 'Perfekt introduktion till skidturer med grundläggande teknikinstruktion och natursköna rutter.',
    'services.fullDay': 'Topptur med privatguide',
    'services.fullDayDesc': 'En heldagstur med privat guide.',
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
