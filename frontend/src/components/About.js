import React from 'react';
import { Users, Leaf, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { aboutData } from '../mock';

const About = () => {
  const iconMap = {
    Users: Users,
    Leaf: Leaf,
    TrendingUp: TrendingUp,
    Shield: Shield
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organisasi nirlaba yang berdedikasi untuk konservasi keanekaragaman hayati dan pemberdayaan masyarakat lokal
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutData.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed">{aboutData.mission.description}</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutData.vision.title}</h3>
              <p className="text-gray-700 leading-relaxed">{aboutData.vision.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconMap[value.icon];
              return (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
