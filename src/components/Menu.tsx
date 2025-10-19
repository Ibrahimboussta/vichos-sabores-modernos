import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { menuItems, categories } from '@/data/menuData';
import { Plus, ArrowRight } from 'lucide-react';



interface MenuProps {
  limit?: number;
}

const Menu = ({ limit }: MenuProps = {}) => {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('chefs');

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory);
  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;
  const hasMore = limit && filteredItems.length > limit;

  const uniqueCategories = categories.filter(
    (category, index, self) =>
      index === self.findIndex((c) => c.key === category.key)
  );

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            {t('menu')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our authentic Spanish cuisine
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {uniqueCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-smooth"
            >
              {t(category.key)}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-glow transition-all duration-300 overflow-hidden"
            >
        
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-smooth">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {item.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-bold text-accent">
                      {item.price} DHS
                    </span>
                    <Button
                      size="icon"
                      onClick={() =>
                        addItem({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                        })
                      }
                      className="bg-accent hover:bg-accent/90 transition-smooth"
                    >
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Menu Button */}
        {hasMore && (
          <div className="text-center mt-12 animate-fade-in">
            <Link to="/menu">
              <Button size="lg" className="group">
                {t('viewFullMenu')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
