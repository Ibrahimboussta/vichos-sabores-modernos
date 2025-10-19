import { useLanguage } from '@/contexts/LanguageContext';

// Import all gallery images
import tortillaEspanola from '@/assets/Gallery/tortilla-espanola.jpg';
import img1 from '@/assets/Gallery/IMG-20251016-WA0001.jpg';
import img2 from '@/assets/Gallery/IMG-20251016-WA0002.jpg';
import img3 from '@/assets/Gallery/IMG-20251016-WA0003.jpg';
import img4 from '@/assets/Gallery/IMG-20251016-WA0004.jpg';
import img5 from '@/assets/Gallery/IMG-20251016-WA0005.jpg';
import img6 from '@/assets/Gallery/IMG-20251016-WA0006.jpg';
import img7 from '@/assets/Gallery/IMG-20251016-WA0007.jpg';
import img8 from '@/assets/Gallery/IMG-20251016-WA0008.jpg';
import img9 from '@/assets/Gallery/IMG-20251016-WA0009.jpg';
import img10 from '@/assets/Gallery/IMG-20251016-WA0010.jpg';
import img11 from '@/assets/Gallery/IMG-20251016-WA0011.jpg';
import img12 from '@/assets/Gallery/IMG-20251016-WA0012.jpg';
import img13 from '@/assets/Gallery/IMG-20251016-WA0013.jpg';
import img14 from '@/assets/Gallery/IMG-20251016-WA0014.jpg';
import img15 from '@/assets/Gallery/IMG-20251016-WA0015.jpg';
import img16 from '@/assets/Gallery/IMG-20251016-WA0016.jpg';
import img17 from '@/assets/Gallery/IMG-20251016-WA0017.jpg';
import img18 from '@/assets/Gallery/IMG-20251016-WA0018.jpg';
import img19 from '@/assets/Gallery/IMG-20251016-WA0019.jpg';
import img20 from '@/assets/Gallery/IMG-20251016-WA0020.jpg';
import img21 from '@/assets/Gallery/IMG-20251016-WA0021.jpg';
import img22 from '@/assets/Gallery/IMG-20251016-WA0022.jpg';
import img23 from '@/assets/Gallery/IMG-20251016-WA0023.jpg';
import img24 from '@/assets/Gallery/IMG-20251016-WA0024.jpg';
import img25 from '@/assets/Gallery/IMG-20251016-WA0025.jpg';
import img26 from '@/assets/Gallery/IMG-20251016-WA0026.jpg';
import img27 from '@/assets/Gallery/IMG-20251016-WA0027.jpg';
import img28 from '@/assets/Gallery/IMG-20251016-WA0028.jpg';
import img29 from '@/assets/Gallery/IMG-20251016-WA0029.jpg';
import img30 from '@/assets/Gallery/IMG-20251016-WA0030.jpg';
import img31 from '@/assets/Gallery/IMG-20251016-WA0031.jpg';

const Gallery = () => {
  const { t } = useLanguage();

  // Gallery images from assets
  const galleryImages = [
    { id: 1, src: tortillaEspanola, alt: 'Tortilla Española' },
    { id: 2, src: img1, alt: 'Restaurant dish' },
    { id: 3, src: img2, alt: 'Restaurant dish' },
    { id: 4, src: img3, alt: 'Restaurant dish' },
    { id: 5, src: img4, alt: 'Restaurant dish' },
    { id: 6, src: img5, alt: 'Restaurant dish' },
    { id: 7, src: img6, alt: 'Restaurant dish' },
    { id: 8, src: img7, alt: 'Restaurant dish' },
    { id: 9, src: img8, alt: 'Restaurant dish' },
    { id: 10, src: img9, alt: 'Restaurant dish' },
    { id: 11, src: img10, alt: 'Restaurant dish' },
    { id: 12, src: img11, alt: 'Restaurant dish' },
    { id: 13, src: img12, alt: 'Restaurant dish' },
    { id: 14, src: img13, alt: 'Restaurant dish' },
    { id: 15, src: img14, alt: 'Restaurant dish' },
    { id: 16, src: img15, alt: 'Restaurant dish' },
    { id: 17, src: img16, alt: 'Restaurant dish' },
    { id: 18, src: img17, alt: 'Restaurant dish' },
    { id: 19, src: img18, alt: 'Restaurant dish' },
    { id: 20, src: img19, alt: 'Restaurant dish' },
    { id: 21, src: img20, alt: 'Restaurant dish' },
    { id: 22, src: img21, alt: 'Restaurant dish' },
    { id: 23, src: img22, alt: 'Restaurant dish' },
    { id: 24, src: img23, alt: 'Restaurant dish' },
    { id: 25, src: img24, alt: 'Restaurant dish' },
    { id: 26, src: img25, alt: 'Restaurant dish' },
    { id: 27, src: img26, alt: 'Restaurant dish' },
    { id: 28, src: img27, alt: 'Restaurant dish' },
    { id: 29, src: img28, alt: 'Restaurant dish' },
    { id: 30, src: img29, alt: 'Restaurant dish' },
    { id: 31, src: img30, alt: 'Restaurant dish' },
    { id: 32, src: img31, alt: 'Restaurant dish' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('gallery')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the ambiance and flavors of Spain
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-spanish opacity-0 group-hover:opacity-30 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
