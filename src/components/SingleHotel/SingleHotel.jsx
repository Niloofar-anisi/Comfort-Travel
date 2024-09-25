import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelProvider";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider.jsx";
import Login from "../Login/Login";

function SingleHotel() {
  const { id } = useParams();
  const { getHotel, isLoadingCurrHotel, currentHotel } = useHotels();
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    if (id && isMounted) {
      getHotel(id);
    }
    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (isAuthenticated && showLoginModal) {
      setShowLoginModal(false);
      navigate("/Reservation");
    }
  }, [isAuthenticated, showLoginModal, navigate]);

  if (isLoadingCurrHotel || !currentHotel) return <Loader />;

  const handleReservationClick = () => {
    if (isAuthenticated) {
      navigate("/Reservation");
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div className="tracking-tighter text-base flex justify-center items-center gap-8 max-h-screen max-w-7xl ">
      <div className="w-full scroll-my-0 h-auto mx-6">
        <p className="mb-8 lg:mt-14 font-semibold tablet:text-lg">
          {currentHotel.guests} guests &bull; {currentHotel.bedrooms} bedrooms
          &bull; {currentHotel.beds} beds &bull; {currentHotel.bathrooms}
          bathrooms
        </p>
        <div>
          <img
            className="w-2/3 mobile-md:w-2/4 h-auto rounded-lg mb-6 object-cover "
            src={currentHotel.xl_picture_url}
            alt={currentHotel.name}
          />
        </div>
        <div className="h-auto">
          <h2 className="text-sm md:text-base font-medium tracking-tighter my-8">
            What this place offers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-8  items-center justify-around">
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 2 .001 5H10V7H8v2H6V4h12zM6 20v-9h2v3h2v-3h8.001l.001 9H6z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.Fridge}</p>
            </div>
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.WIFI}</p>
            </div>
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <circle cx="4.5" cy="9.5" r="2.5"></circle>
                  <circle cx="9" cy="5.5" r="2.5"></circle>
                  <circle cx="15" cy="5.5" r="2.5"></circle>
                  <circle cx="19.5" cy="9.5" r="2.5"></circle>
                  <path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.Pets}</p>
            </div>
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,60H157l27.52-27.52a12,12,0,0,0-17-17L128,55,88.49,15.51a12,12,0,0,0-17,17L99,60H40A20,20,0,0,0,20,80V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V80A20,20,0,0,0,216,60ZM44,84h84V196H44ZM212,196H152V84h60Zm-44-80a16,16,0,1,1,16,16A16,16,0,0,1,168,116Zm32,48a16,16,0,1,1-16-16A16,16,0,0,1,200,164Z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.TV}</p>
            </div>
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M447.68 220.78a16 16 0 0 0-1-3.08l-37.78-88.16C400.19 109.17 379 96 354.89 96H157.11c-24.09 0-45.3 13.17-54 33.54L65.29 217.7A15.72 15.72 0 0 0 64 224v176a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h256v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V224a16.15 16.15 0 0 0-.32-3.22zM144 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm224 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM104.26 208l28.23-65.85C136.11 133.69 146 128 157.11 128h197.78c11.1 0 21 5.69 24.62 14.15L407.74 208z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.parking}</p>
            </div>
            <div className="flex items-center ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M73 41v78h110V41H73zm128 0v78h238V41H201zm199 23a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-176 7h48v18h-48V71zm80 0h48v18h-48V71zM73 137v350h366V137H73zm183 30c82.7 0 150 67.3 150 150s-67.3 150-150 150-150-67.3-150-150 67.3-150 150-150zm0 18c-73 0-132 59-132 132s59 132 132 132c48.5 0 90.8-26 113.7-64.9L339.6 360a94.02 94.02 0 0 1-83.6 51 94.02 94.02 0 0 1-94-94 94.02 94.02 0 0 1 94-94 94.02 94.02 0 0 1 85.7 55.3l30.4-24.3c-22.3-41.1-65.9-69-116.1-69zm-6.9 62c-50.1 1.1-76.9 51-62 93.9-.7-37.8 30.1-78 62-93.9zm130.6 23.9l-32 25.6A94.02 94.02 0 0 1 350 317a94.02 94.02 0 0 1-3.5 25.5l31.4 25.2C384.4 352.1 388 335 388 317c0-16.2-2.9-31.8-8.3-46.1z"></path>
                </svg>
              </span>
              <p className="font-normal text-sm mx-3">{currentHotel.Washing}</p>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <button className="bg-gray-600 text-with px-6 sm:px-10 py-2 tablet:px-8 tablet:py-1 text-sm sm:text-base tablet:text-lg font-semibold mt-4 rounded-xl hover:bg-gray-500 mr-5">
                Back
              </button>
            </Link>
            <button
              className="bg-rose-600 text-with px-6 sm:px-10 py-2 tablet:px-8 tablet:py-1 text-sm sm:text-base tablet:text-lg font-semibold mt-4 rounded-xl hover:bg-rose-500"
              onClick={handleReservationClick}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <Login
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}
export default SingleHotel;
