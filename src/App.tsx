import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useAppSelector } from './hooks';
import LoadingPage from './pages/LoadingPage';

export default function App() {
  const isDataLoading = useAppSelector((state) => state.isLoading);

  if (isDataLoading) {
    return (
      <LoadingPage />
    );
  }
  return(
    <>
      <Header />
      <Outlet />
    </>
  );
}
