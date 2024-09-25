import {
  createSearchParams,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import ModalFavourite from "../ModalFavourite/ModalFavourite";
import Login from "../Login/Login";
import { useAuth } from "../context/AuthProvider";
import { useFavorites } from "../context/Favorites";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HeadersMobile = () => {
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);
  useEffect(() => {
    if (isAuthenticated) {
      setIsLoginOpen(false);
    }
  }, [isAuthenticated, setIsLoginOpen]);
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSearch = () => {
    const encodedParams = createSearchParams({
      destination,
    });
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };
  return (
    <>
      {/* headeer mobile */}
      <header className="sticky top-0 mobile-md:hidden mx-auto p-2 py-3 w-full h-44 mb-8 bg-with z-200 shadow-sm">
        <div className=" max-w-7xl text-center flex items-center mobile-md:hidden px-4 py-0 my-2 rounded-2xl mx-4">
          <div className="w-full flex items-center bg-cream border border-solid border-gray-200 px-4 py-2 my-2 rounded-3xl mx-auto shadow-lg">
            <div className="w-full flex items-center ">
              <span onSubmit={handleSearch} aria-label="Search">
                <svg
                  onClick={handleSearch}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-black w-5 h-5 sm:w-6 sm:h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full py-3 px-1 text-base placeholder:text-black placeholder:font-medium placeholder:bg-transparent"
                type="text"
                placeholder="Where to?"
                name="destination"
                id="destination"
              />
            </div>
          </div>
        </div>
        <div className="brightness-50 mx-4 px-4 ">
          <Swiper
            direction="horizontal"
            spaceBetween={20}
            grabCursor={true}
            freeMode={false}
            centeredSlides={false}
            breakpoints={{
              320: {
                slidesPerView: 4,
              },
              400: {
                slidesPerView: 5,
              },
              520: {
                slidesPerView: 6,
              },
              620: {
                slidesPerView: 7,
              },
              750: {
                slidesPerView: 8,
              },
              800: {
                slidesPerView: 9,
              },
              960: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide>
              <Link to={"/"}>
                <div className="tracking-tighter hover-border cursor-pointer flex flex-col items-center  align-center text-center gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Island.webp"
                      alt="Icon-Island"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-700">
                    Island
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Towers.webp"
                      alt="Icon-Towers"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Towers
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Luxe.webp"
                      alt="Icon-Luxe"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Luxe
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/News.webp"
                      alt="Icon-News"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    News
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Countryside.webp"
                      alt="Icon-Countryside"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Countryside
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Rooms.webp"
                      alt="Icon-Rooms"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Rooms
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Treehouses.webp"
                      alt="Icon-Treehouses"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Treehouses
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Cabin.webp"
                      alt="Icon-Cabin"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Cabin
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Play.webp"
                      alt="Icon-Play"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Play
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Camping.webp"
                      alt="Icon-Camping"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Camping
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Beach.webp"
                      alt="Icon-Beach"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Beach
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Design.webp"
                      alt="Icon-Design"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Design
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Lake.webp"
                      alt="Icon-Lake"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Lake
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Campers.webp"
                      alt="Icon-Campers"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Campers
                  </span>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/hotels"}>
                <div className="hover-border cursor-pointer flex items-center flex-col justify-start gap-1">
                  <span>
                    <img
                      className="w-6 h-6"
                      src="img/Mansions.webp"
                      alt="Icon-Mansions"
                    />
                  </span>
                  <span className="inline-block hover:text-gray-900 text-xs font-medium text-gray-600">
                    Mansions
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </header>

      {/* footer mobile */}
      <div className="mobile-md:hidden fixed bottom-0 w-full z-200 shadow-sm border-line">
        <div className="bg-white p-3 shadow-lg mx-auto">
          <div className="max-w-screen-md grid grid-cols-3 items-center justify-between text-gray-400">
            <div className="w-3/4">
              <Link className="flex  flex-col items-center gap-1" to="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
                <p className="text-sm text-neutral-600  font-medium mt-1">
                  Home
                </p>
              </Link>
            </div>
            <div className="w-3/4 flex flex-col items-center justify-center gap-1">
              {isAuthenticated ? (
                <div className="relative">
                  <span
                    onClick={openPopup}
                    className=" text-rose-500 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </span>
                  <span className="absolute top-0 -right-1 inline-block px-1 bg-rose-500 text-sm text-white font-semibold rounded-full">
                    {favorites.length}
                  </span>
                </div>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </span>
              )}
              <p className="text-sm text-neutral-600 font-medium">Reserve</p>

              <ModalFavourite isOpen={isOpen} onClose={closePopup} />
              <Login
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
              />
            </div>
            <div className="mr-10">
              {isAuthenticated ? (
                <div className="flex items-center mr-8 sm:mr-4">
                  <span className="text-black font-semibold">user.name</span>
                  <span>
                    <svg
                      onClick={handleLogout}
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6  text-black ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => setIsLoginOpen(true)}
                  className="w-3/4 flex items-center flex-col justify-end gap-1 font-semibold pr:4 mr-8 sm:mr-4"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </span>
                  <p className=" text-sm text-neutral-600 font-medium mt-1">
                    Log in
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadersMobile;
