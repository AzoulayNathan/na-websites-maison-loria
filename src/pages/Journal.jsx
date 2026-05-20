import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { articles } from '@/lib/data/journal';

export default function Journal() {
  const { t, lang } = useLang();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">Maison Loria</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Notes de saison', 'Seasonal notes')}</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-cream rounded-lg p-6 border border-dark-chocolate/5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-toasted-crust/60 px-2 py-0.5 bg-toasted-crust/5 rounded">
                  {lang === 'fr' ? article.category.fr : article.category.en}
                </span>
                <span className="text-[10px] font-mono text-dark-chocolate/30">{article.readTime}</span>
              </div>
              <h2 className="font-heading text-xl text-dark-chocolate leading-tight">
                {lang === 'fr' ? article.title.fr : article.title.en}
              </h2>
              <p className="mt-3 text-sm font-body text-dark-chocolate/50 leading-relaxed">
                {lang === 'fr' ? article.excerpt.fr : article.excerpt.en}
              </p>
              <span className="inline-block mt-4 text-xs font-body text-toasted-crust border-b border-toasted-crust/30">
                {t('Lire', 'Read')} →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}