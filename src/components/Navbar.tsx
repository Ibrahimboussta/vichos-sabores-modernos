import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { items } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl font-bold hover:text-accent transition-smooth"
          >
            Vicho's Tapas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-medium hover:text-accent transition-smooth"
            >
              {t('home')}
            </Link>
            <Link
              to="/menu"
              className="font-medium hover:text-accent transition-smooth"
            >
              {t('menu')}
            </Link>
            <Link
              to="/reservations"
              className="font-medium hover:text-accent transition-smooth"
            >
              {t('reservations')}
            </Link>
            <Link
              to="/gallery"
              className="font-medium hover:text-accent transition-smooth"
            >
              {t('gallery')}
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-accent transition-smooth"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Language Switcher & Cart */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('es')}
                className={`text-xl hover:scale-110 transition-smooth ${
                  language === 'es' ? 'scale-110' : 'opacity-50'
                }`}
                title="Español"
              >
                🇪🇸
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`text-xl hover:scale-110 transition-smooth ${
                  language === 'fr' ? 'scale-110' : 'opacity-50'
                }`}
                title="Français"
              >
                🇫🇷
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xl hover:scale-110 transition-smooth ${
                  language === 'en' ? 'scale-110' : 'opacity-50'
                }`}
                title="English"
              >
                🇬🇧
              </button>
            </div>

            {isHomePage ? (
              <button
                onClick={() => scrollToSection('cart')}
                className="relative p-2 hover:text-accent transition-smooth"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            ) : (
              <Link
                to="/menu"
                className="relative p-2 hover:text-accent transition-smooth"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-accent transition-smooth text-left"
                  >
                    {t('home')}
                  </Link>
                  <Link
                    to="/menu"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-accent transition-smooth text-left"
                  >
                    {t('menu')}
                  </Link>
                  <Link
                    to="/reservations"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-accent transition-smooth text-left"
                  >
                    {t('reservations')}
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-accent transition-smooth text-left"
                  >
                    {t('gallery')}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-accent transition-smooth text-left"
                  >
                    {t('contact')}
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
