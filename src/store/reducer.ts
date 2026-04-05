import {createReducer} from '@reduxjs/toolkit';
import {
  setCity,
  setOffers,
  setError,
  setOffersLoadingStatus,
  setCurrentOffer,
  setNearbyOffers,
  setReviews,
  setOfferLoadingStatus,
  requireAuthorization} from './action';
import { OfferForId, OffersResultMass } from '../types/offers';
import { ReviewType } from '../types/reviews';
import { AuthorizationStatus } from '../const';


type InitalState = {
  currentCity: string;
  offers: OffersResultMass;
  currentOffer: OfferForId | null;
  nearbyOffers: OffersResultMass;
  reviews: ReviewType[];
  isLoading: boolean;
  error: string | null;
  isOfferLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  currentCity: 'Paris',
  offers: [],
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
  isLoading: false,
  error: null,
  isOfferLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
