import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    city: 'Bordeaux',
    address: '18 Rue des Carmes, 33000 Bordeaux',
    hours: { fr: 'Mardi – Dimanche · 7h30 – 18h30', en: 'Tuesday – Sunday · 7:30 – 18:30' },
    closed: { fr: 'Fermé le lundi', en: 'Closed Monday' },
    phone: '+33 5 57 84 26 11',
  },
  {
    city: 'Biarritz',
    address: '7 Place Sainte-Claire, 64200 Biarritz',
    hours: { fr: 'Mercredi – Dimanche · 8h00 – 19h00', en: 'Wednesday – Sunday · 8:00 – 19:00' },
    closed: { fr: 'Fermé lundi et mardi', en: 'Closed Monday & Tuesday' },
    phone: '+33 5 59 42 18 73',
  },
];

export default function LocationsPreview() {
  const { t, lang } = useLang();

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl text-dark-chocolate">
            {t('Deux maisons, un même goût', 'Two houses, one taste')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-porcelain-white rounded-lg p-8 border border-dark-chocolate/5"
            >
              <h3 className="font-heading text-2xl text-dark-chocolate mb-4">{loc.city}</h3>
              <div className="space-y-3 text-sm font-body text-dark-chocolate/60">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 text-toasted-crust/60 shrink-0" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 text-toasted-crust/60 shrink-0" />
                  <div>
                    <p>{lang === 'fr' ? loc.hours.fr : loc.hours.en}</p>
                    <p className="text-dark-chocolate/40">{lang === 'fr' ? loc.closed.fr : loc.closed.en}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-toasted-crust/60 shrink-0" />
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-dark-chocolate transition-colors">{loc.phone}</a>
                </div>
              </div>
              <Link
                to="/boutiques"
                className="mt-6 inline-block text-xs font-body text-toasted-crust border-b border-toasted-crust/30 hover:border-toasted-crust transition-colors"
              >
                {t('Voir les détails', 'View details')} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}