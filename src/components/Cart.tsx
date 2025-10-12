import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const { t } = useLanguage();
  const { items, updateQuantity, removeItem, total } = useCart();

  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cart" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center text-primary animate-fade-in-up">
            {t('cart')}
          </h2>

          {items.length === 0 ? (
            <Card className="shadow-elegant">
              <CardContent className="p-12 text-center">
                <p className="text-xl text-muted-foreground">{t('emptyCart')}</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">{t('cart')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.price} DHS × {item.quantity}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right min-w-[100px]">
                          <p className="font-bold text-lg">
                            {item.price * item.quantity} DHS
                          </p>
                        </div>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <span className="text-2xl font-bold">{t('total')}</span>
                    <span className="text-3xl font-bold text-accent">
                      {total} DHS
                    </span>
                  </div>

                  <Button
                    size="lg"
                    className="w-full mt-6 bg-gradient-spanish hover:opacity-90 text-lg py-6"
                    onClick={scrollToReservations}
                  >
                    {t('bookTable')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
