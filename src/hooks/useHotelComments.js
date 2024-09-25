import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useFetch from "./useFech";

const REVIEWS_URL = "https://x8ki-letl-twmt.n7.xano.io/api:TMEbEYHQ/reviews";

const useHotelComments = () => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);
  const { data: Reviews } = useFetch(REVIEWS_URL);

  async function getReviews() {
    setIsLoadingReviews(true);
    try {
      const { data } = await axios.get(`${REVIEWS_URL}`);
      setCurrentReviews(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingReviews(false);
    }
  }

  return { currentReviews, isLoadingReviews, getReviews, Reviews };
};

export default useHotelComments;
