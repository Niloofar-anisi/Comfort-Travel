import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick.js";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {
  createSearchParams,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider.jsx";
import { useFavorites } from "../components/context/Favorites.jsx";
import Login from "../components/Login/Login.jsx";
import ModalFavourite from "../components/ModalFavourite/ModalFavourite.jsx";
import User from "../components/User/User.jsx";

function Home() {
  const { isAuthenticated } = useAuth();
  const { favorites } = useFavorites();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const navigate = useNavigate();
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination,
      options: JSON.stringify(options),
    });
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };

  return (
    <div className="hidden mobile-md:block mb-8 mt-10 mx-auto">
      <img
        className="hidden mobile-md:block w-full h-auto  absolute top-0 -z-10"
        src="img/Header.webp"
        alt="image-Header"
        loading="lazy"
      />
      <div className="max-w-screen-xl mx-auto px-48  tablet:px-0 tablet:gap-x-32 gap-x-96 top-12 tablet:flex items-center justify-evenly cursor-pointer ">
        <div className="hidden tablet:flex items-center justify-start md:gap-6 md:text-base lg:text-lg md:font-semibold xl:gap-16 xl:font-bold text-with xl:text-xl">
          <NavLink to="/">Home</NavLink>
          <NavLink to="">About us</NavLink>
          <NavLink to="">Contact us</NavLink>
        </div>
        <div className="flex items-center justify-between gap-14">
          {isAuthenticated && (
            <div className="relative">
              <span
                onClick={openPopup}
                className="w-10 h-10 text-rose-600 cursor-pointer"
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

      <div className="w-full mx-auto flex flex-col flex-1 items-center mobile-md:text-lg z-10 mt-40 mb-24 tablet:mt-48 lg:mt-56 Large:mt-64 ExtraLarge:mt-[19rem] xl:mt-[21rem] xl:mb-36 2ExtraLarge:mt-[25rem] 3xl:mt-[29rem] 4xl:mt-[34rem] 4xl:mb-36">
        <h1 className="text-2xl tablet:text-3xl xl:text-4xl 3xl:text-5xl font-black font-Peta mt-12 mb-4 text-with ">
          Your Journey Begins Here
        </h1>
        <div className="flex items-center gap-1 md:p-2 lg:p-3 3xl:p-4 z-30 rounded-md xl:mx-auto bg-white">
          <div className="flex items-center relative">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 w-6 h-6  inline-block"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <input
              className="py-3 px-2 text-sm tablet:text-base"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              type="text"
              placeholder="Where to go?"
              name="destination"
              id="destination"
            />
            <span className="w-0.5 h-7 bg-gray-300 inline-block mx-4"></span>
          </div>
          <div
            data-testid="CalenderDate"
            className="flex items-center relative"
          >
            <CalenderDate
              setOpenDate={setOpenDate}
              openDate={openDate}
              date={date}
              setDate={setDate}
            />
            <span className="w-0.5 h-7 bg-gray-300 inline-block mx-4"></span>
          </div>

          <div className="hidden lg:flex text-base items-center relative tabular-nums slashed-zero">
            <div
              id="optionDropDown"
              onClick={() => setOpenOptions(!openOptions)}
              data-testid="option-dropdown"
            >
              {options.adult} adult &nbsp;&bull;&nbsp; {options.children}{" "}
              children &nbsp;&bull;&nbsp;
              {options.room} room
            </div>
            {openOptions && (
              <GuestOptionList
                setOpenOptions={setOpenOptions}
                handleOptions={handleOptions}
                options={options}
              />
            )}
            <span className="w-0.5 h-7 bg-gray-300 inline-block mx-4"></span>
          </div>
          <div className="flex items-center relative tabular-nums">
            <button
              className="w-10 h-10 rounded-full tablet:w-15 lg:w-20 tablet:h-10 flex items-center justify-center p-1 tablet:rounded-md bg-gray-700"
              onClick={handleSearch}
              aria-label="Search"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-zinc-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

function CalenderDate({ setOpenDate, openDate, date, setDate }) {
  const optionRef = useRef();
  useOutsideClick(optionRef, "optionDropDownData", () => setOpenDate(false));
  return (
    <div
      ref={optionRef}
      id="optionDropDownData"
      className="flex  items-center relative tabular-nums slashed-zero"
      data-testid="Calendar"
    >
      <span className="text-gray-400 w-6 h-6 inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <div
        onClick={() => setOpenDate(!openDate)}
        className="text-xs tablet:text-sm ml-1 "
      >
        {`${format(date[0].startDate, "MM/dd/yyyy")} TO ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}
      </div>
      {openDate && (
        <DateRange
          onChange={(item) => setDate([item.selection])}
          ranges={date}
          minDate={new Date()}
          moveRangeOnFirstSelection={true}
          className="p-1 absolute top-12  w-w-full  h-30 z-50 bg-gray-50 border-solid border-1 border-gray-100 drop-shadow-sm rounded"
        />
      )}
    </div>
  );
}

function GuestOptionList({ options, handleOptions, setOpenOptions }) {
  const optionRef = useRef();
  useOutsideClick(optionRef, "optionDropDown", () => setOpenOptions(false));
  return (
    <div
      className="
       p-4 absolute top-12  w-w-full h-30 z-50 bg-gray-50 border-solid border-1 border-gray-100 drop-shadow-sm rounded"
      ref={optionRef}
      data-testid="options-menu"
    >
      <OptionItem
        handleOptions={handleOptions}
        type="adult"
        options={options}
        minLimit={1}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="children"
        options={options}
        minLimit={0}
      />
      <OptionItem
        handleOptions={handleOptions}
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function OptionItem({ options, type, minLimit, handleOptions }) {
  return (
    <div className="flex items-center justify-between gap-4 my-3">
      <span className="inline-block flex-1 text-sm">{type}</span>
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleOptions(type, "dec")}
          className="p-1 bg-gray-300 rounded-md"
          disabled={options[type] <= minLimit}
          data-testid="minus-button"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <span className="inline-block flex-1 text-sm">{options[type]}</span>
        <button
          onClick={() => handleOptions(type, "inc")}
          className="p-1 bg-gray-300 rounded-md"
          data-testid="plus-button"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
