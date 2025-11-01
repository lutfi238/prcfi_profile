import React from 'react';
import { Card, CardContent } from './ui/card';
import { teamData, partnersData } from '../mock';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tim Kami
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesional berpengalaman yang berdedikasi untuk konservasi
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <Card key={member.id} className="border-none shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                <CardContent className="p-6 -mt-16 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-emerald-300 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mitra Kami
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bekerja sama dengan berbagai organisasi untuk dampak yang lebih besar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-emerald-700 font-bold text-sm">{partner.logo}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
