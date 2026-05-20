import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const eventTypes = [
  { value: 'corporate', fr: 'Petit-déjeuner entreprise', en: 'Corporate breakfast' },
  { value: 'wedding', fr: 'Mariage', en: 'Wedding' },
  { value: 'private', fr: 'Réception privée', en: 'Private reception' },
  { value: 'birthday', fr: 'Anniversaire', en: 'Birthday' },
  { value: 'boutique', fr: 'Événement boutique', en: 'Boutique event' },
  { value: 'hotel', fr: 'Commande hôtel', en: 'Hotel order' },
  { value: 'other', fr: 'Autre', en: 'Other' },
];

const formats = [
  { value: 'breakfast-box', fr: 'Box petit-déjeuner', en: 'Breakfast box' },
  { value: 'dessert-table', fr: 'Table de desserts', en: 'Dessert table' },
  { value: 'pastries', fr: 'Pâtisseries', en: 'Pastries' },
  { value: 'cakes', fr: 'Gâteaux', en: 'Cakes' },
  { value: 'sweet-savory', fr: 'Sucré & salé', en: 'Sweet & savory' },
  { value: 'unsure', fr: 'Pas encore sûr·e', en: 'Not sure yet' },
];

export default function EventQuote() {
  const { t, lang } = useLang();
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
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">{t('Événements', 'Events')}</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Demander un devis événement', 'Request an event quote')}</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder={t('Nom', 'Name')} required />
            <Input type="email" placeholder="Email" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="tel" placeholder={t('Téléphone', 'Phone')} />
            <Input placeholder={t('Entreprise / organisation (optionnel)', 'Company / organization (optional)')} />
          </div>
          <Select>
            <SelectTrigger><SelectValue placeholder={t('Type d\'événement', 'Event type')} /></SelectTrigger>
            <SelectContent>{eventTypes.map(e => <SelectItem key={e.value} value={e.value}>{lang === 'fr' ? e.fr : e.en}</SelectItem>)}</SelectContent>
          </Select>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input type="date" required />
            <Select>
              <SelectTrigger><SelectValue placeholder={t('Ville', 'City')} /></SelectTrigger>
              <SelectContent>
                <SelectItem value="bordeaux">Bordeaux</SelectItem>
                <SelectItem value="biarritz">Biarritz</SelectItem>
                <SelectItem value="other">{t('Autre', 'Other')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input type="number" placeholder={t('Nombre d\'invités', 'Number of guests')} min="1" />
          <Select>
            <SelectTrigger><SelectValue placeholder={t('Format souhaité', 'Desired format')} /></SelectTrigger>
            <SelectContent>{formats.map(f => <SelectItem key={f.value} value={f.value}>{lang === 'fr' ? f.fr : f.en}</SelectItem>)}</SelectContent>
          </Select>
          <Select>
            <SelectTrigger><SelectValue placeholder={t('Livraison ou retrait', 'Delivery or pickup')} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="delivery">{t('Livraison', 'Delivery')}</SelectItem>
              <SelectItem value="pickup">{t('Retrait en boutique', 'Store pickup')}</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder={t('Budget indicatif (optionnel)', 'Indicative budget (optional)')} />
          <Textarea placeholder="Message" rows={4} />
          <Button type="submit" className="w-full bg-butter-gold text-dark-chocolate hover:bg-butter-gold/90 py-3">
            {t('Envoyer ma demande', 'Send my request')}
          </Button>
        </form>
      </div>
    </div>
  );
}