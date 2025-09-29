import React, { useState } from 'react';
import { Calendar, Users, Music, Leaf, Trophy, Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes', icon: Camera },
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'sports', label: 'Sports', icon: Trophy },
    { id: 'culture', label: 'Culture', icon: Music },
    { id: 'environment', label: 'Environnement', icon: Leaf },
    { id: 'community', label: 'Communauté', icon: Users }
  ];

  const photos = [
    {
      id: 1,
      title: 'Festival Culturel 2024',
      category: 'culture',
      description: 'Spectacle de danse traditionnelle lors du festival annuel',
      url: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-07-15'
    },
    {
      id: 2,
      title: 'Tournoi de Football',
      category: 'sports',
      description: 'Compétition inter-jeunes au stade municipal',
      url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-06-20'
    },
    {
      id: 3,
      title: 'Plantation d\'Arbres',
      category: 'environment',
      description: 'Action de reboisement dans le parc central',
      url: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-04-22'
    },
    {
      id: 4,
      title: 'Assemblée Générale',
      category: 'community',
      description: 'Réunion annuelle de tous nos membres',
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-10'
    },
    {
      id: 5,
      title: 'Concert Bénéfice',
      category: 'culture',
      description: 'Soirée musicale au profit d\'associations locales',
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-05-18'
    },
    {
      id: 6,
      title: 'Nettoyage des Rues',
      category: 'environment',
      description: 'Action citoyenne pour un Tatroz plus propre',
      url: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-04-01'
    },
    {
      id: 7,
      title: 'Soirée Jeux',
      category: 'events',
      description: 'Soirée conviviale avec jeux de société et animations',
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-14'
    },
    {
      id: 8,
      title: 'Championnat Basket',
      category: 'sports',
      description: 'Finale du championnat local de basketball',
      url: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-28'
    },
    {
      id: 9,
      title: 'Atelier Théâtre',
      category: 'culture',
      description: 'Séance de formation théâtrale pour les jeunes',
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-22'
    },
    {
      id: 10,
      title: 'Marche pour le Climat',
      category: 'environment',
      description: 'Manifestation pacifique pour la sensibilisation environnementale',
      url: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-09-21'
    },
    {
      id: 11,
      title: 'Barbecue Communautaire',
      category: 'community',
      description: 'Moment de partage entre tous les membres',
      url: 'https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-08-15'
    },
    {
      id: 12,
      title: 'Gala Annuel',
      category: 'events',
      description: 'Soirée de gala avec remise des prix annuels',
      url: 'https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-12-01'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="py-16 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tatroz-green to-green-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Galerie Photo
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Revivez nos meilleurs moments à travers cette sélection de photos 
            qui racontent l'histoire de nos activités et réalisations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-tatroz-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-tatroz-green border border-gray-300'
              }`}
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{photo.description}</p>
                  <div className="flex items-center text-xs text-gray-300">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(photo.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === photo.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-16">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune photo dans cette catégorie
            </h3>
            <p className="text-gray-500">
              Revenez bientôt, nous ajoutons régulièrement de nouvelles photos !
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Notre Galerie en Chiffres
            </h2>
            <p className="text-gray-600">
              Quelques statistiques sur notre collection de souvenirs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-tatroz-green mb-2">200+</div>
              <p className="text-gray-600">Photos Archivées</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tatroz-green mb-2">50+</div>
              <p className="text-gray-600">Événements Couverts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tatroz-green mb-2">15</div>
              <p className="text-gray-600">Années d'Histoire</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tatroz-green mb-2">1000+</div>
              <p className="text-gray-600">Moments Partagés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-tatroz-green to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Camera className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">
            Partagez Vos Photos !
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Vous avez participé à nos événements ? Envoyez-nous vos plus belles photos 
            pour enrichir notre galerie communautaire !
          </p>
          <button className="bg-white text-tatroz-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Envoyer des Photos
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;