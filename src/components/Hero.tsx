
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/hemavanadventure/lovable-uploads/3d276c1b-70b8-4d02-9e51-afc3db0426f7.png" 
            alt="Hemavan Adventure Logo" 
            className="h-32 md:h-40 w-auto mb-4"
          />
        </div>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
          Fjälledare för äventyr i den Skandinaviska fjällkedjan
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
