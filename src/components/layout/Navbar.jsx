import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/menu', fr: 'Menu', en: 'Menu' },
  { path: '/pains-viennoiseries', fr: 'Pains', en: 'Breads' },
  { path: '/patisseries', fr: 'Pâtisseries', en: 'Pastries' },
  { path: '/cafe-brunch', fr: 'Café & Brunch', en: 'Café & Brunch' },
  { path: '/evenements', fr: 'Événements', en: 'Events' },
  { path: '/gateaux', fr: 'Gâteaux', en: 'Cakes' },
  { path: '/boutiques', fr: 'Boutiques', en: 'Locations' },
  { path: '/a-propos', fr: 'À propos', en: 'About' },
  { path: '/contact', fr: 'Contact', en: 'Contact' },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-porcelain-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-butter-gold flex items-center justify-center">
                <span className="font-heading text-sm font-semibold text-dark-chocolate">ML</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-lg sm:text-xl tracking-wide text-dark-chocolate font-medium">Maison Loria</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.slice(0, 7).map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-body tracking-wide transition-colors ${location.pathname === item.path ? 'text-toasted-crust' : 'text-dark-chocolate/70 hover:text-dark-chocolate'}`}
                >
                  {lang === 'fr' ? item.fr : item.en}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="text-xs font-mono tracking-widest text-dark-chocolate/60 hover:text-dark-chocolate transition-colors px-2 py-1 border border-dark-chocolate/10 rounded"
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>
              <Link
                to="/precommande"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-butter-gold text-dark-chocolate text-sm font-body font-medium rounded hover:bg-butter-gold/80 transition-colors"
              >
                {t('Précommander', 'Pre-order')}
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 text-dark-chocolate"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-porcelain-white pt-20 overflow-y-auto lg:hidden"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-3 font-heading text-2xl tracking-wide border-b border-dark-chocolate/5 ${location.pathname === item.path ? 'text-toasted-crust' : 'text-dark-chocolate'}`}
                >
                  {lang === 'fr' ? item.fr : item.en}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Link to="/precommande" className="text-center py-3 bg-butter-gold text-dark-chocolate font-body font-medium rounded">
                  {t('Précommander', 'Pre-order')}
                </Link>
                <Link to="/devis-evenement" className="text-center py-3 border border-dark-chocolate/20 text-dark-chocolate font-body rounded">
                  {t('Devis événement', 'Event quote')}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-porcelain-white/95 backdrop-blur-md border-t border-dark-chocolate/10 sm:hidden">
        <div className="flex items-center justify-around py-2">
          <Link to="/precommande" className="flex flex-col items-center gap-0.5 text-dark-chocolate/70">
            <span className="text-[10px] font-body">{t('Commander', 'Order')}</span>
          </Link>
          <a href="tel:+33557842611" className="flex flex-col items-center gap-0.5 text-dark-chocolate/70">
            <Phone size={16} />
            <span className="text-[10px] font-body">{t('Appeler', 'Call')}</span>
          </a>
          <Link to="/boutiques" className="flex flex-col items-center gap-0.5 text-dark-chocolate/70">
            <span className="text-[10px] font-body">{t('Itinéraire', 'Directions')}</span>
          </Link>
        </div>
      </div>
    </>
  );
}