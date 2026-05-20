import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TimeBlock from '@/components/home/TimeBlock';
import SignatureCollection from '@/components/home/SignatureCollection';
import MomentSelector from '@/components/home/MomentSelector';
import LocationsPreview from '@/components/home/LocationsPreview';
import FinalCTA from '@/components/home/FinalCTA';
import { products } from '@/lib/data/products';

const getProducts = (ids) => products.filter(p => ids.includes(p.id));

export default function Home() {
  return (
    <div>
      <HeroSection />

      <TimeBlock
        time="07:30"
        titleFr="La première fournée"
        titleEn="The first batch"
        textFr="Les pains sortent du four, les viennoiseries arrivent au comptoir, la journée commence par le croustillant."
        textEn="Breads emerge from the oven, viennoiseries reach the counter — the day begins with crunch."
        products={getProducts(['pain-loria', 'croissant-beurre', 'brioche-soleil', 'pain-graines'])}
        ctaFr="Voir pains & viennoiseries"
        ctaEn="View breads & viennoiseries"
        ctaLink="/pains-viennoiseries"
      />

      <TimeBlock
        time="10:00"
        titleFr="Café, beurre et silence heureux"
        titleEn="Coffee, butter and happy silence"
        textFr="Un espresso, une viennoiserie encore tiède, quelques minutes pour soi."
        textEn="An espresso, a still-warm viennoiserie, a few minutes for yourself."
        products={getProducts(['cappuccino', 'croissant-beurre', 'brioche-soleil', 'eclair-vanille'])}
        ctaFr="Voir café & pauses"
        ctaEn="View coffee & breaks"
        ctaLink="/cafe-brunch"
        reverse
        bgClass="bg-cream/50"
      />

      <TimeBlock
        time="12:30"
        titleFr="La table salée"
        titleEn="The savory table"
        textFr="Brunch, tartines, assiettes simples et produits de saison pour une pause généreuse mais précise."
        textEn="Brunch, toasts, simple plates and seasonal produce for a generous yet precise pause."
        products={getProducts(['brunch-rivage', 'tartine-ricotta', 'oeufs-cremeux', 'assiette-saumon'])}
        ctaFr="Découvrir brunch & café"
        ctaEn="Explore brunch & café"
        ctaLink="/cafe-brunch"
      />

      <TimeBlock
        time="16:00"
        titleFr="La pause sucrée"
        titleEn="The sweet pause"
        textFr="Pâtisseries fines, cakes de saison et douceurs à partager ou garder jalousement."
        textEn="Fine pastries, seasonal cakes and treats to share — or keep for yourself."
        products={getProducts(['tarte-noisette', 'millefeuille', 'pavlova-agrumes', 'cake-citron'])}
        ctaFr="Voir les pâtisseries"
        ctaEn="View pastries"
        ctaLink="/patisseries"
        reverse
        bgClass="bg-cream/50"
      />

      <TimeBlock
        time="19:00"
        titleFr="Les moments à composer"
        titleEn="Moments to compose"
        textFr="Buffets sucrés, pièces cocktail, gâteaux de célébration et tables gourmandes pour événements privés ou professionnels."
        textEn="Sweet buffets, cocktail pieces, celebration cakes and gourmet tables for private or corporate events."
        products={getProducts(['collection-ceremonie', 'gouter-signature', 'bureau-doux'])}
        ctaFr="Demander un devis événement"
        ctaEn="Request an event quote"
        ctaLink="/devis-evenement"
      />

      <TimeBlock
        time={<span className="text-base">Week-end</span>}
        titleFr="Préparer sans courir"
        titleEn="Prepare without rushing"
        textFr="Précommandez vos essentiels, choisissez votre boutique et récupérez votre commande au bon moment."
        textEn="Pre-order your essentials, choose your location and pick up your order at the right time."
        products={getProducts(['table-du-matin', 'gouter-signature', 'pain-loria'])}
        ctaFr="Précommander"
        ctaEn="Pre-order"
        ctaLink="/precommande"
        reverse
        bgClass="bg-cream/50"
      />

      <SignatureCollection />
      <MomentSelector />
      <LocationsPreview />
      <FinalCTA />
    </div>
  );
}