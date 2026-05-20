import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function TimeBlock({ time, titleFr, titleEn, textFr, textEn, products, ctaFr, ctaEn, ctaLink, reverse, bgClass }) {
  const { t, lang } = useLang();

  return (
    <section className={`py-16 sm:py-24 ${bgClass || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
          {/* Time + Text */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/70 uppercase">
                {time}
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-dark-chocolate leading-tight">
                {t(titleFr, titleEn)}
              </h2>
              <p className="mt-4 font-body text-base text-dark-chocolate/60 leading-relaxed">
                {t(textFr, textEn)}
              </p>

              {/* Product pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {products.map(p => (
                  <span
                    key={p.id}
                    className="inline-block px-3 py-1.5 bg-cream text-dark-chocolate/70 text-xs font-body rounded-full border border-dark-chocolate/5"
                  >
                    {lang === 'fr' ? p.name.fr : p.name.en}
                  </span>
                ))}
              </div>

              <Link
                to={ctaLink}
                className="inline-block mt-8 px-6 py-3 bg-dark-chocolate text-cream text-sm font-body rounded hover:bg-dark-chocolate/90 transition-colors"
              >
                {t(ctaFr, ctaEn)}
              </Link>
            </motion.div>
          </div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-cream via-butter-gold/10 to-toasted-crust/10 border border-dark-chocolate/5 flex items-center justify-center">
              <span className="font-heading text-4xl sm:text-5xl text-dark-chocolate/10">{time}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}