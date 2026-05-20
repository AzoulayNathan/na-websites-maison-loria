import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  const cols = [
    {
      title: t('Maison', 'House'),
      links: [
        { label: t('À propos', 'About'), to: '/a-propos' },
        { label: t('Boutiques', 'Locations'), to: '/boutiques' },
        { label: t('Journal', 'Journal'), to: '/journal' },
        { label: 'FAQ', to: '/faq' },
      ],
    },
    {
      title: t('Commander', 'Order'),
      links: [
        { label: t('Précommande', 'Pre-order'), to: '/precommande' },
        { label: t('Gâteaux', 'Cakes'), to: '/gateaux' },
        { label: t('Café & Brunch', 'Café & Brunch'), to: '/cafe-brunch' },
        { label: 'Click & Collect', to: '/precommande' },
      ],
    },
    {
      title: t('Événements', 'Events'),
      links: [
        { label: t('Traiteur', 'Catering'), to: '/evenements' },
        { label: t('Entreprises', 'Corporate'), to: '/evenements' },
        { label: t('Mariages', 'Weddings'), to: '/evenements' },
        { label: t('Devis événement', 'Event quote'), to: '/devis-evenement' },
      ],
    },
  ];

  return (
    <footer className="bg-dark-chocolate text-cream/80 pb-24 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="font-heading text-lg text-cream mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-body text-cream/60 hover:text-butter-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-body text-cream/60">
              <li><a href="mailto:bonjour@maisonloria.fr" className="hover:text-butter-gold transition-colors">bonjour@maisonloria.fr</a></li>
              <li><a href="mailto:commandes@maisonloria.fr" className="hover:text-butter-gold transition-colors">commandes@maisonloria.fr</a></li>
              <li><a href="mailto:evenements@maisonloria.fr" className="hover:text-butter-gold transition-colors">evenements@maisonloria.fr</a></li>
              <li className="pt-1 text-cream/40">Bordeaux · Biarritz</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-butter-gold/40 flex items-center justify-center">
              <span className="font-heading text-[10px] text-butter-gold">ML</span>
            </div>
            <span className="font-heading text-sm text-cream/50 tracking-wide">Maison Loria</span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-body text-cream/30">
            <Link to="/mentions-legales" className="hover:text-cream/50">{t('Mentions légales', 'Legal Notice')}</Link>
            <Link to="/confidentialite" className="hover:text-cream/50">{t('Confidentialité', 'Privacy')}</Link>
            <Link to="/conditions" className="hover:text-cream/50">{t('Conditions', 'Terms')}</Link>
            <Link to="/cookies" className="hover:text-cream/50">Cookies</Link>
            <Link to="/allergenes" className="hover:text-cream/50">{t('Allergènes', 'Allergens')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}