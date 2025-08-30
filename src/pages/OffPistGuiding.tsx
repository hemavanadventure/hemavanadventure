import { Mountain, Clock, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
const OffPistGuiding = () => {
  const {
    t
  } = useLanguage();
  const handleBookingEmail = () => {
    const subject = encodeURIComponent("Bokning - Offpist med privatguide");
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: Offpist med privatguide

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 text-white pt-32 bg-cover bg-no-repeat relative" style={{
      backgroundImage: `url('/lovable-uploads/6f874705-a0cd-4316-a57d-60fdf6451a6f.png')`,
      backgroundPosition: 'center 20%'
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('offpist.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t('offpist.subtitle')}</p>
            <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100" onClick={handleBookingEmail}>
              {t('offpist.bookToday')}
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">{t('offpist.heading')}</h2>
              <p className="text-lg text-slate-600 mb-3">
                {t('offpist.description')}
              </p>
              
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('topptur.tourDetails')}</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-slate-600 font-semibold">{t('topptur.time')}</span>
                  <span className="text-slate-700"> - {t('topptur.fullDay')}</span>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold">{t('topptur.groupSize')}</span>
                  <span className="text-slate-700"> - {t('services.groupSizeTiny')}</span>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold">{t('topptur.level')}</span>
                  <span className="text-slate-700"> - {t('services.advanced')}</span>
                </div>
                <div>
                  <span className="text-slate-600 font-semibold">{t('topptur.price')}</span>
                  <span className="text-slate-700"> - 6000 sek</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('offpist.readyForSkiing')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('offpist.contactForBooking')}</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={handleBookingEmail}>
            {t('offpist.sendMessage')}
          </Button>
        </div>
      </section>
    </div>;
};
export default OffPistGuiding;