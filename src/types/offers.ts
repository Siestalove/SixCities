export type location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type city = {
  name: string;
  location: location;
}

export type baseOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: city;
  location: location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OffersResult = baseOffer & {
    previewImage: string;
}

export type OfferForId = baseOffer & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
    };
    images: string[];
    maxAdults: number;
}
