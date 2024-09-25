import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const localStoregFav = localStorage.getItem("favorites");
    return localStoregFav ? JSON.parse(localStoregFav) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFav) => prevFav.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
