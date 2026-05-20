import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const occasions = [
  { value: 'birthday', fr: 'Anniversaire', en: 'Birthday' },
  { value: 'wedding', fr: 'Mariage', en: 'Wedding' },
  { value: 'office', fr: 'Célébration bureau', en: 'Office celebration' },
  { value: 'babyshower', fr: 'Baby shower', en: 'Baby shower' },
  { value: 'dinner', fr: 'Dîner', en: 'Dinner' },
  { value: 'other', fr: 'Autre', en: 'Other' },
];

const flavors = [
  { value: 'chocolate', fr: 'Chocolat', en: 'Chocolate' },
  { value: 'vanilla', fr: 'Vanille', en: 'Vanilla' },
  { value: 'citrus', fr: 'Agrumes', en: 'Citrus' },
  { value: 'hazelnut', fr: 'Noisette', en: 'Hazelnut' },
  { value: 'fruit', fr: 'Fruits', en: 'Fruit' },
  { value: 'seasonal', fr: 'Saison', en: 'Seasonal' },
];

const sizes = [
  { value: '4-6', fr: '4-6 personnes', en: '4-6 people' },
  { value: '8-10', fr: '8-10 personnes', en: '8-10 people' },
  { value: '12-16', fr: '12-16 personnes', en: '12-16 people' },
  { value: '20+', fr: '20+ personnes', en: '20+ people' },
];

export default function CelebrationCakes() {
  const { t, lang } = useLang();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('Demande envoyée !', 'Request sent!'));
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="font-heading text-3xl text-dark-chocolate">{t('Merci !', 'Thank you!')}</h1>
          <p className="mt-4 font-body text-dark-chocolate/50">
            {t(
              'L\'équipe Maison Loria analysera votre demande et reviendra vers vous avec une proposition adaptée.',
              'The Maison Loria team will review your request and respond with a suitable proposal.'
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Sur commande', 'Made to order')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Gâteaux de célébration', 'Celebration cakes')}</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map(s => (
            <div key={s} className={`w-10 h-1 rounded-full transition-colors ${step >= s ? 'bg-butter-gold' : 'bg-dark-chocolate/10'}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-heading text-xl text-dark-chocolate">{t('Occasion & taille', 'Occasion & size')}</h2>
              <Select onValueChange={v => setForm({ ...form, occasion: v })}>
                <SelectTrigger><SelectValue placeholder={t('Occasion', 'Occasion')} /></SelectTrigger>
                <SelectContent>{occasions.map(o => <SelectItem key={o.value} value={o.value}>{lang === 'fr' ? o.fr : o.en}</SelectItem>)}</SelectContent>
              </Select>
              <Select onValueChange={v => setForm({ ...form, size: v })}>
                <SelectTrigger><SelectValue placeholder={t('Taille', 'Size')} /></SelectTrigger>
                <SelectContent>{sizes.map(s => <SelectItem key={s.value} value={s.value}>{lang === 'fr' ? s.fr : s.en}</SelectItem>)}</SelectContent>
              </Select>
              <Button type="button" onClick={() => setStep(2)} className="w-full bg-dark-chocolate text-cream hover:bg-dark-chocolate/90">{t('Suivant', 'Next')}</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-heading text-xl text-dark-chocolate">{t('Saveur & message', 'Flavor & message')}</h2>
              <Select onValueChange={v => setForm({ ...form, flavor: v })}>
                <SelectTrigger><SelectValue placeholder={t('Direction de saveur', 'Flavor direction')} /></SelectTrigger>
                <SelectContent>{flavors.map(f => <SelectItem key={f.value} value={f.value}>{lang === 'fr' ? f.fr : f.en}</SelectItem>)}</SelectContent>
              </Select>
              <Input placeholder={t('Message sur le gâteau (optionnel)', 'Message on the cake (optional)')} onChange={e => setForm({ ...form, message: e.target.value })} />
              <Select onValueChange={v => setForm({ ...form, pickup: v })}>
                <SelectTrigger><SelectValue placeholder={t('Boutique de retrait', 'Pickup location')} /></SelectTrigger>
                <SelectContent><SelectItem value="bordeaux">Bordeaux</SelectItem><SelectItem value="biarritz">Biarritz</SelectItem></SelectContent>
              </Select>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">{t('Retour', 'Back')}</Button>
                <Button type="button" onClick={() => setStep(3)} className="flex-1 bg-dark-chocolate text-cream hover:bg-dark-chocolate/90">{t('Suivant', 'Next')}</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-heading text-xl text-dark-chocolate">{t('Vos coordonnées', 'Your details')}</h2>
              <Input placeholder={t('Nom', 'Name')} required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder={t('Téléphone', 'Phone')} />
              <Input type="date" required />
              <Textarea placeholder={t('Détails supplémentaires', 'Additional details')} />
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">{t('Retour', 'Back')}</Button>
                <Button type="submit" className="flex-1 bg-butter-gold text-dark-chocolate hover:bg-butter-gold/90">{t('Faire une demande de gâteau', 'Request a cake')}</Button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}