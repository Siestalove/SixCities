import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action';
import { OffersResult } from '../types/offers';


const initialState = {
  currentCity: 'Paris',
  offers: [] as OffersResult[],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
