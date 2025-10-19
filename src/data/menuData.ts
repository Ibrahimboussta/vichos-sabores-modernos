export interface MenuItem {
id: string;
name: string;
price: number;
category: string;
description?: string;
}

export const menuItems: MenuItem[] = [
// Chef's Suggestions
{ id: 'cs1', name: 'Jamón ibérico', price: 190, category: 'chefs', description: 'Iberian ham' },
{ id: 'cs2', name: 'Carpaccio de lubina', price: 150, category: 'chefs', description: 'Sea bass carpaccio' },
{ id: 'cs3', name: 'Pulpo al carbon', price: 150, category: 'chefs', description: 'Grilled octopus' },
{ id: 'cs4', name: 'Variado de frutos del mar al ajillo', price: 180, category: 'chefs', description: 'Mixed garlic seafood' },
{ id: 'cs5', name: 'Jamon de pato', price: 150, category: 'chefs', description: 'Duck ham' },

// Tapas & Raciones
{ id: 'tr1', name: 'Patatas bravas', price: 60, category: 'tapas', description: 'Spicy potatoes' },
{ id: 'tr2', name: 'Tortilla española', price: 70, category: 'tapas', description: 'Spanish omelette' },
{ id: 'tr3', name: 'Croquetas', price: 85, category: 'tapas', description: 'Croquettes' },
{ id: 'tr4', name: 'Gamba frita', price: 100, category: 'tapas', description: 'Fried shrimp' },
{ id: 'tr5', name: 'Chanquetes fritos', price: 125, category: 'tapas', description: 'Fried small fish' },
{ id: 'tr6', name: 'Boqueron en vinagre', price: 75, category: 'tapas', description: 'Anchovies in vinegar' },
{ id: 'tr7', name: 'Salpicon de pulpo', price: 80, category: 'tapas', description: 'Octopus salad' },

// Main Courses
// Rice Dishes
{ id: 'r1', name: 'Paella marisco (1 person)', price: 200, category: 'mains' },
{ id: 'r2', name: 'Paella marisco (2 persons)', price: 320, category: 'mains' },
{ id: 'r3', name: 'Paella valenciana (1 person)', price: 180, category: 'mains' },
{ id: 'r4', name: 'Paella valenciana (2 persons)', price: 300, category: 'mains' },
{ id: 'r5', name: 'Arroz negro (1 person)', price: 180, category: 'mains' },
{ id: 'r6', name: 'Arroz negro (2 persons)', price: 300, category: 'mains' },

// Meat
{ id: 'm1', name: 'Paletilla de cordero', price: 440, category: 'mains', description: 'Lamb shoulder' },
{ id: 'm2', name: 'Pollo empanado', price: 140, category: 'mains', description: 'Breaded chicken escalope' },
{ id: 'm3', name: 'Chuleton de buey', price: 250, category: 'mains', description: '500g ribeye steak' },

// Fish and Seafood
{ id: 'f1', name: 'Bacalao del chef', price: 200, category: 'mains', description: 'Cod, chef’s style' },
{ id: 'f2', name: 'Merluza', price: 190, category: 'mains', description: 'Hake' },
{ id: 'f3', name: 'Lubina a la sal (2 persons)', price: 390, category: 'mains', description: 'Sea bass baked in salt' },
{ id: 'f4', name: 'Caldereta de pescado (2 persons)', price: 500, category: 'mains', description: 'Fish stew' },
{ id: 'f5', name: 'Calamar a la plancha', price: 150, category: 'mains', description: 'Grilled squid' },

// Desserts
{ id: 'd1', name: 'Crema catalana', price: 60, category: 'desserts' },
{ id: 'd2', name: 'Leche frita', price: 70, category: 'desserts' },
{ id: 'd3', name: 'Tarta de limón', price: 65, category: 'desserts' },
{ id: 'd4', name: 'Flan de manzana', price: 70, category: 'desserts' },
{ id: 'd5', name: 'Volcán de chocolate', price: 75, category: 'desserts' },
{ id: 'd6', name: 'Surtido de helados (4 bolas)', price: 60, category: 'desserts' },

// Wines
{ id: 'w1', name: 'Muga Blanco Rioja', price: 350, category: 'wines' },
{ id: 'w2', name: 'Marques de Caceres Blanco', price: 300, category: 'wines' },
{ id: 'w3', name: 'Albarino Pazo San Mauro', price: 380, category: 'wines' },
{ id: 'w4', name: 'Faustino VII Rioja Kosher (half)', price: 180, category: 'wines' },
{ id: 'w5', name: 'Faustino VI Rioja', price: 580, category: 'wines' },
{ id: 'w6', name: 'Roda Bodegas Rioja', price: 500, category: 'wines' },
{ id: 'w7', name: 'Marques de Vargas', price: 475, category: 'wines' },
{ id: 'w8', name: 'Cotes du Rhone', price: 390, category: 'wines' },
{ id: 'w9', name: 'Saint Julien Chateau Lalande', price: 670, category: 'wines' },
{ id: 'w10', name: 'Medaillon Rouge', price: 285, category: 'wines' },
{ id: 'w11', name: 'Medaillon Blanc', price: 285, category: 'wines' },
{ id: 'w12', name: 'Medaillon Rosé', price: 285, category: 'wines' },

// Sangrias
{ id: 'sg1', name: 'Red Sangria', price: 190, category: 'wines', description: '1L carafe, Spanish Rioja base' },
{ id: 'sg2', name: 'White Sangria', price: 190, category: 'wines', description: '1L carafe' },

// Beers
{ id: 'b1', name: 'Pression Flag 25cl', price: 30, category: 'beers' },
{ id: 'b2', name: 'Pression Flag 50cl', price: 55, category: 'beers' },
{ id: 'b3', name: 'Super Bock 25cl', price: 30, category: 'beers' },
{ id: 'b4', name: 'San Miguel Fresca 33cl', price: 55, category: 'beers' },
{ id: 'b5', name: 'San Miguel (non-alcohol)', price: 40, category: 'beers' },
{ id: 'b6', name: 'Heineken 25cl', price: 50, category: 'beers' },
{ id: 'b7', name: 'Mahou 25cl', price: 40, category: 'beers' },

// Spirits
{ id: 'sp1', name: "Jack Daniel's", price: 75, category: 'spirits', description: 'Whisky' },
{ id: 'sp2', name: 'Glenfiddich 12 years', price: 90, category: 'spirits', description: 'Whisky' },
{ id: 'sp3', name: 'Glenfiddich 15 years', price: 110, category: 'spirits', description: 'Whisky' },
{ id: 'sp4', name: 'Red Label', price: 75, category: 'spirits', description: 'Whisky' },
{ id: 'sp5', name: "Hendrick's", price: 80, category: 'spirits', description: 'Gin' },
{ id: 'sp6', name: 'Bombay Sapphire', price: 75, category: 'spirits', description: 'Gin' },
{ id: 'sp7', name: 'Absolut', price: 75, category: 'spirits', description: 'Vodka' },
{ id: 'sp8', name: 'Danzka', price: 70, category: 'spirits', description: 'Vodka' },
{ id: 'sp9', name: 'Grey Goose', price: 85, category: 'spirits', description: 'Vodka' },
{ id: 'sp10', name: 'Bacardi Carta Blanca', price: 70, category: 'spirits', description: 'Rum' },
{ id: 'sp11', name: 'Bacardi Carta Oro', price: 70, category: 'spirits', description: 'Rum' },
{ id: 'sp12', name: 'Martini Rouge/Blanc/Rose', price: 75, category: 'spirits', description: 'Aperitif' },
{ id: 'sp13', name: 'Ricard', price: 75, category: 'spirits' },
{ id: 'sp14', name: 'Get 27', price: 70, category: 'spirits' },
{ id: 'sp15', name: "Bailey's", price: 75, category: 'spirits' },
{ id: 'sp16', name: 'Amaretto', price: 75, category: 'spirits' },
{ id: 'sp17', name: 'Fernet Blanca', price: 70, category: 'spirits' },
{ id: 'sp18', name: 'Sambuca', price: 65, category: 'spirits' },
{ id: 'sp19', name: 'Jagermeister', price: 80, category: 'spirits' },
{ id: 'sp20', name: 'Tequila', price: 70, category: 'spirits' },
{ id: 'sp21', name: 'Cognac ABK6 VSOP', price: 140, category: 'spirits' },

// Cocktails
{ id: 'c1', name: 'Aperol Spritz', price: 110, category: 'cocktails' },
{ id: 'c2', name: 'Mojito', price: 100, category: 'cocktails' },
{ id: 'c3', name: 'Sex on the Beach', price: 100, category: 'cocktails' },
{ id: 'c4', name: 'Black Russian', price: 100, category: 'cocktails' },
{ id: 'c5', name: 'Margarita', price: 100, category: 'cocktails' },
{ id: 'c6', name: 'Moscow Mule', price: 100, category: 'cocktails' },
{ id: 'c7', name: 'Negroni', price: 100, category: 'cocktails' },
{ id: 'c8', name: 'Virgin Mojito', price: 80, category: 'cocktails' },
{ id: 'c9', name: 'Piña Colada', price: 80, category: 'cocktails' },
{ id: 'c10', name: 'Bora Bora', price: 80, category: 'cocktails' },
{ id: 'c11', name: 'Pussy Foot', price: 80, category: 'cocktails' },

// Soft Drinks & Hot Beverages
{ id: 's1', name: 'Coca-Cola / Sprite / Schweppes', price: 30, category: 'soft' },
{ id: 's2', name: 'Red Bull', price: 50, category: 'soft' },
{ id: 's3', name: 'Sidi Ali 50cl', price: 20, category: 'soft' },
{ id: 's4', name: 'Sidi Ali 1.5L', price: 30, category: 'soft' },
{ id: 's5', name: 'Oulmes 50cl', price: 25, category: 'soft' },
{ id: 's6', name: 'Oulmes 1L', price: 30, category: 'soft' },
{ id: 's7', name: 'Nespresso', price: 25, category: 'soft' },
{ id: 's8', name: 'Café Crème / Cappuccino', price: 30, category: 'soft' },
{ id: 's9', name: 'Tea / Infusions', price: 20, category: 'soft' },
{ id: 's10', name: 'Orange / Pineapple / Lemon / Lemon Ginger Juice', price: 35, category: 'soft' },
];

export const categories = [
{ id: 'chefs', key: 'chefsSuggestions' },
{ id: 'tapas', key: 'tapasRaciones' },
{ id: 'mains', key: 'mainCourses' },
{ id: 'desserts', key: 'desserts' },
{ id: 'wines', key: 'winesBeer' },
{ id: 'beers', key: 'winesBeer' },
{ id: 'spirits', key: 'spirits' },
{ id: 'cocktails', key: 'cocktails' },
{ id: 'soft', key: 'softDrinks' },
];
