import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/data/products';

const moments = [
  { id: 'morning', fr: 'Petit-déjeuner', en: 'Breakfast', filter: 'morning' },
  { id: 'brunch', fr: 'Brunch', en: 'Brunch', filter: 'brunch' },
  { id: 'afternoon', fr: 'Goûter', en: 'Afternoon treat', filter: 'afternoon' },
  { id: 'cake', fr: 'Gâteau', en: 'Cake', filter: null },
  { id: 'office', fr: 'Bureau', en: 'Office', filter: 'coffee' },
  { id: 'wedding', fr: 'Mariage', en: 'Wedding', filter: 'event' },
  { id: 'event', fr: 'Événement privé', en: 'Private event', filter: 'event' },
];

export default function MomentSelector() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState('morning');

  const moment = moments.find(m => m.id === selected);
  const filtered = moment?.filter
    ? products.filter(p => p.moment === moment.filter).slice(0, 4)
    : products.filter(p => p.category === 'box').slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl text-dark-chocolate">
            {t('Pour quel moment venez-vous ?', 'What moment are you planning?')}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {moments.map(m => (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                selected === m.id
                  ? 'bg-dark-chocolate text-cream'
                  : 'bg-cream text-dark-chocolate/60 hover:bg-cream/80'
              }`}
            >
              {lang === 'fr' ? m.fr : m.en}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filtered.map(item => (
              <div key={item.id} className="bg-cream rounded-lg p-5 border border-dark-chocolate/5">
                <h3 className="font-heading text-lg text-dark-chocolate">
                  {lang === 'fr' ? item.name.fr : item.name.en}
                </h3>
                <p className="mt-2 text-xs font-body text-dark-chocolate/50 leading-relaxed line-clamp-2">
                  {lang === 'fr' ? item.desc.fr : item.desc.en}
                </p>
                <span className="mt-3 inline-block text-sm font-mono text-toasted-crust">{item.price}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 text-center">
          <Link
            to={selected === 'cake' ? '/gateaux' : selected === 'wedding' || selected === 'event' ? '/evenements' : '/menu'}
            className="inline-block px-6 py-3 border border-dark-chocolate/15 text-dark-chocolate text-sm font-body rounded hover:bg-dark-chocolate hover:text-cream transition-colors"
          >
            {t('Voir tout le menu', 'View full menu')}
          </Link>
        </div>
      </div>
    </section>
  );
}