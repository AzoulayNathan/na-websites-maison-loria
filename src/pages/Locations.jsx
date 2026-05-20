import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const locations = [
  {
    city: 'Bordeaux',
    address: '18 Rue des Carmes, 33000 Bordeaux',
    hours: { fr: 'Mardi – Dimanche · 7h30 – 18h30', en: 'Tuesday – Sunday · 7:30 – 18:30' },
    closed: { fr: 'Fermé le lundi', en: 'Closed Monday' },
    phone: '+33 5 57 84 26 11',
    services: { fr: ['Café', 'Brunch', 'Retrait précommande', 'Retrait gâteau', 'Consultation événement sur RDV'], en: ['Café', 'Brunch', 'Pre-order pickup', 'Cake pickup', 'Event consultation by appointment'] },
    moodFr: 'Au cœur du vieux Bordeaux, entre pierre claire et comptoir de bois.',
    moodEn: 'In the heart of old Bordeaux, between light stone and wooden counter.',
    mapUrl: 'https://maps.google.com/?q=18+Rue+des+Carmes,+33000+Bordeaux',
  },
  {
    city: 'Biarritz',
    address: '7 Place Sainte-Claire, 64200 Biarritz',
    hours: { fr: 'Mercredi – Dimanche · 8h00 – 19h00', en: 'Wednesday – Sunday · 8:00 – 19:00' },
    closed: { fr: 'Fermé lundi et mardi', en: 'Closed Monday & Tuesday' },
    phone: '+33 5 59 42 18 73',
    services: { fr: ['Café', 'Brunch', 'Retrait précommande', 'Retrait gâteau'], en: ['Café', 'Brunch', 'Pre-order pickup', 'Cake pickup'] },
    moodFr: 'Face à la place, une terrasse lumineuse avec vue sur les toits.',
    moodEn: 'Facing the square, a bright terrace with rooftop views.',
    mapUrl: 'https://maps.google.com/?q=7+Place+Sainte-Claire,+64200+Biarritz',
  },
];

export default function Locations() {
  const { t, lang } = useLang();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Nos adresses', 'Our addresses')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Nos maisons', 'Our houses')}</h1>
        </div>

        <div className="space-y-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-cream rounded-lg overflow-hidden border border-dark-chocolate/5"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 lg:p-10">
                  <h2 className="font-heading text-3xl text-dark-chocolate mb-2">{loc.city}</h2>
                  <p className="font-body text-sm text-dark-chocolate/50 italic mb-6">
                    {lang === 'fr' ? loc.moodFr : loc.moodEn}
                  </p>
                  <div className="space-y-4 text-sm font-body text-dark-chocolate/70">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="mt-0.5 text-toasted-crust/60 shrink-0" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="mt-0.5 text-toasted-crust/60 shrink-0" />
                      <div>
                        <p>{lang === 'fr' ? loc.hours.fr : loc.hours.en}</p>
                        <p className="text-dark-chocolate/40">{lang === 'fr' ? loc.closed.fr : loc.closed.en}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-toasted-crust/60 shrink-0" />
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-dark-chocolate">{loc.phone}</a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xs font-mono text-toasted-crust/60 uppercase tracking-wider mb-2">{t('Services', 'Services')}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {(lang === 'fr' ? loc.services.fr : loc.services.en).map(s => (
                        <span key={s} className="text-xs font-body px-2 py-1 bg-porcelain-white text-dark-chocolate/60 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="px-4 py-2 bg-dark-chocolate text-cream text-sm font-body rounded hover:bg-dark-chocolate/90 transition-colors">
                      {t('Appeler', 'Call')}
                    </a>
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-dark-chocolate/15 text-dark-chocolate text-sm font-body rounded hover:bg-dark-chocolate hover:text-cream transition-colors flex items-center gap-1">
                      <Navigation size={14} /> {t('Itinéraire', 'Directions')}
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-butter-gold/10 to-toasted-crust/10 flex items-center justify-center">
                  <span className="font-heading text-4xl text-dark-chocolate/10">{loc.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}