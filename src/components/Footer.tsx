import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Vicho's Tapas</h3>
            <p className="text-primary-foreground/80">{t('slogan')}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact')}</h4>
            <p className="text-primary-foreground/80 mb-2">
              6/8, rue Ahmed El Mokri
              <br />
              Casablanca
            </p>
            <p className="text-primary-foreground/80">
              <a href="tel:+212522950604" className="hover:text-accent transition-smooth">
                +212 522 950 604
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t('followUs')}</h4>
            <a
              href="https://instagram.com/vichoscasablanca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
            >
              <Instagram className="h-5 w-5" />
              @vichoscasablanca
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Vicho's Tapas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
