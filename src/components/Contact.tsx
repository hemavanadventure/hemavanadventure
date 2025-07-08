
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleBookingEmail = () => {
    const subject = encodeURIComponent("Bokning - Hemavan Adventure");
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka en aktivitet hos Hemavan Adventure.

Vänligen kontakta mig för mer information.

Tack!`);
    
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent("Meddelande från hemsidan - Hemavan Adventure");
    const body = encodeURIComponent(`Namn: ${name}
E-post: ${email}

Meddelande:
${message}`);
    
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.phone')}</h3>
                <p className="text-slate-300">+46 XXX XXX XXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.email')}</h3>
                <p className="text-slate-300">rasmus@hemavanadventure.se</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t('contact.location')}</h3>
                <p className="text-slate-300 whitespace-pre-line">{t('contact.locationDetails')}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.fullName')}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder={t('contact.namePlaceholder')} 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.email')}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder={t('contact.emailPlaceholder')} 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" 
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                {t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
