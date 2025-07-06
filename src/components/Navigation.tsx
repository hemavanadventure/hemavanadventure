
import { Menu, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/hemavanadventure/lovable-uploads/3d276c1b-70b8-4d02-9e51-afc3db0426f7.png" 
              alt="Hemavan Adventure Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              {t('hero.aboutUs')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              {t('hero.services')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              {t('hero.bookAdventure')}
            </button>
          </div>

          {/* Language Toggle and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-slate-600" />
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
            </div>

            {/* Hamburger Menu - Available on all screen sizes */}
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle className="text-center text-xl font-bold">
                    <img 
                      src="/hemavanadventure/lovable-uploads/3d276c1b-70b8-4d02-9e51-afc3db0426f7.png" 
                      alt="Hemavan Adventure Logo" 
                      className="h-8 w-auto mx-auto"
                    />
                  </DrawerTitle>
                </DrawerHeader>
                <div className="px-6 pb-8">
                  <div className="flex flex-col space-y-4">
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection('about')}
                      className="justify-start text-left text-slate-600 hover:text-blue-600 font-medium h-12 text-lg"
                    >
                      {t('hero.aboutUs')}
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection('services')}
                      className="justify-start text-left text-slate-600 hover:text-blue-600 font-medium h-12 text-lg"
                    >
                      {t('hero.services')}
                    </Button>
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 mt-4 text-lg"
                    >
                      {t('hero.bookAdventure')}
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
