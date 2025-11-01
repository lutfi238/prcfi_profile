import React, { useState } from 'react';
import { galleryData } from '../mock';
import { Dialog, DialogContent } from './ui/dialog';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'wildlife', label: 'Satwa Liar' },
    { id: 'community', label: 'Komunitas' },
    { id: 'technology', label: 'Teknologi' },
    { id: 'nature', label: 'Alam' }
  ];

  const filteredGallery = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galeri
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi kegiatan konservasi dan keanekaragaman hayati
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-2xl">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
