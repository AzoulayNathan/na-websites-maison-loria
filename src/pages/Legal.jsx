import React from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const pages = {
  '/mentions-legales': {
    title: { fr: 'Mentions légales', en: 'Legal Notice' },
    content: { fr: `Maison Loria — Boulangerie, Pâtisserie, Café\n\nSiège social : 18 Rue des Carmes, 33000 Bordeaux, France\nTéléphone : +33 5 57 84 26 11\nEmail : bonjour@maisonloria.fr\n\nDirecteur de la publication : Maison Loria\nHébergement : Base44 Platform\n\nCe site est édité par Maison Loria. Les informations présentes sur ce site sont fournies à titre indicatif. Maison Loria se réserve le droit de modifier le contenu à tout moment sans préavis.`, en: `Maison Loria — Bakery, Pastry, Café\n\nRegistered address: 18 Rue des Carmes, 33000 Bordeaux, France\nPhone: +33 5 57 84 26 11\nEmail: bonjour@maisonloria.fr\n\nPublisher: Maison Loria\nHosting: Base44 Platform\n\nThis site is published by Maison Loria. Information on this site is provided for indicative purposes. Maison Loria reserves the right to modify content at any time without notice.` },
  },
  '/confidentialite': {
    title: { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
    content: { fr: `Maison Loria s'engage à protéger la vie privée des visiteurs de son site.\n\nDonnées collectées : nom, email, téléphone et messages transmis via les formulaires de contact, précommande et événements.\n\nUtilisation : les données sont utilisées uniquement pour traiter vos demandes et améliorer nos services.\n\nConservation : les données sont conservées pendant une durée raisonnable nécessaire au traitement de vos demandes.\n\nDroits : conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à bonjour@maisonloria.fr pour exercer vos droits.`, en: `Maison Loria is committed to protecting the privacy of its website visitors.\n\nData collected: name, email, phone number and messages submitted through contact, pre-order and event forms.\n\nUse: data is used solely to process your requests and improve our services.\n\nRetention: data is kept for a reasonable period necessary to process your requests.\n\nRights: in accordance with GDPR, you have the right to access, rectify and delete your data. Contact us at bonjour@maisonloria.fr to exercise your rights.` },
  },
  '/conditions': {
    title: { fr: 'Conditions d\'utilisation', en: 'Terms of Use' },
    content: { fr: `L'utilisation du site www.maisonloria.fr implique l'acceptation des présentes conditions.\n\nPropriété intellectuelle : l'ensemble du contenu (textes, images, logos) est la propriété de Maison Loria et ne peut être reproduit sans autorisation.\n\nPrécommandes : les précommandes passées sur le site sont soumises à confirmation de disponibilité. Les prix indiqués sont à titre indicatif.\n\nResponsabilité : Maison Loria ne saurait être tenue responsable des interruptions de service ou erreurs sur le site.`, en: `Use of the website www.maisonloria.fr implies acceptance of these terms.\n\nIntellectual property: all content (text, images, logos) is the property of Maison Loria and may not be reproduced without authorization.\n\nPre-orders: pre-orders placed on the site are subject to availability confirmation. Prices shown are indicative.\n\nLiability: Maison Loria cannot be held responsible for service interruptions or errors on the site.` },
  },
  '/cookies': {
    title: { fr: 'Politique de cookies', en: 'Cookie Policy' },
    content: { fr: `Ce site utilise des cookies essentiels au bon fonctionnement du site.\n\nCookies techniques : nécessaires au fonctionnement du site (préférence de langue, session).\n\nCookies analytiques : nous pouvons utiliser des cookies pour comprendre l'utilisation du site et améliorer nos services.\n\nVous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.`, en: `This site uses essential cookies for proper website functionality.\n\nTechnical cookies: necessary for site operation (language preference, session).\n\nAnalytical cookies: we may use cookies to understand site usage and improve our services.\n\nYou can manage your cookie preferences in your browser settings.` },
  },
  '/allergenes': {
    title: { fr: 'Allergènes & informations produits', en: 'Allergens & Product Information' },
    content: { fr: `Les allergènes principaux sont indiqués pour chaque produit sur notre site et en boutique.\n\nNos produits sont fabriqués dans un atelier qui utilise : gluten (blé), lait, œufs, fruits à coque (noisettes, amandes, pistaches), sésame.\n\nUne contamination croisée est possible malgré nos précautions.\n\nPour toute question spécifique concernant vos besoins alimentaires, veuillez contacter directement la boutique ou nous écrire à bonjour@maisonloria.fr.\n\nMaison Loria ne peut garantir l'absence totale de traces d'allergènes dans ses produits.`, en: `Main allergens are listed for each product on our website and in store.\n\nOur products are made in a workshop that uses: gluten (wheat), milk, eggs, tree nuts (hazelnuts, almonds, pistachios), sesame.\n\nCross-contamination is possible despite our precautions.\n\nFor specific questions about your dietary needs, please contact the store directly or write to us at bonjour@maisonloria.fr.\n\nMaison Loria cannot guarantee the complete absence of allergen traces in its products.` },
  },
};

export default function Legal() {
  const { lang } = useLang();
  const location = useLocation();
  const page = pages[location.pathname];

  if (!page) return null;

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl text-dark-chocolate mb-8">
          {lang === 'fr' ? page.title.fr : page.title.en}
        </h1>
        <div className="font-body text-sm text-dark-chocolate/60 leading-relaxed whitespace-pre-line">
          {lang === 'fr' ? page.content.fr : page.content.en}
        </div>
      </div>
    </div>
  );
}