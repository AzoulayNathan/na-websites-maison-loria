import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { faqItems } from '@/lib/data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const { t, lang } = useLang();

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl text-dark-chocolate">{t('Questions fréquentes', 'Frequently asked questions')}</h1>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-cream rounded-lg border border-dark-chocolate/5 px-5">
              <AccordionTrigger className="font-heading text-base text-dark-chocolate hover:no-underline py-4">
                {lang === 'fr' ? item.q.fr : item.q.en}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-dark-chocolate/60 leading-relaxed pb-4">
                {lang === 'fr' ? item.a.fr : item.a.en}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}