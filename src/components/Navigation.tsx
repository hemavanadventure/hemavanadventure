
import { Menu, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the Index page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the Index page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logo.png" 
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
            {/* Language toggle temporarily hidden */}
            {/* <div className="flex items-center space-x-2">
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
            </div> */}

            {/* Dropdown Menu - Available on all screen sizes */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="p-3 text-slate-600 hover:text-blue-600 hover:bg-slate-100"
                >
                  <Menu className="h-7 w-7" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 md:w-64 bg-white border shadow-lg">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('about')}
                  className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 py-3 px-4 text-base"
                >
                  {t('hero.aboutUs')}
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  onClick={() => scrollToSection('services')}
                  className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 py-3 px-4 text-base font-medium"
                >
                  {t('hero.services')}
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link 
                    to="/topptur-privatguide" 
                    className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 w-full block py-3 px-4 text-base"
                  >
                    Topptur med privatguide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/off-pist-guiding" 
                    className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 w-full block py-3 px-4 text-base"
                  >
                    Offpist med privatguide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/offpist-skidskola" 
                    className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 w-full block py-3 px-4 text-base"
                  >
                    {t('services.skiSchool')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/topptur-helgeland" 
                    className="cursor-pointer text-slate-600 hover:text-blue-600 hover:bg-slate-50 w-full block py-3 px-4 text-base"
                  >
                    Topptur i Helgeland
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem 
                  onClick={() => scrollToSection('contact')}
                  className="cursor-pointer text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold py-3 px-4 text-base"
                >
                  {t('hero.bookAdventure')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
