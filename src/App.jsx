import { Toaster } from "react-hot-toast";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/Hotels/Hotels";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import Footer from "./components/Footer/Footer";
import Reservation from "./components/Reservation/Reservation";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HeaderMinimal from "./components/HeaderMinimal/HeaderMinimal";
import FooterMinimal from "./components/FooterMinimal/FooterMinimal";
import HeadersMobile from "./components/HeadersMobile/HeadersMobile";
import AppProviders from "./components/Providers/AppProviders";
import Home from "./pages/Home";
import LocationList from "./components/LocationList/LocationList";

function App() {
  return (
    <AppProviders>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HeadersMobile />
              <LocationList />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<></>} />
        <Route
          path="/reservation"
          element={
            <ProtectedRoute>
              <HeaderMinimal />
              <HeadersMobile />
              <Reservation />
              <FooterMinimal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotels"
          element={
            <>
              <HeaderMinimal />
              <HeadersMobile />
              <AppLayout />
              <FooterMinimal />
            </>
          }
        >
          <Route index element={<Hotels />} />
          <Route path=":id" element={<SingleHotel />} />
        </Route>
      </Routes>
    </AppProviders>
  );
}

export default App;
