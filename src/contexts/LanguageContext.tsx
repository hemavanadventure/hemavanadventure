
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
    'about.expertGuidesDesc': 'Our certified mountain leaders have years of experience in the Hemavan region, ensuring your safety and maximizing your adventure experience.',
    'about.localKnowledge': 'Local knowledge',
    'about.localKnowledgeDesc': 'Deep local knowledge of the Hemavan area\'s best routes, weather patterns, and hidden gems that only locals know about.',
    'about.safetyFirst': 'Safety first',
    'about.safetyFirstDesc': 'All our tours prioritize safety with proper equipment, avalanche training, and comprehensive risk management protocols.',
    'about.discoverTitle': 'Discover Hemavan\'s wilderness',
    'about.discoverDesc1': 'Located in the heart of Swedish Lapland, Hemavan offers some of Europe\'s most pristine ski touring terrain. From gentle alpine meadows perfect for beginners to challenging peaks for experienced mountaineers, we have adventures for every skill level.',
    'about.discoverDesc2': 'Our small group sizes ensure personalized attention and an intimate connection with the stunning arctic landscape that surrounds us.',
    'about.imagePlaceholder': '[Mountain landscape image placeholder]',
    'about.imageCaption': 'Stunning views of Hemavan\'s peaks',

    // Services
    'services.title': 'Our ski touring services',
    'services.description': 'Choose from our range of guided ski touring experiences, tailored to different skill levels and adventure preferences.',
    'services.halfDay': 'Half-Day Tours',
    'services.halfDayDesc': 'Perfect introduction to ski touring with basic technique instruction and scenic routes.',
    'services.fullDay': 'Full-Day Adventures',
    'services.fullDayDesc': 'Comprehensive ski touring experience with lunch in the mountains and advanced terrain.',
    'services.multiDay': 'Off Pist Guidning',
    'services.multiDayDesc': 'Expert off-piste guiding in pristine powder and untouched mountain terrain.',
    'services.skiSchool': 'Ski School',
    'services.skiSchoolDesc': 'Learn fundamental skiing and touring techniques with our certified instructors in a supportive environment.',
    'services.duration': 'Duration:',
    'services.groupSize': 'Group Size:',
    'services.difficulty': 'Difficulty:',
    'services.halfDayDuration': '4-5 hours',
    'services.fullDayDuration': '7-8 timmar',
    'services.multiDayDuration': '2-5 dagar',
    'services.skiSchoolDuration': '2-3 hours',
    'services.groupSizeSmall': '2-6 people',
    'services.groupSizeTiny': '2-4 people',
    'services.groupSizeMedium': '4-8 people',
    'services.beginner': 'Beginner to Intermediate',
    'services.intermediate': 'Intermediate to Advanced',
    'services.advanced': 'Advanced',
    'services.learnMore': 'Learn More',
    'services.bottomDesc': 'All tours include professional guiding, safety equipment, and basic avalanche safety instruction.',
    'services.bookToday': 'Book Your Adventure Today',

    // Contact
    'contact.title': 'Ready for your adventure?',
    'contact.description': 'Get in touch to book your ski touring experience or ask any questions about our services.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.emailResponse': 'We respond within 24 hours',
    'contact.location': 'Location',
    'contact.locationDetails': 'Hemavan, Västerbotten\nSwedish Lapland',
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

    'footer.description': 'Your trusted partner for ski touring adventures in the breathtaking wilderness of Swedish Lapland.',
    'footer.quickContact': 'Quick Contact',
    'footer.services': 'Services',
    'footer.halfDayTours': 'Half-Day Tours',
    'footer.fullDayAdventures': 'Full-Day Adventures',
    'footer.multiDayExpeditions': 'Off Pist Guidning',
    'footer.privateGuiding': 'Private Guiding',
    'footer.copyright': '© 2024 Hemavan Adventure. All rights reserved.'
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
    'about.description': 'Upplev vildmarken i svenska Lappland med våra certifierade fjälledare. Vi erbjuder oförglömliga äventyr i en av Europas mest spektakulära fjällkedjor.',
    'about.expertGuides': 'Fjälledare',
    'about.expertGuidesDesc': 'Våra certifierade fjälledare har många års erfarenhet av området runt Hemavan och säkerställer din säkerhet samtidigt som de maximerar din äventyrsupplevelse.',
    'about.localKnowledge': 'Lokalkännedom',
    'about.localKnowledgeDesc': 'Djup lokalkännedom om områdets bästa rutter, vädermönster och dolda pärlor som bara lokalbefolkningen känner till.',
    'about.safetyFirst': 'Säkerhet först',
    'about.safetyFirstDesc': 'Alla våra turer prioriterar säkerhet med rätt utrustning, lavinkunskap och omfattande riskhanteringsprotokoll.',
    'about.discoverTitle': 'Upptäck Hemavans vildmark',
    'about.discoverDesc1': 'Beläget i hjärtat av svenska Lappland erbjuder Hemavan några av Europas mest orörda skidturterrängområden. Från flacka och mjuka sluttningar perfekta för nybörjare till utmanande toppar för de mera erfarna, vi har äventyr för alla färdighetsnivåer.',
    'about.discoverDesc2': 'Våra små gruppstorlekar säkerställer personlig uppmärksamhet och en intim kontakt med det fantastiska arktiska landskapet som omger oss.',
    'about.imagePlaceholder': '[Bergslandskap bildplatshållare]',
    'about.imageCaption': 'Fantastisk utsikt över Hemavans toppar',

    // Services
    'services.title': 'Våra skidåkningstjänster',
    'services.description': 'Välj från vårt utbud av guidade skidåkningsupplevelser, skräddarsydda för olika färdighetsnivåer och äventyrspreferenser.',
    'services.halfDay': 'Halvdagsturer',
    'services.halfDayDesc': 'Perfekt introduktion till skidturer med grundläggande teknikinstruktion och natursköna rutter.',
    'services.fullDay': 'Heldagsäventyr',
    'services.fullDayDesc': 'Omfattande skidturupplevelse med lunch i bergen och avancerad terräng.',
    'services.multiDay': 'Off Pist Guidning',
    'services.multiDayDesc': 'Expert off-pist guidning i opulvrad snö och orörda fjällområden.',
    'services.skiSchool': 'Skidskola',
    'services.skiSchoolDesc': 'Lär dig grundläggande skid- och turtekniker med våra certifierade instruktörer i en stödjande miljö.',
    'services.duration': 'Varaktighet:',
    'services.groupSize': 'Gruppstorlek:',
    'services.difficulty': 'Svårighetsgrad:',
    'services.halfDayDuration': '4-5 timmar',
    'services.fullDayDuration': '7-8 timmar',
    'services.multiDayDuration': '2-5 dagar',
    'services.skiSchoolDuration': '2-3 timmar',
    'services.groupSizeSmall': '2-6 personer',
    'services.groupSizeTiny': '2-4 personer',
    'services.groupSizeMedium': '4-8 personer',
    'services.beginner': 'Anpassas enligt grupp',
    'services.intermediate': 'Anpassas enligt grupp',
    'services.advanced': 'Anpassas enligt grupp',
    'services.learnMore': 'Läs Mer',
    'services.bottomDesc': 'Alla turer inkluderar professionell guidning, säkerhetsutrustning och grundläggande lavinutbildning.',
    'services.bookToday': 'Boka Ditt Äventyr Idag',

    // Contact
    'contact.title': 'Redo för Ditt Äventyr?',
    'contact.description': 'Kontakta oss för att boka din skidturupplevelse eller ställa frågor om våra tjänster.',
    'contact.phone': 'Telefon',
    'contact.phoneAvailable': 'Tillgänglig 8:00 - 18:00 (CET)',
    'contact.email': 'E-post',
    'contact.emailResponse': 'Vi svarar inom 24 timmar',
    'contact.location': 'Plats',
    'contact.locationDetails': 'Hemavan, Västerbotten\nSvensk Lappland',
    'contact.season': 'Säsong',
    'contact.seasonDates': 'December - Maj',
    'contact.peakSeason': 'Högsäsong: Februari - April',
    'contact.sendMessage': 'Skicka oss ett meddelande',
    'contact.fullName': 'Fullständigt Namn',
    'contact.namePlaceholder': 'Ditt namn',
    'contact.emailPlaceholder': 'din@epost.se',
    'contact.message': 'Meddelande',
    'contact.messagePlaceholder': 'Berätta om din skidturexperiens och vad du letar efter...',
    'contact.sendButton': 'Skicka Meddelande',

    'footer.description': 'Din pålitliga partner för skidturäventyr i den häpnadsväckande vildmarken i svensk Lappland.',
    'footer.quickContact': 'Snabbkontakt',
    'footer.services': 'Tjänster',
    'footer.halfDayTours': 'Halvdagsturer',
    'footer.fullDayAdventures': 'Heldagsäventyr',
    'footer.multiDayExpeditions': 'Off-pist guidning',
    'footer.privateGuiding': 'Privat duidning',
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
