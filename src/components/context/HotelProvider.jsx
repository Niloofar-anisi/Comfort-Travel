import React, { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFech";
import axios from "axios";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();
const BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:TMEbEYHQ/hotel";

function HotelProvider({ children }) {
  const [currentHotel, setCurrentHotel] = useState(null);
  const [isLoadingCurrHotel, setIsLoadingCurrHotel] = useState(false);
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination" || "");

  const { data: allHotels, isLoading: isLoadingHotels } = useFetch(BASE_URL);

  const hotels = destination
    ? allHotels?.filter((hotel) =>
        hotel.destination.toLowerCase().includes(destination)
      )
    : allHotels;

  async function getHotel(id) {
    setIsLoadingCurrHotel(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      const roomPrice = parseFloat(
        ((data.PricePerNight || 0) * (data.numberOfNights || 0)).toFixed(2)
      );
      const totalPrice = parseFloat(
        (
          (roomPrice || 0) +
          (data.cleaningFee || 0) +
          (data.ServiceFee || 0) +
          (data.taxes || 0)
        ).toFixed(2)
      );
      setCurrentHotel({ ...data, roomPrice, totalPrice });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrHotel(false);
    }
  }

  return (
    <HotelContext.Provider
      value={{
        isLoadingHotels,
        hotels,
        currentHotel,
        getHotel,
        isLoadingCurrHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default React.memo(HotelProvider);

export function useHotels() {
  return useContext(HotelContext);
}
