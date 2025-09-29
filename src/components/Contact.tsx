import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@jeunesse-tatroz.org',
      action: 'mailto:contact@jeunesse-tatroz.org'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: '+33 4 XX XX XX XX',
      action: 'tel:+33400000000'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: 'Mairie de Tatroz\n123 Rue Principale\n74000 Tatroz',
      action: null
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: 'Lun-Ven: 18h-20h\nSamedi: 14h-18h\nDimanche: Fermé',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:bg-pink-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:bg-blue-400'
    }
  ];

  const subjects = [
    { value: 'general', label: 'Demande générale' },
    { value: 'membership', label: 'Adhésion' },
    { value: 'events', label: 'Événements' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'volunteer', label: 'Bénévolat' },
    { value: 'other', label: 'Autre' }
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tatroz-green to-green-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Une question, une idée, ou l'envie de nous rejoindre ? 
            N'hésitez pas à nous contacter, nous serons ravis de vous répondre !
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tatroz-green focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tatroz-green focus:border-transparent transition-colors"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tatroz-green focus:border-transparent transition-colors"
                  >
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tatroz-green focus:border-transparent transition-colors resize-vertical"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-tatroz-green text-white hover:bg-tatroz-green-dark hover:shadow-lg'
                }`}
              >
                {submitted ? (
                  <>Message envoyé avec succès !</>
                ) : isSubmitting ? (
                  <>Envoi en cours...</>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Informations de Contact
              </h2>
              <p className="text-gray-600">
                Retrouvez toutes nos coordonnées et horaires d'ouverture.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <info.icon className="h-6 w-6 text-tatroz-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-gray-600 hover:text-tatroz-green transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-200 rounded-full text-gray-600 transition-colors ${social.color} hover:text-white`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Carte interactive</p>
                <p className="text-sm">Mairie de Tatroz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-6 w-6 text-tatroz-green mr-3 mt-1" />
                <h3 className="font-semibold text-gray-800">Comment devenir membre ?</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Il suffit de nous contacter via le formulaire ou de venir à une de nos réunions 
                mensuelles. L'adhésion est ouverte à tous les jeunes de 16 à 30 ans.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-6 w-6 text-tatroz-green mr-3 mt-1" />
                <h3 className="font-semibold text-gray-800">Y a-t-il une cotisation ?</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Oui, la cotisation annuelle est de 20€ pour couvrir les frais d'assurance 
                et de fonctionnement. Des réductions sont possibles selon la situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-6 w-6 text-tatroz-green mr-3 mt-1" />
                <h3 className="font-semibold text-gray-800">Quand ont lieu les réunions ?</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Nous nous réunissons tous les premiers samedis du mois à 14h à la mairie. 
                Les dates peuvent varier, consultez notre calendrier d'événements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <MessageCircle className="h-6 w-6 text-tatroz-green mr-3 mt-1" />
                <h3 className="font-semibold text-gray-800">Peut-on participer sans être membre ?</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Bien sûr ! Vous pouvez participer à nos événements publics en tant que 
                bénévole ou spectateur. C'est un excellent moyen de découvrir nos activités.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;