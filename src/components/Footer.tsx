
import { Mountain, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Mountain className="h-8 w-8 mr-2 text-blue-400" />
              <span className="text-xl font-bold text-white">Hemavan Adventure</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for ski touring adventures in the breathtaking wilderness of Swedish Lapland.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+46 XXX XXX XXX</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@hemavanadventure.se</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Half-Day Tours</li>
              <li>Full-Day Adventures</li>
              <li>Multi-Day Expeditions</li>
              <li>Private Guiding</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Hemavan Adventure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
