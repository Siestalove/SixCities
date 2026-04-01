import {createAction} from '@reduxjs/toolkit';
import { OfferForId, OffersResultMass } from '../types/offers';
import { ReviewType } from '../types/reviews';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction<OffersResultMass>('setOffer');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const setError = createAction<string | null>('setError');
export const setCurrentOffer = createAction<OfferForId | null>('setCurrentOffer');
export const setNearbyOffers = createAction<OffersResultMass>('setNearbyOffers');
export const setReviews = createAction<ReviewType[]>('setReviews');
export const setOfferLoadingStatus = createAction<boolean>('setOfferLoadingStatus');
