
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
      <Globe className="h-4 w-4 text-slate-600" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 hover:bg-slate-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('se')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'se'
            ? 'bg-blue-600 text-white'
            : 'text-slate-600 hover:bg-slate-100'
        }`}
      >
        SE
      </button>
    </div>
  );
};

export default LanguageToggle;
