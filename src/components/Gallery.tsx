import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  // Placeholder images - these would be replaced with actual restaurant photos
  const galleryImages = [
    { id: 1, alt: 'Spanish tapas platter' },
    { id: 2, alt: 'Restaurant interior' },
    { id: 3, alt: 'Jamón ibérico' },
    { id: 4, alt: 'Paella' },
    { id: 5, alt: 'Wine selection' },
    { id: 6, alt: 'Cozy dining area' },
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
              <div className="absolute inset-0 bg-gradient-spanish opacity-20 group-hover:opacity-40 transition-smooth" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
