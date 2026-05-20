import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const inquiryTypes = [
  { value: 'preorder', fr: 'Précommande', en: 'Pre-order' },
  { value: 'cake', fr: 'Gâteau', en: 'Cake' },
  { value: 'event', fr: 'Événement', en: 'Event' },
  { value: 'brunch', fr: 'Brunch', en: 'Brunch' },
  { value: 'press', fr: 'Presse', en: 'Press' },
  { value: 'general', fr: 'Question générale', en: 'General question' },
];

const contactCards = [
  { title: 'Bordeaux', icon: MapPin, detail: '+33 5 57 84 26 11', sub: '18 Rue des Carmes' },
  { title: 'Biarritz', icon: MapPin, detail: '+33 5 59 42 18 73', sub: '7 Place Sainte-Claire' },
  { title: { fr: 'Événements', en: 'Events' }, icon: Mail, detail: 'evenements@maisonloria.fr', sub: null },
  { title: { fr: 'Commandes', en: 'Orders' }, icon: Mail, detail: 'commandes@maisonloria.fr', sub: null },
];

export default function Contact() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('Message envoyé !', 'Message sent!'));
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Nous contacter', 'Contact us')}</h1>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-cream rounded-lg p-4 border border-dark-chocolate/5 text-center"
            >
              <card.icon size={16} className="mx-auto text-toasted-crust/60 mb-2" />
              <h3 className="font-heading text-sm text-dark-chocolate">
                {typeof card.title === 'string' ? card.title : (lang === 'fr' ? card.title.fr : card.title.en)}
              </h3>
              <p className="text-xs font-body text-dark-chocolate/50 mt-1">{card.detail}</p>
              {card.sub && <p className="text-[10px] font-body text-dark-chocolate/30 mt-0.5">{card.sub}</p>}
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder={t('Nom', 'Name')} required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder={t('Téléphone', 'Phone')} />
              <Select>
                <SelectTrigger><SelectValue placeholder={t('Boutique', 'Location')} /></SelectTrigger>
                <SelectContent><SelectItem value="bordeaux">Bordeaux</SelectItem><SelectItem value="biarritz">Biarritz</SelectItem></SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder={t('Type de demande', 'Inquiry type')} /></SelectTrigger>
                <SelectContent>{inquiryTypes.map(it => <SelectItem key={it.value} value={it.value}>{lang === 'fr' ? it.fr : it.en}</SelectItem>)}</SelectContent>
              </Select>
              <Textarea placeholder="Message" rows={4} required />
              <Button type="submit" className="w-full bg-butter-gold text-dark-chocolate hover:bg-butter-gold/90">{t('Envoyer', 'Send')}</Button>
            </form>
          ) : (
            <div className="text-center py-8 bg-cream rounded-lg">
              <p className="font-heading text-xl text-dark-chocolate">{t('Merci !', 'Thank you!')}</p>
              <p className="mt-2 text-sm font-body text-dark-chocolate/50">{t('Nous reviendrons vers vous.', 'We will get back to you.')}</p>
            </div>
          )}
        </div>

        {/* Quick CTA */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: t('Décrire mon projet', 'Describe my project'), to: '/devis-evenement' },
            { label: t('Précommander', 'Pre-order'), to: '/precommande' },
            { label: t('Voir le menu', 'View menu'), to: '/menu' },
          ].map(item => (
            <Link key={item.to} to={item.to} className="text-center py-4 bg-cream rounded-lg border border-dark-chocolate/5 text-sm font-body text-dark-chocolate hover:bg-dark-chocolate hover:text-cream transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}