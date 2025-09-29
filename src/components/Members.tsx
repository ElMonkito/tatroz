import React from 'react';
import { Calendar, Users, Heart, Award } from 'lucide-react';

const Members: React.FC = () => {
  const boardMembers = [
    {
      name: 'Noémie Savoy',
      role: 'Présidente',
      joinDate: '2018',
    },
    {
      name: 'Titouan Emonet',
      role: 'Vice-Président',
      joinDate: '2019',
    },
    {
      name: 'Sara Carrasco',
      role: 'Secrétaire',
      joinDate: '2020',
    },
    {
      name: 'Valentin Roth',
      role: 'Caissier',
      joinDate: '2024',
    },
    {
      name: 'Amelie Bonnet',
      role: 'Responsable Événements',
      joinDate: '2022',
    },
    {
      name: 'Maéline Emonet',
      role: 'Responsable Réseaux',
      joinDate: '2021',
    },
    {
      name: 'Valentin Repond',
      role: '7eme Membre',
      joinDate: '2025',
    }
  ];

  const memberCategories = [
    {
      title: 'Membres Actifs',
      count: 30,
      description: 'Participants réguliers aux activités et projets',
      icon: Users,
      color: 'bg-tatroz-green'
    }
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tatroz-green to-green-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Membres
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Découvrez les personnes passionnées qui font vivre la Jeunesse de Tatroz 
            et contribuent quotidiennement à nos missions.
          </p>
        </div>
      </section>

{/* Member Statistics */}
<section className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Notre Communauté
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Une diversité de profils unis par la passion de l'engagement citoyen
    </p>
  </div>

  {/* Centrage du bloc unique */}
  <div className="flex justify-center">
    {memberCategories.map((category, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center max-w-xs"
      >
        <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
          <category.icon className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-2">
          {category.count}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {category.title}
        </h3>
        <p className="text-gray-600 text-sm">
          {category.description}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Board Members */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Le Bureau Directeur
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les responsables qui guident nos actions et coordonnent nos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-tatroz-green to-green-600 p-6 text-white text-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-100">{member.role}</p>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <div className="text-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      Membre depuis {member.joinDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-tatroz-green to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez La Jeunesse
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Vous souhaitez contribuer au développement de Tatroz ? 
            Rejoignez-nous et participez à nos projets passionnants !
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Devenir Membre</h3>
              <ul className="text-left space-y-2 text-blue-100">
                <li>• Participation aux réunions mensuelles</li>
                <li>• Contribution aux projets en cours</li>
                <li>• Accès aux formations et ateliers</li>
                <li>• Réseau de jeunes engagés</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tatroz-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Rejoindre Maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;