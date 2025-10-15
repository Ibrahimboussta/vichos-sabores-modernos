import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Reservations from '@/components/Reservations';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const ReservationsPage = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Reservations />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default ReservationsPage;
