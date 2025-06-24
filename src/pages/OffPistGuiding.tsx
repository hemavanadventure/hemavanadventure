import { Mountain, Clock, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const OffPistGuiding = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('services.multiDay')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('services.multiDayDesc')}
            </p>
            <Button size="lg" className="bg-white text-slate-800 hover:bg-gray-100">
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
                Expert Off-Piste Guidance
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Experience the ultimate freedom of off-piste skiing with our expert guides. We'll take you to untouched powder fields and pristine mountain terrain that few ever see.
              </p>
              <p className="text-lg text-slate-600">
                Perfect for advanced skiers looking for that next-level adventure in Swedish Lapland's backcountry.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Turdetaljer</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-slate-700">{t('services.fullDayDuration')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-slate-700">{t('services.groupSizeTiny')}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-slate-700">{t('services.advanced')}</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-slate-600 mr-3" />
                  <span className="text-slate-700">Orörd snö</span>
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
            Redo för skidåkning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Häng med på grym skidåkning i hjärtat av svenska Lappland!
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            {t('contact.sendMessage')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OffPistGuiding;
