
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/logo.png" 
                alt="Hemavan Adventure Logo" 
                className="h-14 w-auto mr-2"
              />
              <span className="text-xl font-bold text-white">{t('hero.title')}</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577211217055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/hemavanadventure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+46737001920</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>rasmus@hemavanadventure.se</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
