import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from './MainLayout.styled';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default MainLayout;
