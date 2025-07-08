
import { GraduationCap, Users, Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const SkiSchool = () => {
  const { t } = useLanguage();

  const handleBookingEmail = (programName: string) => {
    const subject = encodeURIComponent(`Bokning - ${programName}`);
    const body = encodeURIComponent(`Hej!

Jag skulle vilja boka: ${programName}

Vänligen kontakta mig för mer information om priser och tillgänglighet.

Tack!`);
    
    window.location.href = `mailto:rasmus@hemavanadventure.se?subject=${subject}&body=${body}`;
  };

  const programs = [
    {
      title: "Beginner Basics",
      duration: "2 hours",
      maxParticipants: "6-8 people",
      description: "Perfect for first-time skiers learning fundamental techniques and safety basics.",
      includes: ["Equipment introduction", "Basic turning techniques", "Safe falling and getting up", "Equipment fitting"]
    },
    {
      title: "Intermediate Development", 
      duration: "3 hours",
      maxParticipants: "4-6 people",
      description: "Develop your skills with advanced turning, terrain navigation, and touring preparation.",
      includes: ["Parallel turns", "Terrain reading", "Basic touring skills", "Route planning basics"]
    },
    {
      title: "Advanced Techniques",
      duration: "3 hours", 
      maxParticipants: "4 people",
      description: "Master challenging terrain, advanced techniques, and backcountry safety protocols.",
      includes: ["Off-piste skiing", "Avalanche awareness", "Emergency procedures", "Advanced touring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 mr-4 text-blue-300" />
            <h1 className="text-5xl md:text-6xl font-bold">Skidskola i offpist</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Utveckla din åkning i offpist tillsammans med en erfaren instruktör</p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={() => handleBookingEmail('Skidskola i offpist')}
          >
            Book Your Lesson
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Lär dig från de bästa</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our ski school offers comprehensive instruction for all skill levels in the breathtaking 
                environment of Hemavan. Whether you're taking your first steps on skis or looking to 
                refine advanced techniques, our certified instructors provide personalized guidance 
                in small groups.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">Small Groups</h3>
                  <p className="text-sm text-slate-600">Max 8 students</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">Certified Instructors</h3>
                  <p className="text-sm text-slate-600">Professional training</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-slate-500 text-center">
                [Ski instruction image placeholder]<br />
                Instructor teaching students on snowy slopes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-slate-600">
              Choose the program that matches your skill level and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">{program.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-slate-600">Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-slate-600">Group size: {program.maxParticipants}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {program.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleBookingEmail(program.title)}
                  >
                    Book This Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
            Why Choose Our Ski School?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Instruction</h3>
              <p className="text-slate-600">
                Learn from certified ski instructors with years of experience in Swedish Lapland.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Small Groups</h3>
              <p className="text-slate-600">
                Personalized attention with maximum 8 students per instructor.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">All Levels</h3>
              <p className="text-slate-600">
                Programs designed for complete beginners to advanced skiers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Flexible Timing</h3>
              <p className="text-slate-600">
                Choose from 2-3 hour sessions that fit your schedule and energy level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Ski Journey?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join our ski school and discover the joy of skiing in one of the world's most beautiful locations.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              onClick={() => handleBookingEmail('Skidskola i offpist')}
            >
              Book Your Lesson
            </Button>
            <Link to="/">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkiSchool;
