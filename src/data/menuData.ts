export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // Chef's Suggestions
  { id: 'cs1', name: 'Querailes braves del chef', price: 90, category: 'chefs' },
  { id: 'cs2', name: 'Queso manchego', price: 100, category: 'chefs' },
  { id: 'cs3', name: 'Jamon de mar', price: 120, category: 'chefs' },
  { id: 'cs4', name: 'Jamón ibérico', price: 190, category: 'chefs' },
  { id: 'cs5', name: 'Carpaccio de lubina', price: 150, category: 'chefs' },
  { id: 'cs6', name: 'Sepionet a la plancha', price: 110, category: 'chefs' },
  { id: 'cs7', name: 'Pulpo al carbon', price: 150, category: 'chefs' },
  { id: 'cs8', name: 'Hueva pescado', price: 120, category: 'chefs' },
  { id: 'cs9', name: 'Higado del pescado marinado', price: 140, category: 'chefs' },
  { id: 'cs10', name: 'Esgarraet con lubina', price: 85, category: 'chefs' },
  { id: 'cs11', name: 'Jamon de pato', price: 150, category: 'chefs' },
  { id: 'cs12', name: 'Chipirones a la plancha', price: 150, category: 'chefs' },
  { id: 'cs13', name: 'Variado de frutos del mar al ajillo', price: 180, category: 'chefs' },

  // Tapas & Raciones
  { id: 'tr1', name: 'Patatas bravas', price: 60, category: 'tapas' },
  { id: 'tr2', name: 'Tortilla española', price: 70, category: 'tapas' },
  { id: 'tr3', name: 'Arenque ahumado', price: 80, category: 'tapas' },
  { id: 'tr4', name: 'Sardinas marinadas', price: 75, category: 'tapas' },
  { id: 'tr5', name: 'Pimientos del padrón', price: 65, category: 'tapas' },
  { id: 'tr6', name: 'Calamar frito', price: 110, category: 'tapas' },
  { id: 'tr7', name: 'Croquetas', price: 85, category: 'tapas' },
  { id: 'tr8', name: 'Ensaladilla rusa', price: 60, category: 'tapas' },
  { id: 'tr9', name: 'Pollo frito', price: 120, category: 'tapas' },
  { id: 'tr10', name: 'Gamba frita', price: 100, category: 'tapas' },
  { id: 'tr11', name: 'Tomate con atun y ajo', price: 75, category: 'tapas' },
  { id: 'tr12', name: 'Carpaccio de buey', price: 90, category: 'tapas' },
  { id: 'tr13', name: 'Carpaccio de pulpo', price: 85, category: 'tapas' },
  { id: 'tr14', name: 'Chanquetes fritos', price: 125, category: 'tapas' },
  { id: 'tr15', name: 'Gambas al ajillo', price: 100, category: 'tapas' },
  { id: 'tr16', name: 'Boqueron en vinagre', price: 75, category: 'tapas' },
  { id: 'tr17', name: 'Salpicon de pulpo', price: 80, category: 'tapas' },
  { id: 'tr18', name: 'Tarantelo de atun', price: 120, category: 'tapas' },
  { id: 'tr19', name: 'Langostinos cocidos', price: 100, category: 'tapas' },
  { id: 'tr20', name: 'Champinones a la plancha', price: 75, category: 'tapas' },
  { id: 'tr21', name: 'Queso frito', price: 75, category: 'tapas' },
  { id: 'tr22', name: 'Ostras (6 pièces)', price: 120, category: 'tapas' },

  // Wines
  { id: 'w1', name: 'Muga Blanco Rioja', price: 350, category: 'wines' },
  { id: 'w2', name: 'Marqués de Cáceres Blanc', price: 300, category: 'wines' },
  { id: 'w3', name: 'Viña Esmeralda Torres Blanc', price: 250, category: 'wines' },
  { id: 'w4', name: 'Castillo de Perelada Chardonnay', price: 280, category: 'wines' },
  { id: 'w5', name: 'Albariño Martín Códax', price: 320, category: 'wines' },
  { id: 'w6', name: 'Marqués de Riscal Reserva', price: 400, category: 'wines' },
  { id: 'w7', name: 'Viña Pomal Crianza', price: 350, category: 'wines' },
  { id: 'w8', name: 'Faustino VII Tempranillo', price: 280, category: 'wines' },

  // Beers
  { id: 'b1', name: 'Pression Flag', price: 30, category: 'beers' },
  { id: 'b2', name: 'San Miguel', price: 35, category: 'beers' },
  { id: 'b3', name: 'Heineken', price: 35, category: 'beers' },
  { id: 'b4', name: 'Super Bock', price: 40, category: 'beers' },

  // Cocktails
  { id: 'c1', name: 'Aperol Spritz', price: 110, category: 'cocktails' },
  { id: 'c2', name: 'Mojito', price: 100, category: 'cocktails' },
  { id: 'c3', name: 'Sex on the Beach', price: 100, category: 'cocktails' },
  { id: 'c4', name: 'Black Russian', price: 100, category: 'cocktails' },
  { id: 'c5', name: 'Margarita', price: 100, category: 'cocktails' },
  { id: 'c6', name: 'Moscow Mule', price: 100, category: 'cocktails' },
  { id: 'c7', name: 'Negroni', price: 100, category: 'cocktails' },
  { id: 'c8', name: 'Virgin Mojito', price: 80, category: 'cocktails' },
  { id: 'c9', name: 'Piña Colada (sans alcool)', price: 80, category: 'cocktails' },
  { id: 'c10', name: 'Bora Bora', price: 80, category: 'cocktails' },

  // Soft Drinks
  { id: 's1', name: 'Coca-Cola', price: 25, category: 'soft' },
  { id: 's2', name: 'Schweppes', price: 25, category: 'soft' },
  { id: 's3', name: 'Red Bull', price: 45, category: 'soft' },
  { id: 's4', name: 'Café crème', price: 20, category: 'soft' },
  { id: 's5', name: 'Cappuccino', price: 25, category: 'soft' },
  { id: 's6', name: 'Thé', price: 15, category: 'soft' },
  { id: 's7', name: "Jus d'orange", price: 30, category: 'soft' },
  { id: 's8', name: "Jus d'ananas", price: 30, category: 'soft' },
  { id: 's9', name: 'Jus de citron', price: 25, category: 'soft' },
];

export const categories = [
  { id: 'chefs', key: 'chefsSuggestions' },
  { id: 'tapas', key: 'tapasRaciones' },
  { id: 'wines', key: 'winesBeer' },
  { id: 'beers', key: 'winesBeer' },
  { id: 'cocktails', key: 'cocktails' },
  { id: 'soft', key: 'softDrinks' },
];
