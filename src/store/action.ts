import {createAction} from '@reduxjs/toolkit';
import { OffersResult } from '../types/offers';

export const setCity = createAction<string>('setCity');
export const setOffers = createAction<OffersResult[]>('setOffer');
