import { OfferForId, OffersResult, city } from '../types/offers';

const amsterdam: city = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37914938496378,
    longitude: 4.900377537499948,
    zoom: 11
  }
};

const paris: city = {
  name: 'Paris',
  location: {
    latitude: 48.856614,
    longitude: 2.352222,
    zoom: 11
  }
};

const cologne: city = {
  name: 'Cologne',
  location: {
    latitude: 50.937531,
    longitude: 6.9602786,
    zoom: 11
  }
};

const brussels: city = {
  name: 'Brussels',
  location: {
    latitude: 50.8503463,
    longitude: 4.3517211,
    zoom: 11
  }
};

const hamburg: city = {
  name: 'Hamburg',
  location: {
    latitude: 53.5510846,
    longitude: 9.9936819,
    zoom: 11
  }
};

const dusseldorf: city = {
  name: 'Dusseldorf',
  location: {
    latitude: 51.2277411,
    longitude: 6.7734556,
    zoom: 11
  }
};

export const mockOffers: OffersResult[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg'
  },
  {
    id: 'paris-001',
    title: 'Romantic studio near Eiffel Tower',
    type: 'apartment',
    price: 210,
    city: paris,
    location: {
      latitude: 48.858844,
      longitude: 2.294351,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg'
  },
  {
    id: 'cologne-001',
    title: 'Modern loft near Cologne Cathedral',
    type: 'apartment',
    price: 95,
    city: cologne,
    location: {
      latitude: 50.941278,
      longitude: 6.958281,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg'
  },
  {
    id: 'brussels-001',
    title: 'Cozy apartment in Grand Place area',
    type: 'house',
    price: 140,
    city: brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.352697,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg'
  },
  {
    id: 'hamburg-001',
    title: 'Stylish flat with harbor view',
    type: 'hotel',
    price: 175,
    city: hamburg,
    location: {
      latitude: 53.547543,
      longitude: 9.982128,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg'
  },
  {
    id: 'dusseldorf-001',
    title: 'Design apartment in Medienhafen',
    type: 'apartment',
    price: 110,
    city: dusseldorf,
    location: {
      latitude: 51.212134,
      longitude: 6.764728,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/9.jpg'
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
    id: 'paris-001',
    title: 'Romantic studio near Eiffel Tower',
    type: 'apartment',
    price: 210,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.858844,
        longitude: 2.294351,
        zoom: 8
      }
    },
    location: {
      latitude: 48.858844,
      longitude: 2.294351,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
    description: 'Charming studio just steps away from the Eiffel Tower. Enjoy breathtaking views and authentic Parisian atmosphere.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Coffee machine', 'Elevator', 'Balcony'],
    host: {
      name: 'Isabelle Moreau',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-5.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5-1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5-2.jpg'
    ],
    maxAdults: 2
  },
  {
    id: 'cologne-001',
    title: 'Modern loft near Cologne Cathedral',
    type: 'apartment',
    price: 95,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.941278,
        longitude: 6.958281,
        zoom: 8
      }
    },
    location: {
      latitude: 50.941278,
      longitude: 6.958281,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    description: 'Contemporary loft in the heart of Cologne, within walking distance to the Cathedral and Rhine River.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Kitchen', 'Heating', 'Smart TV', 'Dishwasher'],
    host: {
      name: 'Lukas Weber',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-6.jpg',
      isPro: false
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6-1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6-2.jpg'
    ],
    maxAdults: 3
  },
  {
    id: 'brussels-001',
    title: 'Cozy apartment in Grand Place area',
    type: 'house',
    price: 140,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.352697,
        zoom: 8
      }
    },
    location: {
      latitude: 50.846557,
      longitude: 4.352697,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    description: 'Beautiful traditional house just minutes from Grand Place. Experience the charm of Brussels in this cozy retreat.',
    bedrooms: 2,
    goods: ['Wi-Fi', 'Fireplace', 'Garden', 'Parking', 'BBQ', 'Heating'],
    host: {
      name: 'Sophie Dubois',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-7.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7-1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/7-2.jpg'
    ],
    maxAdults: 4
  },
  {
    id: 'hamburg-001',
    title: 'Stylish flat with harbor view',
    type: 'hotel',
    price: 175,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.547543,
        longitude: 9.982128,
        zoom: 8
      }
    },
    location: {
      latitude: 53.547543,
      longitude: 9.982128,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    description: 'Modern hotel suite with stunning views of Hamburg harbor. Includes access to spa and fitness center.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Room service', 'Mini-bar', 'Safe', 'Spa access', 'Gym'],
    host: {
      name: 'Hanna Schmidt',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-8.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8-1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8-2.jpg'
    ],
    maxAdults: 2
  },
  {
    id: 'dusseldorf-001',
    title: 'Design apartment in Medienhafen',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.212134,
        longitude: 6.764728,
        zoom: 8
      }
    },
    location: {
      latitude: 51.212134,
      longitude: 6.764728,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    description: 'Sleek designer apartment in Düsseldorf\'s trendy Medienhafen district. Close to restaurants and galleries.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air conditioning', 'Elevator', 'Coffee machine', 'Heating'],
    host: {
      name: 'Felix Wagner',
      avatarUrl: 'https://16.design.htmlacademy.com/static/host/avatar-9.jpg',
      isPro: false
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9-1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9-2.jpg'
    ],
    maxAdults: 2
  }
];

export const mockNearbyOffers: OffersResult[] = [
  {
    id: 'nearby-amsterdam-1',
    title: 'Quiet cozy house and picturesque that hides behind a a river',
    type: 'house',
    price: 132,
    city: amsterdam,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg'
  },
  {
    id: 'nearby-paris-1',
    title: 'Charming studio with Eiffel Tower view',
    type: 'apartment',
    price: 185,
    city: paris,
    location: {
      latitude: 48.857965,
      longitude: 2.293987,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg'
  },
  {
    id: 'nearby-cologne-1',
    title: 'Riverside apartment near Cathedral',
    type: 'apartment',
    price: 89,
    city: cologne,
    location: {
      latitude: 50.938524,
      longitude: 6.962128,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg'
  },
  {
    id: 'nearby-brussels-1',
    title: 'Cozy flat in historic center',
    type: 'house',
    price: 115,
    city: brussels,
    location: {
      latitude: 50.845779,
      longitude: 4.354829,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg'
  },
  {
    id: 'nearby-hamburg-1',
    title: 'Modern apartment near the port',
    type: 'apartment',
    price: 145,
    city: hamburg,
    location: {
      latitude: 53.544836,
      longitude: 9.986453,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg'
  },
  {
    id: 'nearby-dusseldorf-1',
    title: 'Central city apartment',
    type: 'apartment',
    price: 98,
    city: dusseldorf,
    location: {
      latitude: 51.218764,
      longitude: 6.776489,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.0,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg'
  }
];
