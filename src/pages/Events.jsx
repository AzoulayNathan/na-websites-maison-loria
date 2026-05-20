import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const offers = [
  { id: 'corporate', fr: 'Petit-déjeuner entreprise', en: 'Corporate breakfast', idealFr: 'Réunions, accueil client, séminaires', idealEn: 'Meetings, client reception, seminars', formatFr: 'Boxes individuelles ou buffet', formatEn: 'Individual boxes or buffet', leadFr: '5 jours ouvrés', leadEn: '5 business days' },
  { id: 'coffee-break', fr: 'Pause café', en: 'Coffee break', idealFr: 'Conférences, ateliers, formations', idealEn: 'Conferences, workshops, training', formatFr: 'Viennoiseries, café, boissons', formatEn: 'Viennoiseries, coffee, drinks', leadFr: '3 jours', leadEn: '3 days' },
  { id: 'dessert-table', fr: 'Table de desserts', en: 'Dessert table', idealFr: 'Réceptions, lancements, fêtes', idealEn: 'Receptions, launches, parties', formatFr: 'Pâtisseries, mignardises, pièces montées', formatEn: 'Pastries, petit fours, centerpieces', leadFr: '2 semaines', leadEn: '2 weeks' },
  { id: 'cocktail', fr: 'Pièces cocktail sucrées', en: 'Sweet cocktail pieces', idealFr: 'Soirées, vernissages, cocktails', idealEn: 'Evenings, openings, cocktails', formatFr: 'Bouchées sucrées, verrines', formatEn: 'Sweet bites, verrines', leadFr: '2 semaines', leadEn: '2 weeks' },
  { id: 'wedding', fr: 'Collection mariage', en: 'Wedding collection', idealFr: 'Mariages et célébrations', idealEn: 'Weddings and celebrations', formatFr: 'Table de desserts, pièce montée, dragées', formatEn: 'Dessert table, tiered cake, favors', leadFr: '1 mois', leadEn: '1 month' },
  { id: 'private', fr: 'Réception privée', en: 'Private reception', idealFr: 'Anniversaires, dîners privés', idealEn: 'Birthdays, private dinners', formatFr: 'Sur mesure', formatEn: 'Custom', leadFr: '2 semaines', leadEn: '2 weeks' },
  { id: 'boutique', fr: 'Événement boutique', en: 'Boutique event', idealFr: 'Pop-ups, collaborations, hôtels', idealEn: 'Pop-ups, collaborations, hotels', formatFr: 'Format adapté', formatEn: 'Tailored format', leadFr: '2 semaines', leadEn: '2 weeks' },
];

export default function Events() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState('corporate');
  const offer = offers.find(o => o.id === selected);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Compositions', 'Compositions')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Traiteur & événements', 'Catering & events')}</h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-base text-dark-chocolate/50">
            {t(
              'Des compositions sucrées et salées pour vos événements privés et professionnels.',
              'Sweet and savory compositions for your private and professional events.'
            )}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Offer selector */}
          <div className="lg:w-1/3 space-y-2">
            {offers.map(o => (
              <button
                key={o.id}
                onClick={() => setSelected(o.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-body transition-all ${
                  selected === o.id ? 'bg-dark-chocolate text-cream' : 'bg-cream text-dark-chocolate/60 hover:bg-cream/80'
                }`}
              >
                {lang === 'fr' ? o.fr : o.en}
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-cream rounded-lg p-8 border border-dark-chocolate/5"
              >
                <h2 className="font-heading text-2xl text-dark-chocolate">{lang === 'fr' ? offer.fr : offer.en}</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <span className="text-xs font-mono text-toasted-crust/60 uppercase tracking-wider">{t('Idéal pour', 'Ideal for')}</span>
                    <p className="mt-1 text-sm font-body text-dark-chocolate/70">{lang === 'fr' ? offer.idealFr : offer.idealEn}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-toasted-crust/60 uppercase tracking-wider">{t('Format', 'Format')}</span>
                    <p className="mt-1 text-sm font-body text-dark-chocolate/70">{lang === 'fr' ? offer.formatFr : offer.formatEn}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-toasted-crust/60 uppercase tracking-wider">{t('Délai', 'Lead time')}</span>
                    <p className="mt-1 text-sm font-body text-dark-chocolate/70">{lang === 'fr' ? offer.leadFr : offer.leadEn}</p>
                  </div>
                </div>
                <Link
                  to="/devis-evenement"
                  className="inline-block mt-8 px-6 py-3 bg-butter-gold text-dark-chocolate text-sm font-body font-medium rounded hover:bg-butter-gold/90 transition-colors"
                >
                  {t('Demander un devis', 'Request a quote')}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}