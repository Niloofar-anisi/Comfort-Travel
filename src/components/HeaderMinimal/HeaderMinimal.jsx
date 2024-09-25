import { NavLink } from "react-router-dom";
import ModalFavourite from "../ModalFavourite/ModalFavourite";
import Login from "../Login/Login";
import User from "../User/User";
import { useAuth } from "../context/AuthProvider";
import { useFavorites } from "../context/Favorites";
import { useState } from "react";

const HeaderMinimal = () => {
  const { isAuthenticated } = useAuth();
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="hidden mobile-md:block mx-6">
      <div className=" flex items-center justify-between relative max-w-[90rem] mx-auto border border-solid bg-gray-800 border-gray-200 px-14 py-8  mb-4 rounded-xl">
        <div className="flex items-center justify-between gap-6 tablet:gap-10 font-semibold text-with tablet:text-lg">
          <NavLink className="text-with" to="/">
            Home
          </NavLink>
          <NavLink className="text-with" to="/about">
            About us
          </NavLink>
          <NavLink className="text-with" to="/contact">
            Contact us
          </NavLink>
        </div>
        <div className="flex items-center justify-between gap-14">
          {isAuthenticated && (
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
                  className="size-10"
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
          )}
          <ModalFavourite isOpen={isOpen} onClose={closePopup} />
          <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
          <User setIsLoginOpen={setIsLoginOpen} />
        </div>
      </div>
    </div>
  );
};

export default HeaderMinimal;
