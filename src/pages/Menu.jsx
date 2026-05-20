import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '@/lib/data/products';

const tabs = ['bread', 'viennoiserie', 'pastry', 'coffee', 'brunch', 'box'];
const filters = ['all', 'preorder', 'seasonal', 'vegetarian'];

export default function Menu() {
  const { t, lang } = useLang();
  const [tab, setTab] = useState('bread');
  const [filter, setFilter] = useState('all');

  const filtered = products
    .filter(p => p.category === tab)
    .filter(p => {
      if (filter === 'preorder') return p.preorder;
      if (filter === 'seasonal') return p.seasonal;
      if (filter === 'vegetarian') return p.vegetarian;
      return true;
    });

  const filterLabels = {
    all: t('Tout', 'All'),
    preorder: t('Précommande', 'Pre-order'),
    seasonal: t('Saison', 'Seasonal'),
    vegetarian: t('Végétarien', 'Vegetarian'),
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">
            Maison Loria
          </span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">
            {t('Menu & collections', 'Menu & collections')}
          </h1>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {tabs.map(cat => (
            <button
              key={cat}
              onClick={() => { setTab(cat); setFilter('all'); }}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                tab === cat ? 'bg-dark-chocolate text-cream' : 'bg-cream text-dark-chocolate/60 hover:text-dark-chocolate'
              }`}
            >
              {lang === 'fr' ? categories[cat].fr : categories[cat].en}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                filter === f ? 'bg-toasted-crust/10 text-toasted-crust' : 'text-dark-chocolate/40 hover:text-dark-chocolate/60'
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>

        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${filter}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map(item => (
              <div
                key={item.id}
                className="bg-cream rounded-lg p-5 border border-dark-chocolate/5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg text-dark-chocolate">
                      {lang === 'fr' ? item.name.fr : item.name.en}
                    </h3>
                    <p className="mt-1.5 text-xs font-body text-dark-chocolate/50 leading-relaxed">
                      {lang === 'fr' ? item.desc.fr : item.desc.en}
                    </p>
                  </div>
                  <span className="text-sm font-mono text-toasted-crust whitespace-nowrap">{item.price}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-1 flex-wrap">
                    {item.allergens.map(a => (
                      <span key={a} className="text-[10px] font-mono text-dark-chocolate/30 px-1.5 py-0.5 bg-dark-chocolate/5 rounded">
                        {a}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-1">
                    {item.seasonal && (
                      <span className="text-[10px] font-mono text-pistachio-green px-1.5 py-0.5 bg-pistachio-green/10 rounded">
                        {t('saison', 'seasonal')}
                      </span>
                    )}
                    {item.preorder && (
                      <span className="text-[10px] font-mono text-butter-gold px-1.5 py-0.5 bg-butter-gold/10 rounded">
                        {t('précommande', 'pre-order')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-dark-chocolate/40 mt-12 font-body">
            {t('Aucun produit trouvé pour ce filtre.', 'No products found for this filter.')}
          </p>
        )}
      </div>
    </div>
  );
}