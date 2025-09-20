
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  console.log('Hero component rendering with language:', language);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('/lovable-uploads/f4f62037-747a-4ccd-9da4-7c1024cee181.png')`,
        backgroundPosition: '70% 30%'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/assets/logo.png" 
            alt="Hemavan Adventure Logo" 
            className="h-32 md:h-40 w-auto mb-4"
          />
        </div>
        <p className="mb-8 text-blue-100 font-oswald font-light leading-relaxed" style={{ fontSize: 'clamp(24px, 5vw, 50px)' }}>
          {t('hero.subtitle2')}
        </p>
        <div className="flex items-center justify-center text-lg text-blue-200 mb-12">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{t('hero.location')}</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('hero.bookAdventure')}
          </button>
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              {t('hero.aboutUs')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              {t('hero.services')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
