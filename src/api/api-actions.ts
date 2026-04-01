import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { OfferForId, OffersResultMass } from '../types/offers';
import { ReviewType } from '../types/reviews';
import { setOffers, setOffersLoadingStatus, setError, setOfferLoadingStatus, setCurrentOffer, setNearbyOffers, setReviews } from '../store/action';
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

export const fetchOfferAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  dispatch(setOfferLoadingStatus(true));
  try {
    const { data: offer } = await api.get<OfferForId>(`/offers/${id}`);

    dispatch(setCurrentOffer(offer));

    const { data: nearby } = await api.get<OffersResultMass>(`/offers/${id}/nearby`);
    dispatch(setNearbyOffers(nearby));

    const { data: reviews } = await api.get<ReviewType[]>(`/comments/${id}`);
    dispatch(setReviews(reviews));

    dispatch(setError(null));
  } catch (error) {
    dispatch(setError('Failed to load offer details. Please try again.'));
    dispatch(setCurrentOffer(null));
  } finally {
    dispatch(setOfferLoadingStatus(false));
  }
});

export const postReviewAction = createAsyncThunk<
  void,
  { id: string; rating: number; comment: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/postReview', async ({ id, rating, comment }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post<ReviewType[]>(`/comments/${id}`, { comment, rating });
    dispatch(setReviews(data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError('Failed to post review. Please try again.'));
    throw error;
  }
});
