import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('aboutText')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
              <MapPin className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('address')}</h3>
              <p className="text-muted-foreground text-center">
                6/8, rue Ahmed El Mokri
                <br />
                Casablanca
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
              <Clock className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('openingHours')}</h3>
              <p className="text-muted-foreground text-center">{t('hours')}</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-elegant hover:shadow-glow transition-smooth">
              <Phone className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t('phone')}</h3>
              <a
                href="tel:+212522950604"
                className="text-muted-foreground hover:text-accent transition-smooth"
              >
                +212 522 950 604
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
