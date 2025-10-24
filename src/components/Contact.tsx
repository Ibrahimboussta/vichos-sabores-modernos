import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('contactUs')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t('name')}</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">{t('email')}</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">{t('message')}</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-spanish hover:opacity-90"
                >
                  {t('send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('address')}</h3>
                    <p className="text-muted-foreground">
                      6/8, rue Ahmed El Mokri
                      <br />
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('phone')}</h3>
                    <a
                      href="tel:+212522950604"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      +212 522 950 604
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t('followUs')}</h3>
                    <a
                      href="https://instagram.com/vichoscasablanca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      @vichoscasablanca
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-elegant h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13294.236691870768!2d-7.638219!3d33.5907932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3cdbcf24e87%3A0xff0dc1470b0140de!2sVicho%27s!5e0!3m2!1sfr!2sma!4v1761343001408!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vicho's Tapas Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
