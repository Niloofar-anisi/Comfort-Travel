import AuthProvider from "../context/AuthProvider";
import { FavoritesProvider } from "../context/Favorites";
import HotelProvider from "../context/HotelProvider";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <HotelProvider>{children}</HotelProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}
