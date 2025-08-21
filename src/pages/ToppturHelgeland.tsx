import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
const ToppturHelgeland = () => {
  const {
    t
  } = useLanguage();
  const handleBookingEmail = (serviceName: string) => {
    const subject = encodeURIComponent(`Bokning - ${serviceName}`);
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: ${serviceName}

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 text-white pt-32 bg-cover bg-no-repeat relative" style={{
      backgroundImage: `url('/lovable-uploads/ce27e18a-f51c-4d51-b7c5-e1b4a2783894.png')`,
      backgroundPosition: 'center 80%'
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Topptur i Helgeland
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Upplev Helgelands vackra toppturer med fantastiska vyer över kust och fjäll
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => handleBookingEmail('Topptur i Helgeland')}>
              Boka idag
            </Button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Skidåkning med havsutsikt</h2>
              <p className="text-lg text-slate-600 mb-6 text-left">
                Helgeland bjuder på några av Norges mest spektakulära toppturer, där fjäll möter hav och vyerna sträcker sig mil efter mil. Våra erfarna guider leder dig säkert till de bästa topparna och ser till att du får en minnesvärd upplevelse.
              </p>
              <p className="text-lg text-slate-600 mb-6 text-left">
                Toppturerna anpassas alltid efter deltagarnas skidvana, och ingen tidigare erfarenhet krävs. Vill du prova för första gången? Då introducerar vi dig gärna till grunderna.
              </p>
              <p className="text-lg text-slate-600 mb-6 text-left">
                Egen skidutrustning behövs (kan hyras hos lokala skiduthyrningar). För att verkligen uppleva områdets mångfald rekommenderar vi att boka flera dagar i följd.
              </p>
              <p className="text-lg text-slate-600">I bokningen ingår en certifierad guide för en heldag samt komplett lavinutrustning. Transport och eventuell logi tillkommer.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Turdetaljer</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-green-600 font-semibold">Tid</span>
                  <span className="text-slate-700"> - Heldag</span>
                </div>
                <div>
                  <span className="text-green-600 font-semibold">Gruppstorlek</span>
                  <span className="text-slate-700"> - 1-6 personer</span>
                </div>
                <div>
                  <span className="text-green-600 font-semibold">Nivå</span>
                  <span className="text-slate-700"> - Anpassas enligt grupp</span>
                </div>
                <div>
                  <span className="text-green-600 font-semibold">Pris</span>
                  <span className="text-slate-700"> - Fråga oss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Redo för ett äventyr?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss så bokar vi en guide åt er!
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => handleBookingEmail('Topptur i Helgeland')}>
            Skicka meddelande
          </Button>
        </div>
      </section>
    </div>;
};
export default ToppturHelgeland;