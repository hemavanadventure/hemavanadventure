import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const SkiSchool = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.skiSchool')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Utveckla din åkning i offpist tillsammans med en erfaren instruktör
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
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
                Lär dig från de bästa
              </h2>
              <p className="text-lg text-slate-600 mb-6 text-left">
                Vår skidskola erbjuder omfattande undervisning för alla skidnivåer i den fantastiska miljön i Hemavan. Oavsett om du tar dina första steg på skidor eller vill förfina avancerade tekniker, ger våra certifierade instruktörer personlig vägledning i små grupper.<br /> 
                Vi erbjuder program för alla nivåer - från nybörjare som lär sig grundläggande tekniker till avancerade åkare som vill bemästra utmanande terräng. Våra instruktörer introducerar er gärna i grunderna för offpist-åkning och säkerhet.<br />
                Alla deltagare behöver behärska åkning i röd pist i varierande förhållanden. Egen skidutrustning krävs (finns att hyra vid skiduthyrningen vid Centrumliften eller Solkatten). Vi rekommenderar att ni bokar flera lektioner för bästa möjliga utveckling.
              </p>
              <p className="text-lg text-slate-600">Bokningen inkluderar en certifierad instruktör och personlig vägledning i små grupper. Skidpass tillkommer.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Turdetaljer</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold">Tid</span>
                  <span className="text-slate-700"> - 2-3 timmar</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Gruppstorlek</span>
                  <span className="text-slate-700"> - Max 8 personer</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Nivå</span>
                  <span className="text-slate-700"> - Alla nivåer</span>
                </div>
                <div>
                  <span className="text-blue-600 font-semibold">Pris</span>
                  <span className="text-slate-700"> - Från 1500 sek</span>
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
            Redo att utveckla din åkning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss så bokar vi en skidlektion åt er!
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {t('contact.sendMessage')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SkiSchool;