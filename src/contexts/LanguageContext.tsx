import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    home: 'Inicio',
    menu: 'Menú',
    reservations: 'Reservas',
    gallery: 'Galería',
    contact: 'Contacto',
    slogan: 'El placer de comer español',
    welcome: 'Bienvenido a',
    openingHours: 'Horario',
    hours: 'Lunes - Domingo / 12:00 - 00:00',
    address: 'Dirección',
    phone: 'Teléfono',
    viewMenu: 'Ver Menú',
    bookTable: 'Reservar Mesa',
    addToCart: 'Añadir',
    cart: 'Carrito',
    total: 'Total',
    checkout: 'Finalizar Pedido',
    emptyCart: 'Tu carrito está vacío',
    chefsSuggestions: 'Sugerencias del Chef',
    tapasRaciones: 'Tapas & Raciones',
    winesBeer: 'Vinos & Cervezas',
    cocktails: 'Cócteles',
    softDrinks: 'Bebidas & Cafés',
    reservationTitle: 'Hacer una Reserva',
    name: 'Nombre',
    email: 'Email',
    phoneField: 'Teléfono',
    date: 'Fecha',
    time: 'Hora',
    guests: 'Número de Personas',
    specialRequests: 'Solicitudes Especiales',
    submitReservation: 'Confirmar Reserva',
    contactUs: 'Contáctanos',
    message: 'Mensaje',
    send: 'Enviar',
    followUs: 'Síguenos',
    aboutTitle: 'Auténtica Cocina Española',
    aboutText: 'En Vicho\'s Tapas, te traemos los sabores auténticos de España a Casablanca. Nuestras tapas tradicionales y platos mediterráneos se preparan con los ingredientes más frescos y las recetas tradicionales.',
    chatbotTitle: 'Asistente de Vicho',
    chatbotSubtitle: 'Estamos aquí para ayudarte',
    chatbotPlaceholder: 'Escribe tu mensaje...',
    chatbotGreeting: '¡Hola! ¿Cómo puedo ayudarte hoy?',
    chatbotResponse: '¡Gracias por tu mensaje! Para asistencia completa, llámanos al +212 522 950 604.',
    viewFullMenu: 'Ver Menú Completo',
  },
  fr: {
    home: 'Accueil',
    menu: 'Menu',
    reservations: 'Réservations',
    gallery: 'Galerie',
    contact: 'Contact',
    slogan: 'Le plaisir de manger espagnol',
    welcome: 'Bienvenue à',
    openingHours: 'Horaires',
    hours: 'Lundi - Dimanche / 12:00 - 00:00',
    address: 'Adresse',
    phone: 'Téléphone',
    viewMenu: 'Voir le Menu',
    bookTable: 'Réserver',
    addToCart: 'Ajouter',
    cart: 'Panier',
    total: 'Total',
    checkout: 'Commander',
    emptyCart: 'Votre panier est vide',
    chefsSuggestions: 'Suggestions du Chef',
    tapasRaciones: 'Tapas & Raciones',
    winesBeer: 'Vins & Bières',
    cocktails: 'Cocktails',
    softDrinks: 'Boissons & Cafés',
    reservationTitle: 'Faire une Réservation',
    name: 'Nom',
    email: 'Email',
    phoneField: 'Téléphone',
    date: 'Date',
    time: 'Heure',
    guests: 'Nombre de Personnes',
    specialRequests: 'Demandes Spéciales',
    submitReservation: 'Confirmer la Réservation',
    contactUs: 'Contactez-nous',
    message: 'Message',
    send: 'Envoyer',
    followUs: 'Suivez-nous',
    aboutTitle: 'Cuisine Espagnole Authentique',
    aboutText: 'Chez Vicho\'s Tapas, nous vous apportons les saveurs authentiques de l\'Espagne à Casablanca. Nos tapas traditionnelles et plats méditerranéens sont préparés avec les ingrédients les plus frais et les recettes traditionnelles.',
    chatbotTitle: 'Assistant Vicho',
    chatbotSubtitle: 'Nous sommes là pour vous aider',
    chatbotPlaceholder: 'Tapez votre message...',
    chatbotGreeting: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    chatbotResponse: 'Merci pour votre message! Pour une assistance complète, veuillez nous appeler au +212 522 950 604.',
    viewFullMenu: 'Voir le Menu Complet',
  },
  en: {
    home: 'Home',
    menu: 'Menu',
    reservations: 'Reservations',
    gallery: 'Gallery',
    contact: 'Contact',
    slogan: 'The pleasure of Spanish dining',
    welcome: 'Welcome to',
    openingHours: 'Opening Hours',
    hours: 'Monday - Sunday / 12:00 PM - 12:00 AM',
    address: 'Address',
    phone: 'Phone',
    viewMenu: 'View Menu',
    bookTable: 'Book a Table',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    total: 'Total',
    checkout: 'Checkout',
    emptyCart: 'Your cart is empty',
    chefsSuggestions: "Chef's Suggestions",
    tapasRaciones: 'Tapas & Raciones',
    winesBeer: 'Wines & Beers',
    cocktails: 'Cocktails',
    softDrinks: 'Drinks & Coffees',
    reservationTitle: 'Make a Reservation',
    name: 'Name',
    email: 'Email',
    phoneField: 'Phone',
    date: 'Date',
    time: 'Time',
    guests: 'Number of Guests',
    specialRequests: 'Special Requests',
    submitReservation: 'Confirm Reservation',
    contactUs: 'Contact Us',
    message: 'Message',
    send: 'Send',
    followUs: 'Follow Us',
    aboutTitle: 'Authentic Spanish Cuisine',
    aboutText: 'At Vicho\'s Tapas, we bring you the authentic flavors of Spain to Casablanca. Our traditional tapas and Mediterranean dishes are prepared with the freshest ingredients and time-honored recipes.',
    chatbotTitle: 'Vicho\'s Assistant',
    chatbotSubtitle: 'We\'re here to help',
    chatbotPlaceholder: 'Type your message...',
    chatbotGreeting: 'Hello! How can I help you today?',
    chatbotResponse: 'Thank you for your message! For complete assistance, please call us at +212 522 950 604.',
    viewFullMenu: 'View Full Menu',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
