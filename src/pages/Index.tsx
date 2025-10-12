import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Cart from '@/components/Cart';
import Reservations from '@/components/Reservations';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Menu />
            <Cart />
            <Reservations />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
