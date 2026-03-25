import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { setOffers } from './store/action';
import { mockOffers } from './mocks/offers';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setOffers(mockOffers));
  }, [dispatch]);
  return(
    <>
      <Header />
      <Outlet />
    </>
  );
}
