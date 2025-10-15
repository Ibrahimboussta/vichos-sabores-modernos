import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const GalleryPage = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">
            <Gallery />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default GalleryPage;
