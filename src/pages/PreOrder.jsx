import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Minus, X } from 'lucide-react';
import { toast } from 'sonner';

export default function PreOrder() {
  const { t, lang } = useLang();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [cart, setCart] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const preorderItems = products.filter(p => p.preorder);
  const available = location ? preorderItems.filter(p => p.locations.includes(location)) : preorderItems;

  const addItem = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeItem = (id) => setCart(prev => {
    const next = { ...prev };
    if (next[id] > 1) next[id]--;
    else delete next[id];
    return next;
  });

  const cartItems = Object.entries(cart).map(([id, qty]) => ({
    product: products.find(p => p.id === id),
    qty,
  })).filter(i => i.product);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('Précommande envoyée !', 'Pre-order sent!'));
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="font-heading text-3xl text-dark-chocolate">{t('Merci !', 'Thank you!')}</h1>
          <p className="mt-4 font-body text-dark-chocolate/50">
            {t(
              'Certaines commandes nécessitent une confirmation de disponibilité avant validation. Nous reviendrons vers vous.',
              'Some orders require availability confirmation. We will get back to you.'
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-toasted-crust/60 uppercase">Click & Collect</span>
          <h1 className="mt-3 font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Précommande', 'Pre-order')}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Selection */}
          <div className="lg:w-2/3">
            <div className="flex gap-3 mb-6">
              <Select onValueChange={setLocation}>
                <SelectTrigger className="w-40"><SelectValue placeholder={t('Boutique', 'Location')} /></SelectTrigger>
                <SelectContent><SelectItem value="bordeaux">Bordeaux</SelectItem><SelectItem value="biarritz">Biarritz</SelectItem></SelectContent>
              </Select>
              <Input type="date" className="w-40" value={date} onChange={e => setDate(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {available.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-cream rounded-lg px-4 py-3 border border-dark-chocolate/5">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-sm text-dark-chocolate truncate">{lang === 'fr' ? item.name.fr : item.name.en}</h3>
                    <span className="text-xs font-mono text-toasted-crust">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    {cart[item.id] > 0 && (
                      <>
                        <button onClick={() => removeItem(item.id)} className="w-6 h-6 rounded-full bg-dark-chocolate/10 flex items-center justify-center"><Minus size={12} /></button>
                        <span className="text-sm font-mono w-4 text-center">{cart[item.id]}</span>
                      </>
                    )}
                    <button onClick={() => addItem(item.id)} className="w-6 h-6 rounded-full bg-butter-gold flex items-center justify-center"><Plus size={12} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-cream rounded-lg p-6 border border-dark-chocolate/5">
              <h2 className="font-heading text-xl text-dark-chocolate mb-4">{t('Votre sélection', 'Your selection')}</h2>
              {cartItems.length === 0 ? (
                <p className="text-sm font-body text-dark-chocolate/40">{t('Aucun produit sélectionné.', 'No products selected.')}</p>
              ) : (
                <div className="space-y-2 mb-4">
                  {cartItems.map(({ product, qty }) => (
                    <div key={product.id} className="flex justify-between items-center text-sm">
                      <span className="font-body text-dark-chocolate/70">{qty}x {lang === 'fr' ? product.name.fr : product.name.en}</span>
                      <button onClick={() => setCart(prev => { const n = { ...prev }; delete n[product.id]; return n; })}><X size={12} className="text-dark-chocolate/30" /></button>
                    </div>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-3 mt-4 border-t border-dark-chocolate/10 pt-4">
                <Input placeholder={t('Nom', 'Name')} required />
                <Input type="email" placeholder="Email" required />
                <Input type="tel" placeholder={t('Téléphone', 'Phone')} />
                <Textarea placeholder={t('Notes', 'Notes')} rows={2} />
                <Button type="submit" disabled={cartItems.length === 0} className="w-full bg-butter-gold text-dark-chocolate hover:bg-butter-gold/90">
                  {t('Envoyer ma précommande', 'Send my pre-order')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}