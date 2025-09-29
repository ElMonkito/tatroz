import React from 'react';
import { Mail, Phone, Calendar, Award, Users, Heart } from 'lucide-react';

const Members: React.FC = () => {
  const boardMembers = [
    {
      name: 'Noémie Savoy',
      role: 'Présidente',
      description: 'Étudiante en sociologie, passionnée par le développement communautaire.',
      email: 'sarah.martinez@jeunesse-tatroz.org',
      phone: '+33 6 12 34 56 78',
      joinDate: '2018',
      achievements: ['Festival Culturel 2024', 'Projet Écologique Municipal']
    },
    {
      name: 'Thomas Dubois',
      role: 'Vice-Président',
      description: 'Ingénieur informatique, responsable de la digitalisation de nos actions.',
      email: 'thomas.dubois@jeunesse-tatroz.org',
      phone: '+33 6 23 45 67 89',
      joinDate: '2019',
      achievements: ['Plateforme Digitale', 'Événements Virtuels COVID']
    },
    {
      name: 'Emma Laurent',
      role: 'Secrétaire Générale',
      description: 'Étudiante en communication, coordonne nos projets et partenariats.',
      email: 'emma.laurent@jeunesse-tatroz.org',
      phone: '+33 6 34 56 78 90',
      joinDate: '2020',
      achievements: ['Partenariats Régionaux', 'Communication Moderne']
    },
    {
      name: 'Lucas Moreau',
      role: 'Trésorier',
      description: 'Étudiant en gestion, gère les finances et les subventions.',
      email: 'lucas.moreau@jeunesse-tatroz.org',
      phone: '+33 6 45 67 89 01',
      joinDate: '2021',
      achievements: ['Optimisation Budget', 'Nouvelles Subventions']
    },
    {
      name: 'Chloé Bernard',
      role: 'Responsable Événements',
      description: 'Organisatrice d\'événements, créatrice d\'expériences mémorables.',
      email: 'chloe.bernard@jeunesse-tatroz.org',
      phone: '+33 6 56 78 90 12',
      joinDate: '2022',
      achievements: ['Gala Annuel', 'Tournois Sportifs']
    },
    {
      name: 'Alexandre Petit',
      role: 'Responsable Environnement',
      description: 'Militant écologiste, pilote nos actions environnementales.',
      email: 'alexandre.petit@jeunesse-tatroz.org',
      phone: '+33 6 67 89 01 23',
      joinDate: '2021',
      achievements: ['Opération Reboisement', 'Tri Sélectif Communal']
    }
  ];

  const memberCategories = [
    {
      title: 'Membres Actifs',
      count: 45,
      description: 'Participants réguliers aux activités et projets',
      icon: Users,
      color: 'bg-tatroz-green'
    },
    {
      title: 'Membres Bénévoles',
      count: 35,
      description: 'Contributeurs occasionnels selon leur disponibilité',
      icon: Heart,
      color: 'bg-green-600'
    },
    {
      title: 'Membres Bureau',
      count: 8,
      description: 'Responsables de la gestion et coordination',
      icon: Award,
      color: 'bg-orange-500'
    },
    {
      title: 'Membres Partenaires',
      count: 32,
      description: 'Soutien et collaboration avec autres organisations',
      icon: Calendar,
      color: 'bg-purple-500'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
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
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:text-tatroz-green transition-colors">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href={`tel:${member.phone}`} className="hover:text-tatroz-green transition-colors">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      Membre depuis {member.joinDate}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      Réalisations Clés
                    </h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, achIndex) => (
                        <span key={achIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mb-1">
                          {achievement}
                        </span>
                      ))}
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
            Rejoignez Notre Équipe
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Vous souhaitez contribuer au développement de Tatroz ? 
            Rejoignez-nous et participez à nos projets passionnants !
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Devenir Membre Actif</h3>
              <ul className="text-left space-y-2 text-blue-100">
                <li>• Participation aux réunions mensuelles</li>
                <li>• Contribution aux projets en cours</li>
                <li>• Accès aux formations et ateliers</li>
                <li>• Réseau de jeunes engagés</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Devenir Bénévole</h3>
              <ul className="text-left space-y-2 text-green-100">
                <li>• Aide ponctuelle sur les événements</li>
                <li>• Participation selon disponibilités</li>
                <li>• Expérience enrichissante</li>
                <li>• Impact direct sur la communauté</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tatroz-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Postuler Maintenant
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-tatroz-green transition-colors">
              En Savoir Plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;