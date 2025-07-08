import { Mountain, Clock, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
const FullDayAdventures = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.fullDay')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('services.fullDayDesc')}
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
                En fullständig fjällupplevelse
              </h2>
              <p className="text-lg text-slate-600 mb-6 text-left">Våra fjällguider tar med er på en oförglömlig topptur. Vi färdas uppför fjället  med stighudar under skidorna och belönas sedan med ett underbart åk utför.  
Guiden bestämmer vart turen går för dagen utgående från väder-, vind- och snöförhållanden, men naturligtvis tas gruppens önskemål också i beaktan. 
Toppturer kan anpassas utifrån deltagarnas skidvana och ingen tidigare erfarenhet av toppturs-åkning krävs. Våra guider introducerar er gärna i grunderna. Men alla behöver behärska åkning i röd pist i varierande förhållanden. Ni behöver ha egen skidutrustning för toppturer (finns att hyra vid skiduthyrningen vid Centrumliften eller Solkatten). Vi rekommenderar att ni bokar flera dagar i följd för bästa möjliga upplevelse</p>
              <p className="text-lg text-slate-600">Bokningen inkluderar en certifierad guide för en heldag och lavinkitt.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Tour Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Heldag</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">{t('services.groupSizeSmall')}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">{t('services.intermediate')}</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-slate-700">Inga förkunskapskraver</span>
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            {t('contact.sendMessage')}
          </Button>
        </div>
      </section>
    </div>;
};
export default FullDayAdventures;