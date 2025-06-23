
import { Clock, Users, Mountain } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Half-Day Tours",
      description: "Perfect introduction to ski touring with basic technique instruction and scenic routes.",
      duration: "4-5 hours",
      groupSize: "2-6 people",
      difficulty: "Beginner to Intermediate",
      icon: Clock
    },
    {
      title: "Full-Day Adventures",
      description: "Comprehensive ski touring experience with lunch in the mountains and advanced terrain.",
      duration: "7-8 hours",
      groupSize: "2-6 people", 
      difficulty: "Intermediate to Advanced",
      icon: Mountain
    },
    {
      title: "Multi-Day Expeditions",
      description: "Immersive wilderness experience with hut-to-hut touring and backcountry camping.",
      duration: "2-5 days",
      groupSize: "2-4 people",
      difficulty: "Advanced",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Ski Touring Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our range of guided ski touring experiences, 
            tailored to different skill levels and adventure preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration:</span>
                  <span className="font-semibold text-slate-700">{service.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Group Size:</span>
                  <span className="font-semibold text-slate-700">{service.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Difficulty:</span>
                  <span className="font-semibold text-slate-700">{service.difficulty}</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            All tours include professional guiding, safety equipment, and basic avalanche safety instruction.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Book Your Adventure Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
