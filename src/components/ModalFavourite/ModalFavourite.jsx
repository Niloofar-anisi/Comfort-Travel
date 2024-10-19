import { useFavorites } from "../context/Favorites";
import { useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function ModalFavourite({ isOpen, onClose }) {
  const { favorites, removeFavorite } = useFavorites();
  const popupFavRef = useRef(null);

  useOutsideClick(popupFavRef, "close-button", onClose);
  if (!isOpen) return null;
  return (
    <div className="w-screen h-screen fixed inset-0 bg-gray-500 bg-opacity-70 z-200">
      <div
        ref={popupFavRef}
        className="w-[90%] h-auto sm:max-w-screen-sm min-h-[4rem] absolute overflow-hidden bg-slate-100 p-4 rounded-2xl shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-100"
      >
        <div className="flex items-center justify-between my-2 border-b-2 border-gray-500">
          <h1 className="text-lg ExtraSmall:text-xl sm:text-2xl font-bold text-center my-3 text-gray-800">
            List Of favourites
          </h1>
          <button id="close-button" className="text-white ">
            <span onClick={onClose} className="w-8 h-8 text-black text-left">
              <svg
                className="w-7 h-7 mx-2"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="w-full mx-auto max-h-[23rem] lg:max-h-[27rem] overflow-y-scroll">
          {favorites.length === 0 ? (
            <div>
              <p className="text-gray-600 text-center my-3">
                There are no items to display
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 ExtraSmall:grid-cols-2 h-full gap-4 px-1 ExtraSmall:gap-2  md:gap-6 ">
              {favorites.map((item) => (
                <div key={item.id} className=" rounded-2xl">
                  <div className="p-2 bg-gray-200 rounded-2xl px-auto">
                    <div className="w-auto  h-full flex flex-col items-center justify-between">
                      <div className="w-auto h-full">
                        <img
                          className="w-auto h-full object-object-cover rounded-t-2xl pt-3"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="w-full py-2 flex flex-col text-black mt-2">
                          <div className="ExtraSmall:hidden flex sm:flex sm:items-baseline justify-between gap-2">
                            <p className=" font-semibold text-[0.9rem]">
                              {item.location}
                            </p>
                            <div className=" flex items-center gap-1">
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
                              <span className="text-sm font-semibold">
                                {item.star}
                              </span>
                            </div>
                          </div>
                          <div className="flex ExtraSmall:flex-col sm:flex-row sm:my-2 items-center justify-between">
                            <div>
                              <p className="hidden ExtraSmall:block sm:hidden text-center font-semibold text-[0.9rem]">
                                {item.location}
                              </p>
                              <p className="text-sm ExtraSmall:text-center mt-2">
                                {item.date}
                              </p>
                            </div>
                            <div className="flex items-center  mt-2">
                              <p className="font-semibold text-sm">
                                €&nbsp;{item.Price}&nbsp;
                              </p>
                              <span className="font-medium text-sm">night</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFavorite(item.id)}
                            className="mt-2 px-4 py-1 w-full p-4 bg-rose-600 hover:bg-rose-500 text-with rounded-lg"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalFavourite;
