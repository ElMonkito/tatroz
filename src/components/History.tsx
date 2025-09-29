import React from 'react';
import { Calendar, Users, Trophy, Heart } from 'lucide-react';

const History: React.FC = () => {
  const timeline = [
    {
      year: '2010',
      title: 'Fondation de la Jeunesse Tatroz',
      description: 'Création de l\'organisation par un groupe de 15 jeunes passionnés, avec pour mission de dynamiser la vie locale et créer du lien social.',
      icon: Users,
      color: 'bg-tatroz-green'
    },
    {
      year: '2012',
      title: 'Premier Festival Culturel',
      description: 'Organisation du premier festival culturel de Tatroz, attirant plus de 500 visiteurs et marquant notre engagement artistique.',
      icon: Trophy,
      color: 'bg-green-600'
    },
    {
      year: '2015',
      title: 'Actions Environnementales',
      description: 'Lancement de nos premières campagnes écologiques avec la plantation de 200 arbres et l\'organisation de journées de nettoyage.',
      icon: Heart,
      color: 'bg-orange-500'
    },
    {
      year: '2018',
      title: 'Expansion des Activités',
      description: 'Diversification avec des activités sportives, des ateliers éducatifs et des programmes d\'échange culturel avec d\'autres communes.',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      year: '2020',
      title: 'Adaptation Digitale',
      description: 'Adaptation aux nouveaux défis avec la création de plateformes numériques et l\'organisation d\'événements virtuels.',
      icon: Users,
      color: 'bg-pink-500'
    },
    {
      year: '2025',
      title: 'Vers l\'Avenir',
      description: 'Aujourd\'hui, nous comptons plus de 120 membres actifs et continuons d\'innover pour servir notre communauté.',
      icon: Trophy,
      color: 'bg-tatroz-green'
    }
  ];

  const achievements = [
    {
      title: 'Festivals Organisés',
      count: '15+',
      description: 'Événements culturels majeurs'
    },
    {
      title: 'Projets Environnementaux',
      count: '30+',
      description: 'Actions pour un Tatroz plus vert'
    },
    {
      title: 'Heures Bénévoles',
      count: '5000+',
      description: 'Temps consacré à la communauté'
    },
    {
      title: 'Partenariats',
      count: '25+',
      description: 'Collaborations locales et régionales'
    }
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tatroz-green to-green-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Quinze années d'engagement, de passion et de dévouement au service 
            de la jeunesse et de la communauté de Tatroz.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Chronologie de nos Réalisations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Retour sur les moments clés qui ont façonné l'identité de la Jeunesse Tatroz
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>
          
          {timeline.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${event.color} rounded-full flex items-center justify-center z-10`}>
                <event.icon className="h-4 w-4 text-white" />
              </div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className={`${event.color} text-white px-3 py-1 rounded-full text-sm font-bold mr-3`}>
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nos Réalisations en Chiffres
            </h2>
            <p className="text-gray-600">
              Quelques statistiques qui témoignent de notre engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-tatroz-green mb-2">
                  {achievement.count}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Depuis notre création, la Jeunesse de Tatroz s'engage à être un acteur 
            dynamique du développement local. Nous œuvrons pour créer des liens 
            intergénérationnels, promouvoir la culture et les valeurs de solidarité, 
            tout en étant force de proposition pour l'avenir de notre commune.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-tatroz-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Engagement</h3>
              <p className="text-gray-600 text-sm">Servir activement notre communauté</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-tatroz-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Solidarité</h3>
              <p className="text-gray-600 text-sm">Créer du lien et de l'entraide</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-tatroz-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Proposer des solutions d'avenir</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;