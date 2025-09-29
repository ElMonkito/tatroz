import React from 'react';
import { Users, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    'Accueil',
    'Histoire',
    'Membres',
    'Galerie',
    'Contact'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-tatroz-green p-2 rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jeunesse Tatroz</h3>
                <p className="text-gray-300 text-sm">Ensemble vers l'avenir</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Depuis 2010, la Jeunesse de Tatroz rassemble les jeunes autour de projets 
              culturels, sportifs et environnementaux. Rejoignez notre communauté 
              dynamique et engagée pour l'avenir de notre ville.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-gray-700 p-2 rounded-lg hover:bg-tatroz-green transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">contact@jeunesse-tatroz.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <span className="text-gray-300 text-sm">+33 4 XX XX XX XX</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gray-400 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Mairie de Tatroz</p>
                  <p>123 Rue Principale</p>
                  <p>74000 Tatroz</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm">
            <span>© {currentYear} Jeunesse Tatroz. Réalisé avec</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>par notre équipe.</span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions Légales
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;