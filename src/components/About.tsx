
import { Award, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
              <img src="/hemavanadventure/assets/fjallguide-logo.png" alt="Svenska Fjälledarorganisationen" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('about.expertGuides')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.expertGuidesDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('about.localKnowledge')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.localKnowledgeDesc')}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{t('about.safetyFirst')}</h3>
            <p className="text-slate-600 leading-relaxed">
              {t('about.safetyFirstDesc')}
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                {t('about.discoverTitle')}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('about.discoverDesc1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('about.discoverDesc2')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl h-64 flex items-center justify-center">
              <p className="text-white text-center px-6">
                {t('about.imagePlaceholder')}
                <br />
                <span className="text-sm text-blue-200">{t('about.imageCaption')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
