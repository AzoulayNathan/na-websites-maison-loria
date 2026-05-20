import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-32 bg-dark-chocolate text-cream text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
            {t(
              'Un matin, une pause ou une table à préparer ?',
              'A morning, a pause or a table to prepare?'
            )}
          </h2>
          <p className="mt-6 font-body text-base text-cream/50 leading-relaxed max-w-xl mx-auto">
            {t(
              'Choisissez votre moment. Maison Loria s\'occupe du goût, du détail et du rythme.',
              'Choose your moment. Maison Loria takes care of taste, detail and rhythm.'
            )}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/precommande"
              className="px-8 py-3.5 bg-butter-gold text-dark-chocolate text-sm font-body font-medium rounded hover:bg-butter-gold/90 transition-colors"
            >
              {t('Précommander', 'Pre-order')}
            </Link>
            <Link
              to="/devis-evenement"
              className="px-8 py-3.5 border border-cream/20 text-cream text-sm font-body rounded hover:border-cream/40 transition-colors"
            >
              {t('Demander un devis', 'Request a quote')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}