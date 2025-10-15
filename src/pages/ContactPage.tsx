import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const ContactPage = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default ContactPage;
