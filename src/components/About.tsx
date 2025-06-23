
import { Users, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Your Mountain Adventure Specialists
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the pristine wilderness of Swedish Lapland with our expert ski touring guides. 
            We offer unforgettable adventures in one of Europe's most spectacular mountain regions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Expert Guides</h3>
            <p className="text-slate-600 leading-relaxed">
              Our certified mountain guides have years of experience in the Hemavan region, 
              ensuring your safety and maximizing your adventure experience.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Local Knowledge</h3>
            <p className="text-slate-600 leading-relaxed">
              Deep local knowledge of the Hemavan area's best routes, weather patterns, 
              and hidden gems that only locals know about.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Safety First</h3>
            <p className="text-slate-600 leading-relaxed">
              All our tours prioritize safety with proper equipment, avalanche training, 
              and comprehensive risk management protocols.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Discover Hemavan's Wilderness
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Located in the heart of Swedish Lapland, Hemavan offers some of Europe's most pristine 
                ski touring terrain. From gentle alpine meadows perfect for beginners to challenging 
                peaks for experienced mountaineers, we have adventures for every skill level.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our small group sizes ensure personalized attention and an intimate connection 
                with the stunning Arctic landscape that surrounds us.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl h-64 flex items-center justify-center">
              <p className="text-white text-center px-6">
                [Mountain landscape image placeholder]
                <br />
                <span className="text-sm text-blue-200">Stunning views of Hemavan's peaks</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
