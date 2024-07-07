import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useScrollToTop from './components/useScrollToTop';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import Tours from './pages/Tours';
import BookingPage from './pages/BookingPage';
import ServicePage from './pages/ServicePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';


const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      {/* Include ScrollToTop component inside BrowserRouter but outside Routes */}
      <ScrollToTop />
      <Navbar />
      <div className="w-full bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DestinationPage" element={<DestinationPage />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage/>} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
