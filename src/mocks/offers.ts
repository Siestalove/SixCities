import { OfferForId } from '../types/offers';
import { OffersResult } from '../types/offers';

export const mockOffers: OffersResult[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg'
  },
  {
    id: '7bf7f822-d39e-5232-93ef-f1b573a38f11',
    title: 'Cozy wooden house with fireplace',
    type: 'house',
    price: 85,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 8
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/2.jpg'
  },
  {
    id: '8cf8f933-e40a-6343-04f0-g2c684b49f22',
    title: 'Modern apartment in city center',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 8
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
  },
  {
    id: '9df9f044-f51b-7454-15g0-h3d795c60f33',
    title: 'Luxury penthouse with terrace',
    type: 'hotel',
    price: 320,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 8
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg'
  }
];

export const mocksOffersForId: OfferForId[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    bedrooms: 3,
    goods: ['Heating', 'Wi-Fi', 'Kitchen', 'Cable TV', 'Washing machine'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-1.jpg',
      isPro: false
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '7bf7f822-d39e-5232-93ef-f1b573a38f11',
    title: 'Cozy wooden house with fireplace',
    type: 'house',
    price: 85,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 8
      }
    },
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    description: 'Beautiful wooden house with authentic fireplace, located in quiet area near the forest. Perfect for family holidays.',
    bedrooms: 2,
    goods: ['Fireplace', 'Wi-Fi', 'Parking', 'Garden', 'BBQ'],
    host: {
      name: 'Emma Smith',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-2.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '8cf8f933-e40a-6343-04f0-g2c684b49f22',
    title: 'Modern apartment in city center',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 8
      }
    },
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    description: 'Stylish apartment in the heart of Paris, close to all main attractions. Recently renovated with modern design.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Coffee machine', 'Dishwasher', 'Elevator'],
    host: {
      name: 'Jean Dupont',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-3.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg'
    ],
    maxAdults: 2
  },
  {
    id: '9df9f044-f51b-7454-15g0-h3d795c60f33',
    title: 'Luxury penthouse with terrace',
    type: 'hotel',
    price: 320,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 8
      }
    },
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'Amazing penthouse with spacious terrace overlooking the city. Includes access to spa and gym.',
    bedrooms: 2,
    goods: ['Terrace', 'Jacuzzi', 'Wi-Fi', 'Parking', 'Room service', 'Mini-bar', 'Safe'],
    host: {
      name: 'Michael Brown',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-4.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg'
    ],
    maxAdults: 5
  }
];
