
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
    'hero.learnMore': 'Learn more',

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
    'services.multiDay': 'Multi-Day Expeditions',
    'services.multiDayDesc': 'Immersive wilderness experience with hut-to-hut touring and backcountry camping.',
    'services.duration': 'Duration:',
    'services.groupSize': 'Group Size:',
    'services.difficulty': 'Difficulty:',
    'services.halfDayDuration': '4-5 hours',
    'services.fullDayDuration': '7-8 hours',
    'services.multiDayDuration': '2-5 days',
    'services.groupSizeSmall': '2-6 people',
    'services.groupSizeTiny': '2-4 people',
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
    /*'contact.phoneAvailable': 'Available 8:00 - 18:00 (CET)',*/
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

    // Footer
    'footer.description': 'Your trusted partner for ski touring adventures in the breathtaking wilderness of Swedish Lapland.',
    'footer.quickContact': 'Quick Contact',
    'footer.services': 'Services',
    'footer.halfDayTours': 'Half-Day Tours',
    'footer.fullDayAdventures': 'Full-Day Adventures',
    'footer.multiDayExpeditions': 'Multi-Day Expeditions',
    'footer.privateGuiding': 'Private Guiding',
    'footer.copyright': '© 2024 Hemavan Adventure. All rights reserved.'
  },
  se: {
    // Hero
    'hero.title': 'Hemavan Adventure',
    'hero.subtitle': 'Expertguider för Skidturer i Svensk Lappland',
    'hero.location': 'Hemavan, Sverige',
    'hero.bookAdventure': 'Boka Ditt Äventyr',
    'hero.learnMore': 'Läs Mer',

    // About
    'about.title': 'Dina Specialister på Bergsäventyr',
    'about.description': 'Upplev vildmarken i svensk Lappland med våra expertguider för skidturer. Vi erbjuder oförglömliga äventyr i en av Europas mest spektakulära bergsregioner.',
    'about.expertGuides': 'Expertguider',
    'about.expertGuidesDesc': 'Våra certifierade bergsguider har många års erfarenhet av Hemavan-området och säkerställer din säkerhet samtidigt som de maximerar din äventyrsupplevelse.',
    'about.localKnowledge': 'Lokalkännedom',
    'about.localKnowledgeDesc': 'Djup lokalkännedom om Hemavan-områdets bästa rutter, vädermönster och dolda pärlor som bara lokalbefolkningen känner till.',
    'about.safetyFirst': 'Säkerhet Först',
    'about.safetyFirstDesc': 'Alla våra turer prioriterar säkerhet med rätt utrustning, lavinutbildning och omfattande riskhanteringsprotokoll.',
    'about.discoverTitle': 'Upptäck Hemavans Vildmark',
    'about.discoverDesc1': 'Beläget i hjärtat av svensk Lappland erbjuder Hemavan några av Europas mest orörda skidturterrängområden. Från mjuka alpina ängar perfekta för nybörjare till utmanande toppar för erfarna bergsklättrare, vi har äventyr för alla färdighetsnivåer.',
    'about.discoverDesc2': 'Våra små gruppstorlekar säkerställer personlig uppmärksamhet och en intim kontakt med det fantastiska arktiska landskapet som omger oss.',
    'about.imagePlaceholder': '[Bergslandskap bildplatshållare]',
    'about.imageCaption': 'Fantastisk utsikt över Hemavans toppar',

    // Services
    'services.title': 'Våra Skidturtjänster',
    'services.description': 'Välj från vårt utbud av guidade skidturupplevelser, skräddarsydda för olika färdighetsnivåer och äventyrspreferenser.',
    'services.halfDay': 'Halvdagsturer',
    'services.halfDayDesc': 'Perfekt introduktion till skidturer med grundläggande teknikinstruktion och natursköna rutter.',
    'services.fullDay': 'Heldagsäventyr',
    'services.fullDayDesc': 'Omfattande skidturupplevelse med lunch i bergen och avancerad terräng.',
    'services.multiDay': 'Flerdagsexpeditioner',
    'services.multiDayDesc': 'Fördjupande vildmarksupplevelse med stug-till-stug-turer och camping i det vilda.',
    'services.duration': 'Varaktighet:',
    'services.groupSize': 'Gruppstorlek:',
    'services.difficulty': 'Svårighetsgrad:',
    'services.halfDayDuration': '4-5 timmar',
    'services.fullDayDuration': '7-8 timmar',
    'services.multiDayDuration': '2-5 dagar',
    'services.groupSizeSmall': '2-6 personer',
    'services.groupSizeTiny': '2-4 personer',
    'services.beginner': 'Nybörjare till Medel',
    'services.intermediate': 'Medel till Avancerad',
    'services.advanced': 'Avancerad',
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
    'contact.messagePlaceholder': 'Berätta om din skidturexperens och vad du letar efter...',
    'contact.sendButton': 'Skicka Meddelande',

    // Footer
    'footer.description': 'Din pålitliga partner för skidturäventyr i den häpnadsväckande vildmarken i svensk Lappland.',
    'footer.quickContact': 'Snabbkontakt',
    'footer.services': 'Tjänster',
    'footer.halfDayTours': 'Halvdagsturer',
    'footer.fullDayAdventures': 'Heldagsäventyr',
    'footer.multiDayExpeditions': 'Flerdagsexpeditioner',
    'footer.privateGuiding': 'Privat Guidning',
    'footer.copyright': '© 2024 Hemavan Adventure. Alla rättigheter förbehållna.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
