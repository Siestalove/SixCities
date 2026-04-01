import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { OffersResultMass } from '../types/offers';
import { setOffers, setOffersLoadingStatus, setError } from '../store/action';
import { TIMEOUT_SHOW_ERROR } from '../const';
import {store} from '../store/index';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoadingStatus(true));
  try {
    const { data } = await api.get<OffersResultMass>('/offers');
    dispatch(setOffers(data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError('Failed to load offers. Please try again.'));
  } finally {
    dispatch(setOffersLoadingStatus(false));
  }
});
