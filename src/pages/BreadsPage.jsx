import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';

export default function BreadsPage() {
  const { t, lang } = useLang();
  const breads = products.filter(p => p.category === 'bread');
  const viennoiseries = products.filter(p => p.category === 'viennoiserie');

  const Section = ({ title, items }) => (
    <div className="mb-16">
      <h2 className="font-heading text-2xl sm:text-3xl text-dark-chocolate mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-cream rounded-lg p-5 border border-dark-chocolate/5"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-heading text-lg text-dark-chocolate">{lang === 'fr' ? item.name.fr : item.name.en}</h3>
              <span className="text-sm font-mono text-toasted-crust">{item.price}</span>
            </div>
            <p className="mt-2 text-xs font-body text-dark-chocolate/50 leading-relaxed">{lang === 'fr' ? item.desc.fr : item.desc.en}</p>
            <div className="mt-3 flex gap-1">
              {item.allergens.map(a => (
                <span key={a} className="text-[10px] font-mono text-dark-chocolate/30 px-1.5 py-0.5 bg-dark-chocolate/5 rounded">{a}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Du four au comptoir', 'From oven to counter')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Pains & viennoiseries', 'Bread & viennoiseries')}</h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-base text-dark-chocolate/50">
            {t(
              'Fermentation longue, farines choisies, beurre frais — chaque matin recommence par le geste du boulanger.',
              'Long fermentation, selected flours, fresh butter — every morning begins with the baker\'s craft.'
            )}
          </p>
        </div>

        <Section title={t('Pains', 'Breads')} items={breads} />
        <Section title={t('Viennoiseries', 'Viennoiseries')} items={viennoiseries} />

        <div className="text-center mt-8">
          <p className="text-xs font-body text-dark-chocolate/40 mb-6">
            {t('La disponibilité peut varier selon le jour et la boutique.', 'Availability may vary by day and location.')}
          </p>
          <Link to="/precommande" className="inline-block px-8 py-3 bg-butter-gold text-dark-chocolate text-sm font-body font-medium rounded hover:bg-butter-gold/90 transition-colors">
            {t('Précommander pour demain', 'Pre-order for tomorrow')}
          </Link>
        </div>
      </div>
    </div>
  );
}