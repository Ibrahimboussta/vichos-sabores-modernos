import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const MenuPage = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Menu />
            <Cart />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default MenuPage;
