import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useHotels } from "../context/HotelProvider";

function Hotels() {
  const { isLoading, hotels, currentHotel } = useHotels();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h2 className="mx-6 font-semibold text-xl tablet:text-2xl mb-4">
        Search Results({hotels.length})
      </h2>
      <div
        className="mx-6 grid grid-cols-1 mobile-md:grid-cols-2 gap-4 mobile-md:gap-8"
        id="sectionId"
      >
        {hotels.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div
                className={`flex gap-4 items-center ${
                  item.id === currentHotel?.id
                    ? "sm:border-solid sm:border sm:p-1 sm:rounded-lg"
                    : ""
                }`}
              >
                <img
                  className="rounded-md object-cover"
                  src={item.thumbnail_url}
                  alt={item.name}
                />
                <div className="mb-2 flex flex-col gap-1 w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm sm:text-base mobile-md:text-sm font-semibold">
                      {item.smart_location}
                    </p>
                    <div className="hidden ExtraSmall:flex items-center gap-1">
                      <span className="text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base font-semibold">
                        {item.star}
                      </span>
                    </div>
                  </div>
                  <p className="hidden sm:block sm:text-base mobile-md:text-sm text-gray-500">
                    {item.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-black ExtraSmall:mt-3 sm:mt-1 text-sm sm:text-base mobile-md:text-sm font-medium mobile-md:font-bold rounded-lg m-0">
                      €{item.PricePerNight}&nbsp;
                    </p>
                    <span className="text-sm ExtraSmall:mt-3 sm:mt-1 sm:text-base text-stone-800 font-medium mobile-md:text-sm">
                      night
                    </span>
                  </div>
                  <div className="flex items-center gap-1 ExtraSmall:hidden">
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
                    <span className="text-sm sm:text-base font-semibold">
                      {item.star}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Hotels;
