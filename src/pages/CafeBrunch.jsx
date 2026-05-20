import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function CafeBrunch() {
  const { t, lang } = useLang();
  const coffees = products.filter(p => p.category === 'coffee');
  const brunches = products.filter(p => p.category === 'brunch');
  const [submitted, setSubmitted] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('Demande envoyée !', 'Request sent!'));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Chaque jour', 'Every day')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Café & brunch', 'Café & brunch')}</h1>
          <p className="mt-4 max-w-2xl mx-auto font-body text-base text-dark-chocolate/50">
            {t(
              'Le matin commence par le café. Le week-end s\'installe au brunch.',
              'Morning starts with coffee. The weekend settles into brunch.'
            )}
          </p>
        </div>

        {/* Coffees */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-6">{t('Café & boissons', 'Coffee & drinks')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coffees.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-cream rounded-lg px-5 py-4 border border-dark-chocolate/5">
                <div>
                  <h3 className="font-heading text-base text-dark-chocolate">{lang === 'fr' ? item.name.fr : item.name.en}</h3>
                  <p className="text-xs font-body text-dark-chocolate/40">{lang === 'fr' ? item.desc.fr : item.desc.en}</p>
                </div>
                <span className="text-sm font-mono text-toasted-crust ml-3">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Brunch */}
        <section className="mb-16">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-6">{t('Brunch & salé', 'Brunch & savory')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brunches.map((item, i) => (
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
                <div className="mt-2 flex gap-1">
                  {item.allergens.map(a => (
                    <span key={a} className="text-[10px] font-mono text-dark-chocolate/30 px-1.5 py-0.5 bg-dark-chocolate/5 rounded">{a}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reservation */}
        <section className="max-w-xl mx-auto">
          <h2 className="font-heading text-2xl text-dark-chocolate mb-2 text-center">{t('Demande de réservation', 'Reservation request')}</h2>
          <p className="text-xs font-body text-dark-chocolate/40 text-center mb-6">
            {t('La confirmation dépend de la disponibilité.', 'Confirmation depends on availability.')}
          </p>
          {!submitted ? (
            <form onSubmit={handleReservation} className="space-y-4">
              <Select><SelectTrigger><SelectValue placeholder={t('Boutique', 'Location')} /></SelectTrigger><SelectContent><SelectItem value="bordeaux">Bordeaux</SelectItem><SelectItem value="biarritz">Biarritz</SelectItem></SelectContent></Select>
              <Input type="date" required />
              <Input type="time" required />
              <Input type="number" placeholder={t('Nombre de personnes', 'Number of guests')} min="1" required />
              <Textarea placeholder={t('Message (optionnel)', 'Message (optional)')} />
              <Button type="submit" className="w-full bg-butter-gold text-dark-chocolate hover:bg-butter-gold/90">{t('Envoyer', 'Send')}</Button>
            </form>
          ) : (
            <div className="text-center py-8 bg-cream rounded-lg">
              <p className="font-heading text-xl text-dark-chocolate">{t('Merci !', 'Thank you!')}</p>
              <p className="mt-2 text-sm font-body text-dark-chocolate/50">{t('Nous reviendrons vers vous pour confirmer.', 'We will get back to you to confirm.')}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}