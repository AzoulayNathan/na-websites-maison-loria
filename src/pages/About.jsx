import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const values = [
  { fr: 'Précision', en: 'Precision', descFr: 'Chaque geste compte. Du pesage à la finition.', descEn: 'Every gesture matters. From weighing to finishing.' },
  { fr: 'Générosité', en: 'Generosity', descFr: 'Généreux dans le goût, pas dans l\'excès.', descEn: 'Generous in flavor, not in excess.' },
  { fr: 'Saison', en: 'Season', descFr: 'Les ingrédients guident la collection.', descEn: 'Ingredients guide the collection.' },
  { fr: 'Simplicité', en: 'Simplicity', descFr: 'Pas de gadgets. Des fondamentaux bien faits.', descEn: 'No gimmicks. Well-made fundamentals.' },
  { fr: 'Accueil', en: 'Welcome', descFr: 'Chaque visite est un moment, pas une transaction.', descEn: 'Every visit is a moment, not a transaction.' },
];

const team = [
  { role: { fr: 'Chef boulanger', en: 'Head Baker' }, descFr: 'Responsable des fermentations, des pains et des viennoiseries.', descEn: 'In charge of fermentation, breads and viennoiseries.' },
  { role: { fr: 'Chef pâtissier·ère', en: 'Pastry Lead' }, descFr: 'Création des pâtisseries, cakes et collections de saison.', descEn: 'Creation of pastries, cakes and seasonal collections.' },
  { role: { fr: 'Responsable café & service', en: 'Coffee & Service Lead' }, descFr: 'L\'expérience en salle, le café et le brunch.', descEn: 'Front of house experience, coffee and brunch.' },
  { role: { fr: 'Coordinatrice événements', en: 'Event Coordinator' }, descFr: 'Organisation et suivi des commandes événementielles.', descEn: 'Event order coordination and follow-up.' },
  { role: { fr: 'Développement produit', en: 'Product Development' }, descFr: 'Recherche de saveurs, tests et nouvelles recettes.', descEn: 'Flavor research, testing and new recipes.' },
];

export default function About() {
  const { t, lang } = useLang();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('La maison', 'The house')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate leading-tight">
            {t('Une maison de goût, pas seulement une vitrine', 'A house of taste, not just a counter')}
          </h1>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl text-dark-chocolate leading-relaxed text-center max-w-3xl mx-auto"
          >
            {t(
              'Maison Loria existe pour accompagner les moments de la journée avec des produits précis, généreux et faits avec attention.',
              'Maison Loria exists to accompany the day with precise, generous and carefully made products.'
            )}
          </motion.p>
        </section>

        {/* Philosophy */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-8 text-center">{t('Ce que nous croyons', 'What we believe')}</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { fr: 'Le matin compte. C\'est le premier goût de la journée.', en: 'Morning matters. It\'s the first taste of the day.' },
              { fr: 'L\'artisanat doit rester généreux.', en: 'Craft should remain generous.' },
              { fr: 'La pâtisserie peut être élégante sans être froide.', en: 'Pastry can be elegant without being cold.' },
              { fr: 'Les événements méritent mieux qu\'un traiteur générique.', en: 'Events deserve more than generic catering.' },
              { fr: 'La saisonnalité guide la collection.', en: 'Seasonality guides the collection.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 py-3 border-b border-dark-chocolate/5"
              >
                <span className="font-mono text-xs text-butter-gold mt-0.5">0{i + 1}</span>
                <p className="font-body text-dark-chocolate/70">{lang === 'fr' ? item.fr : item.en}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-8 text-center">{t('L\'équipe', 'The team')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-cream rounded-lg p-5 border border-dark-chocolate/5"
              >
                <h3 className="font-heading text-lg text-dark-chocolate">{lang === 'fr' ? member.role.fr : member.role.en}</h3>
                <p className="mt-2 text-xs font-body text-dark-chocolate/50">{lang === 'fr' ? member.descFr : member.descEn}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-8 text-center">{t('Nos valeurs', 'Our values')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((v, i) => (
              <div key={i} className="px-5 py-3 bg-cream rounded-lg border border-dark-chocolate/5 text-center">
                <span className="font-heading text-base text-dark-chocolate">{lang === 'fr' ? v.fr : v.en}</span>
                <p className="text-xs font-body text-dark-chocolate/40 mt-1">{lang === 'fr' ? v.descFr : v.descEn}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link to="/menu" className="inline-block px-8 py-3 bg-butter-gold text-dark-chocolate text-sm font-body font-medium rounded hover:bg-butter-gold/90 transition-colors">
            {t('Découvrir le menu', 'Explore the menu')}
          </Link>
        </div>
      </div>
    </div>
  );
}