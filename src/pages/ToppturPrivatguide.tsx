import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const ToppturPrivatguide = () => {
  const { t } = useLanguage();
  
  const handleBookingEmail = (serviceName: string) => {
    const subject = encodeURIComponent(`Bokning - ${serviceName}`);
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: ${serviceName}

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="py-20 text-white pt-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/lovable-uploads/13d24699-ee62-4c4f-a59d-519dd77525cc.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.fullDay')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('services.fullDayDesc')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => handleBookingEmail('Topptur med privatguide')}
            >
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
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                En fullständig fjällupplevelse
              </h2>
              <p className="text-lg text-slate-600 mb-6 text-left">
                Vi tar med er på en oförglömlig topptur. Vi färdas uppför fjället med stighudar under skidorna och belönas sedan med ett eller flera underbara åk utför.<br /> 
                Guiden bestämmer vart turen går för dagen utgående från väder-, vind- och snöförhållanden, men naturligtvis tas gruppens önskemål också i beaktan.<br />
                Toppturer kan anpassas utifrån deltagarnas skidvana och ingen tidigare erfarenhet av toppturs-åkning krävs. Vi introducerar er gärna i grunderna. Men alla behöver behärska åkning i röd pist i varierande förhållanden. <br />
                Ni behöver ha egen skidutrustning för toppturer (finns att hyra vid skiduthyrningen vid Centrumliften eller Solkatten). Vi rekommenderar att ni bokar flera dagar i följd för bästa möjliga upplevelse.
              </p>
              <p className="text-lg text-slate-600">Bokningen inkluderar en certifierad guide för en heldag och lavinkitt. Eventuellt liftkort tillkommer.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Turdetaljer</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold">Tid</span>
                  <span className="text-slate-700"> - Heldag</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Gruppstorlek</span>
                  <span className="text-slate-700"> - {t('services.groupSizeSmall')}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Nivå</span>
                  <span className="text-slate-700"> - {t('services.intermediate')}</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Pris</span>
                  <span className="text-slate-700"> - 6000 kr</span>
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
            Redo för ett äventyr?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss så bokar vi en guide åt er!
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => handleBookingEmail('Topptur med privatguide')}
          >
            {t('contact.sendMessage')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ToppturPrivatguide;