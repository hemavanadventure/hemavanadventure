
import { Users, Mountain, GraduationCap, Compass } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useLanguage();

  const handleBookingEmail = (serviceName: string) => {
    const subject = encodeURIComponent(`Bokning - ${serviceName}`);
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: ${serviceName}

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };

  const services = [
    {
      title: 'Topptur med privatguide',
      description: 'En heldagstur med privat guide.',
      duration: 'Heldag',
      groupSize: '1-6 personer', 
      price: '6000sek',
      icon: Mountain,
      link: '/topptur-privatguide'
    },
    {
      title: 'Offpist med privatguide',
      description: 'Liftburen offpist-åkning',
      duration: 'Heldag',
      groupSize: '1-6 personer',
      price: '6000sek',
      icon: Users,
      link: '/off-pist-guiding'
    },
    {
      title: t('services.skiSchool'),
      description: t('services.skiSchoolDesc'),
      duration: '3 timmar',
      groupSize: '1-6 personer',
      price: '4000sek',
      icon: GraduationCap,
      link: '/offpist-skidskola'
    },
    {
      title: 'Topptur i Helgeland',
      description: 'Topptur till Helgelandskusten',
      duration: 'Heldag',
      groupSize: '1-6 personer',
      price: 'Kontakta oss',
      icon: Compass,
      link: '/topptur-helgeland'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t('services.duration')}</span>
                  <span className="font-semibold text-slate-700">{service.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t('services.groupSize')}</span>
                  <span className="font-semibold text-slate-700">{service.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t('services.price')}</span>
                  <span className="font-semibold text-slate-700">{service.price}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link to={service.link}>
                  <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 py-3 rounded-lg font-semibold transition-colors duration-300">
                    {t('services.learnMore')}
                  </button>
                </Link>
                
                <button 
                  onClick={() => handleBookingEmail(service.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Boka nu
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            {t('services.bottomDesc')}
          </p>
          <button 
            onClick={() => handleBookingEmail('Allmän förfrågan')}
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            {t('services.bookToday')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
