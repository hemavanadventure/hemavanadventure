
import { Mountain, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <Mountain className="h-12 w-12 mr-3 text-blue-300" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hemavan Adventure
          </h1>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
          Expert Ski Touring Guides in Swedish Lapland
        </p>
        <div className="flex items-center justify-center text-lg text-blue-200 mb-12">
          <MapPin className="h-5 w-5 mr-2" />
          <span>Hemavan, Sweden</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Your Adventure
          </a>
          <a 
            href="#about" 
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
