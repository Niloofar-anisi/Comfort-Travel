import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import "swiper/css";
import "swiper/css/navigation";
import { useHotels } from "../context/HotelProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useFavorites } from "../context/Favorites";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider.jsx";

function LocationList() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <SliderDataHome />
      <LocationDataHome />
    </div>
  );
}

export default LocationList;

function SliderDataHome() {
  const { isLoading, hotels } = useHotels();
  if (isLoading) return <Loader />;

  return (
    <>
      <div>
        <p className="text-gray-600 text-base text-center">
          simply amazing places
        </p>
        <h1 className="text-2xl sm:text-4xl text-center mt-5 mb-12 font-semibold tracking-tighter px-2">
          beautiful places around the world
        </h1>
      </div>
      <div className="mb-32 relative mx-auto px-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={700}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            500: { slidesPerView: 2, spaceBetween: 20 },
            850: { slidesPerView: 3, spaceBetween: 20 },
            1110: { slidesPerView: 4, spaceBetween: 10 },
            1410: { slidesPerView: 4, spaceBetween: 20 },
          }}
          modules={[Autoplay, Navigation]}
        >
          {hotels.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                data-testid="SliderDataHome"
                className="w-full h-80 rounded-xl p-2 bg-zinc-100 shadow-sm"
              >
                <div>
                  <img
                    className=" w-full h-40 rounded-lg object-cover"
                    src={item.xl_picture_url}
                    alt={item.Title}
                    loading="lazy"
                  />
                </div>
                <Link
                  to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
                >
                  <div className="p-2">
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-black font-medium tracking-tighter">
                        {item.Title}
                      </p>
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        {item.star}
                      </span>
                    </div>
                    <p className="my-1 text-sm">{item.Distance}</p>
                    <p className="mb-1 text-sm">{item.date}</p>
                    <div className="flex items-center text-sm">
                      <p className="text-black font-semibold">
                        €&nbsp;{item.PricePerNight}&nbsp;
                      </p>
                      <span className="text-black">night</span>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          aria-label="Left"
          className="hidden custom-prev absolute -left-0 top-36 transform border-solid border-2 border-gray-400 text-black p-2 tablet:block rounded-full z-50"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <button
          aria-label="Right"
          className="hidden custom-next absolute -right-0 top-36 transform border-solid border-2 border-gray-400 text-black p-2 tablet:block rounded-full z-50"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}

function LocationDataHome() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { hotels } = useHotels();
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && showLoginModal) {
      setShowLoginModal(false);
      navigate("/");
    }
  }, [isAuthenticated, showLoginModal, navigate]);

  const handleFavoriteToggle = (item) => {
    if (isAuthenticated) {
      if (favorites.some((fav) => fav.id === item.id)) {
        removeFavorite(item.id);
      } else {
        addFavorite(item);
      }
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <p className="text-gray-600 text-base text-center mt-20">
        simply amazing places
      </p>
      <h2 className="text-2xl sm:text-4xl text-center mt-5 mb-20 font-semibold tracking-tighter">
        Popular Destinations
      </h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 justify-center justify-items-center gap-4 ">
        {hotels.map((item) => (
          <div
            data-testid="LocationDataHome"
            className="relative"
            key={item.id}
          >
            <div>
              <span>
                <svg
                  onClick={() =>
                    handleFavoriteToggle({
                      id: item.id,
                      img: item.thumbnail_url,
                      location: item.smart_location,
                      star: item.star,
                      Price: item.PricePerNight,
                      date: item.date,
                    })
                  }
                  className={`cursor-pointer w-7 h-7 ${
                    favorites.some((fav) => fav.id === item.id)
                      ? "text-red-500 "
                      : "text-white hover:w-8 h-8 ease-in  duration-200"
                  } absolute bottom-4/4 translate-y-2 right-7 z-50`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
              <img
                className="object-cover h-48 w-96 object-center rounded-md flex-1"
                src={item.xl_picture_url}
                alt={item.Title}
              />
            </div>
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div className="m-3 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{item.smart_location}</p>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold">{item.star}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{item.name}</p>
                <div className="flex items-center text-sm mt-2">
                  <p className="text-stone-800 font-semibold bg-orange-200 px-2 py-1 rounded-lg mr-2 cursor-pointer">
                    €&nbsp;{item.PricePerNight}&nbsp;
                  </p>
                  <span className="text-stone-800 font-semibold">Night</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {showLoginModal && (
        <Login
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </>
  );
}
