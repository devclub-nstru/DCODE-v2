import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Benefits />
      <About />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
