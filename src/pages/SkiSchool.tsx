import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
const SkiSchool = () => {
  const {
    t
  } = useLanguage();
  const handleBookingEmail = (serviceName: string) => {
    const subject = encodeURIComponent(`Bokning - ${serviceName}`);
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: ${serviceName}

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 text-white pt-32 bg-cover bg-no-repeat relative" style={{
      backgroundImage: `url('/lovable-uploads/8a9b95f6-b9ef-4414-84e9-e84c9e1f1507.png')`,
      backgroundPosition: 'center 20%'
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.skiSchool')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t('skiSchool.subtitle')}</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => handleBookingEmail('Skidskola i offpist')}>
              {t('services.bookToday')}
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{t('skiSchool.privateLessons')}</h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-600 text-left">
                  {t('skiSchool.description1')}
                </p>
                <p className="text-lg text-slate-600 text-left">
                  {t('skiSchool.description2')}
                </p>
                <p className="text-lg text-slate-600 text-left">
                  {t('skiSchool.description3')}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('skiSchool.details')}</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold">{t('skiSchool.time')}</span>
                  <span className="text-slate-700"> - {t('skiSchool.duration')}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">{t('topptur.groupSize')}</span>
                  <span className="text-slate-700"> - 1-6 personer</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">{t('topptur.level')}</span>
                  <span className="text-slate-700"> - {t('skiSchool.allLevels')}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">{t('topptur.price')}</span>
                  <span className="text-slate-700"> - {t('services.price4000')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('skiSchool.readyToDevelop')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('skiSchool.contactUs')}</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => handleBookingEmail('Skidskola i offpist')}>
            {t('contact.sendMessage')}
          </Button>
        </div>
      </section>
    </div>;
};
export default SkiSchool;