import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-spanish text-primary-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-spanish-pattern opacity-10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          Vicho's Tapas
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light tracking-wide">
          {t('slogan')} 🇪🇸✨
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection('menu')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-glow transition-smooth"
          >
            {t('viewMenu')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('reservations')}
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-smooth"
          >
            {t('bookTable')}
          </Button>
        </div>

        {/* Opening Hours */}
        <div className="inline-block bg-primary/20 backdrop-blur-sm rounded-lg px-8 py-4 border border-primary-foreground/30">
          <p className="text-sm font-semibold mb-1">{t('openingHours')}</p>
          <p className="text-lg">{t('hours')}</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-accent transition-smooth"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
