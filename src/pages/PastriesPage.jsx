import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/lib/data/products';

export default function PastriesPage() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(null);
  const pastries = products.filter(p => p.category === 'pastry');

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Vitrine', 'Display')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Pâtisseries & gâteaux', 'Pastries & cakes')}</h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-base text-dark-chocolate/50">
            {t(
              'Créations fines, saisonnières et précises — à déguster sur place ou à emporter.',
              'Fine, seasonal and precise creations — to enjoy here or take away.'
            )}
          </p>
        </div>

        {/* Glass display layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {pastries.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setSelected(selected?.id === item.id ? null : item)}
              className={`text-left rounded-lg p-4 border transition-all ${
                selected?.id === item.id
                  ? 'bg-dark-chocolate text-cream border-dark-chocolate'
                  : 'bg-cream border-dark-chocolate/5 hover:shadow-md'
              }`}
            >
              <div className={`aspect-square rounded bg-gradient-to-br ${
                selected?.id === item.id ? 'from-butter-gold/20 to-toasted-crust/20' : 'from-butter-gold/5 to-toasted-crust/5'
              } flex items-center justify-center mb-3`}>
                <span className={`font-heading text-sm ${selected?.id === item.id ? 'text-cream/30' : 'text-dark-chocolate/10'}`}>
                  {lang === 'fr' ? item.name.fr : item.name.en}
                </span>
              </div>
              <h3 className={`font-heading text-base ${selected?.id === item.id ? 'text-cream' : 'text-dark-chocolate'}`}>
                {lang === 'fr' ? item.name.fr : item.name.en}
              </h3>
              <span className={`text-xs font-mono ${selected?.id === item.id ? 'text-butter-gold' : 'text-toasted-crust'}`}>{item.price}</span>
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div className="bg-cream rounded-lg p-6 border border-dark-chocolate/5">
                <h3 className="font-heading text-2xl text-dark-chocolate">{lang === 'fr' ? selected.name.fr : selected.name.en}</h3>
                <p className="mt-3 font-body text-sm text-dark-chocolate/60 leading-relaxed">{lang === 'fr' ? selected.desc.fr : selected.desc.en}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.allergens.map(a => (
                    <span key={a} className="text-[10px] font-mono text-dark-chocolate/40 px-2 py-1 bg-dark-chocolate/5 rounded">{a}</span>
                  ))}
                  {selected.seasonal && <span className="text-[10px] font-mono text-pistachio-green px-2 py-1 bg-pistachio-green/10 rounded">{t('saison', 'seasonal')}</span>}
                </div>
                <div className="mt-4 flex gap-3">
                  <Link to="/precommande" className="px-5 py-2 bg-butter-gold text-dark-chocolate text-sm font-body rounded hover:bg-butter-gold/90 transition-colors">
                    {t('Précommander', 'Pre-order')}
                  </Link>
                  <Link to="/gateaux" className="px-5 py-2 border border-dark-chocolate/15 text-dark-chocolate text-sm font-body rounded hover:bg-dark-chocolate hover:text-cream transition-colors">
                    {t('Gâteaux sur commande', 'Custom cakes')}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}