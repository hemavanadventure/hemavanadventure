
import { Mountain, Menu, X } from "lucide-react";
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
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-800">{t('hero.title')}</span>
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

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-center">{t('hero.title')}</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-8">
                  <div className="flex flex-col space-y-4">
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection('about')}
                      className="justify-start text-slate-600 hover:text-blue-600 font-medium h-12"
                    >
                      {t('hero.aboutUs')}
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection('services')}
                      className="justify-start text-slate-600 hover:text-blue-600 font-medium h-12"
                    >
                      {t('hero.services')}
                    </Button>
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 mt-4"
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
