import {createAction} from '@reduxjs/toolkit';
import { OffersResultMass } from '../types/offers';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction<OffersResultMass>('setOffer');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const setError = createAction<string | null>('setError');
