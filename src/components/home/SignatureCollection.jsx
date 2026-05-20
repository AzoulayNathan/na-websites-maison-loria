import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';

const signatureIds = ['tarte-noisette', 'eclair-vanille', 'millefeuille', 'pavlova-agrumes', 'cake-citron', 'brioche-soleil'];

export default function SignatureCollection() {
  const { t, lang } = useLang();
  const items = products.filter(p => signatureIds.includes(p.id));

  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">
            {t('Maison Loria', 'Maison Loria')}
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-dark-chocolate">
            {t('La collection signature', 'The signature collection')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-porcelain-white rounded-lg overflow-hidden border border-dark-chocolate/5 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-butter-gold/10 to-toasted-crust/10 flex items-center justify-center">
                <span className="font-heading text-2xl text-dark-chocolate/10 group-hover:text-dark-chocolate/20 transition-colors">
                  {lang === 'fr' ? item.name.fr : item.name.en}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-dark-chocolate">
                  {lang === 'fr' ? item.name.fr : item.name.en}
                </h3>
                <p className="mt-2 text-sm font-body text-dark-chocolate/55 leading-relaxed line-clamp-2">
                  {lang === 'fr' ? item.desc.fr : item.desc.en}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-mono text-toasted-crust">{item.price}</span>
                  <div className="flex gap-1">
                    {item.allergens.slice(0, 3).map(a => (
                      <span key={a} className="text-[10px] font-mono text-dark-chocolate/30 px-1.5 py-0.5 bg-dark-chocolate/5 rounded">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                {item.preorder && (
                  <Link
                    to="/precommande"
                    className="mt-4 block text-center py-2 border border-dark-chocolate/10 text-dark-chocolate text-xs font-body rounded hover:bg-dark-chocolate hover:text-cream transition-colors"
                  >
                    {t('Précommander', 'Pre-order')}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}