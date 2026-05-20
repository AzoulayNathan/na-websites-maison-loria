import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-chocolate">
      {/* Warm glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: revealed ? 0.3 : 0, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-radial from-butter-gold/20 via-transparent to-transparent"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(232,184,90,0.15) 0%, transparent 70%)' }}
      />

      {/* Subtle golden line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: revealed ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="absolute left-1/2 top-[15%] w-px h-[15%] bg-gradient-to-b from-transparent via-butter-gold/40 to-transparent origin-top"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-xs tracking-[0.3em] text-butter-gold/70 uppercase mb-6"
        >
          {t('Boulangerie · Pâtisserie · Café', 'Bakery · Pastry · Café')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 30 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] tracking-wide"
        >
          {t(
            'Le goût du matin, la précision d\'une maison.',
            'The taste of morning, shaped with house precision.'
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 font-body text-base sm:text-lg text-cream/60 max-w-2xl mx-auto leading-relaxed"
        >
          {t(
            'Pains, viennoiseries, pâtisseries, brunch et compositions événementielles pour les moments simples comme les grandes tables.',
            'Breads, viennoiseries, pastries, brunch and event compositions for everyday rituals and larger tables.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/precommande"
            className="px-8 py-3.5 bg-butter-gold text-dark-chocolate font-body font-medium text-sm rounded hover:bg-butter-gold/90 transition-colors"
          >
            {t('Précommander', 'Pre-order')}
          </Link>
          <Link
            to="/menu"
            className="px-8 py-3.5 border border-cream/20 text-cream font-body text-sm rounded hover:border-cream/40 transition-colors"
          >
            {t('Découvrir le menu', 'Explore the menu')}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-12 font-mono text-[10px] tracking-[0.25em] text-cream/25 uppercase"
        >
          {t(
            'Bordeaux · Biarritz · Click & Collect · Événements',
            'Bordeaux · Biarritz · Click & Collect · Events'
          )}
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-porcelain-white to-transparent" />
    </section>
  );
}