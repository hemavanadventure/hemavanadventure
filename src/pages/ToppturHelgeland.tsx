
import { Mountain, Clock, Users, Award, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const ToppturHelgeland = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white pt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Topptur i Helgeland
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Upplev Helgelands spektakulära toppturer med vår expertguide
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              Boka din topptur
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
                Helgelands vackraste toppar
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Helgeland erbjuder några av Norges mest spektakulära toppturer med 
                fantastiska vyer över kust och fjäll. Våra erfarna guider tar dig 
                säkert till de bästa topparna i området.
              </p>
              <p className="text-lg text-slate-600">
                Perfekt för både nybörjare och erfarna toppturskidåkare som vill 
                utforska denna unika del av Norge.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Turdetaljer</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Heldag (6-8 timmar)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Max 4 personer</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Medel - Avancerad nivå</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-slate-700">Helgeland, Norge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Vad ingår i turen?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Expertguide</h3>
              <p className="text-slate-600">
                Erfaren lokalguide med djup kunskap om Helgelands toppar och säkerhet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Säkerhetsutrustning</h3>
              <p className="text-slate-600">
                Fullständig lavinsäkerhetsutrustning och säkerhetsgenomgång.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Unika platser</h3>
              <p className="text-slate-600">
                Få tillgång till Helgelands bäst bevarade hemligheter och vyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo för ett äventyr i Helgeland?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för att boka din topptur i detta fantastiska område!
          </p>
          <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
            Kontakta oss nu
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ToppturHelgeland;
