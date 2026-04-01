import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setError, setOffersLoadingStatus} from './action';
import { OffersResultMass } from '../types/offers';


type InitalState = {
  currentCity: string;
  offers: OffersResultMass;
  isLoading: boolean;
  error: string | null;
}

const initialState: InitalState = {
  currentCity: 'Paris',
  offers: [],
  isLoading: false,
  error: null,
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
    });
});

export { reducer };
