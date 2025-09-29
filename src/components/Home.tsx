import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, X, Users as UsersIcon } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<number | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tournoi de Football',
      date: '2025-02-15',
      time: '14:00',
      location: 'Stade Municipal Tatroz',
      description: 'Championnat inter-jeunes avec équipes locales',
      category: 'Sport',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Rejoignez-nous pour notre tournoi de football annuel ! Équipes de 7 joueurs, inscription gratuite pour tous les membres. Prix pour les 3 premières équipes et goûter offert à tous les participants.',
      organizer: 'Lucas Moreau',
      maxParticipants: 56,
      currentParticipants: 32
    },
    {
      id: 2,
      title: 'Soirée Culturelle',
      date: '2025-02-22',
      time: '19:30',
      location: 'Centre Culturel',
      description: 'Spectacle de danse et musique traditionnelle',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Une soirée exceptionnelle avec des performances de danse traditionnelle, des concerts acoustiques et une exposition d\'art local. Entrée libre, buvette sur place.',
      organizer: 'Chloé Bernard',
      maxParticipants: 150,
      currentParticipants: 89
    },
    {
      id: 3,
      title: 'Nettoyage Environnemental',
      date: '2025-03-01',
      time: '09:00',
      location: 'Parc Central Tatroz',
      description: 'Action bénévole pour un Tatroz plus propre',
      category: 'Environnement',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
      fullDescription: 'Action citoyenne de nettoyage du parc central. Matériel fourni, petit-déjeuner offert. Une belle occasion de contribuer à la beauté de notre ville tout en passant un moment convivial.',
      organizer: 'Alexandre Petit',
      maxParticipants: 40,
      currentParticipants: 28
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sport': return 'bg-blue-500';
      case 'Culture': return 'bg-purple-500';
      case 'Environnement': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section with Group Photo */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              La Jeunesse de Tatroz
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
              Ensemble, nous construisons l'avenir de notre commune
            </p>
            <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Depuis 15 ans, nous rassemblons les jeunes de Tatroz autour de projets 
              qui nous tiennent à cœur : culture, sport, environnement et solidarité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-tatroz-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-tatroz-green-dark transition-all transform hover:scale-105 shadow-lg">
                Devenir Membre
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-all">
                Découvrir nos Actions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Prochains Événements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos prochaines activités et rejoignez-nous pour des moments 
              inoubliables de partage et d'engagement communautaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedEvent(event.id)}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ArrowRight className="h-5 w-5 text-white group-hover:text-tatroz-green transition-colors" />
                  </div>
                </div>
                
                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-tatroz-green transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const event = upcomingEvents.find(e => e.id === selectedEvent);
              if (!event) return null;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <button 
                      onClick={() => setSelectedEvent(null)}
                      className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all"
                    >
                      <X className="h-5 w-5 text-gray-600" />
                    </button>
                    <div className="absolute bottom-4 left-4">
                      <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Modal Content */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-5 w-5 mr-3 text-tatroz-green" />
                          <span className="font-medium">
                            {new Date(event.date).toLocaleDateString('fr-FR', { 
                              weekday: 'long', 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-3 text-tatroz-green" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-3 text-tatroz-green" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <UsersIcon className="h-5 w-5 mr-3 text-tatroz-green" />
                          <span className="font-medium">Organisé par {event.organizer}</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Participants</span>
                            <span>{event.currentParticipants}/{event.maxParticipants}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-tatroz-green h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{event.fullDescription}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-tatroz-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-tatroz-green-dark transition-colors">
                        S'inscrire à l'événement
                      </button>
                      <button 
                        onClick={() => setSelectedEvent(null)}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Fermer
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tatroz-green/20 to-green-600/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 relative z-10">
            Prêt à nous rejoindre ?
          </h2>
          <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto relative z-10">
            Rejoignez une communauté de jeunes passionnés et engagés pour faire bouger les choses à Tatroz.
          </p>
          <button className="bg-tatroz-green text-white px-10 py-4 rounded-lg font-bold hover:bg-tatroz-green-dark transition-all transform hover:scale-105 shadow-lg relative z-10">
            Nous Contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;