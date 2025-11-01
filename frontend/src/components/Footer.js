import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">PRCF Indonesia</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Yayasan Pelestari Ragamhayati dan Cipta Fondasi Indonesia - Bersama masyarakat lokal melestarikan keanekaragaman hayati.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('programs')} className="hover:text-emerald-400 transition-colors">
                  Program
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-emerald-400 transition-colors">
                  Galeri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="hover:text-emerald-400 transition-colors">
                  Tim & Mitra
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('news')} className="hover:text-emerald-400 transition-colors">
                  Berita
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-emerald-400" />
                <span>Pontianak, Kalimantan Barat</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>{contactData.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>{contactData.email}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-3 mb-6">
              <a
                href={contactData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={contactData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm">
              Bergabunglah dalam upaya konservasi keanekaragaman hayati
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} PRCF Indonesia. All rights reserved.
            </p>
            <p className="text-sm text-center md:text-right">
              Yayasan Pelestari Ragamhayati dan Cipta Fondasi Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
