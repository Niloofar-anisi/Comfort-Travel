import React, { useEffect } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useHotels } from "../context/HotelProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import GuestComments from "../GuestComments/GuestComments.jsx";

function Reservation() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const { currentHotel } = useHotels();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-full mobile-md:max-w-[90rem] mx-auto">
      <p className="mx-6 font-semibold text-lg sm:text-xl mobile-md:text-2xl my-6">
        {currentHotel.summary}
      </p>
      <div className="hidden md:flex mx-6 items-center justify-between gap-2 my-8 cursor-pointer">
        <div className="w-1/2">
          <img
            className="rounded-l-xl transition filter hover:brightness-75"
            src={currentHotel.xl_picture_url}
            alt="picture-place"
          />
        </div>
        <div className="flex items-center w-1/2">
          <div className="flex items-center flex-col item gap-2 mr-2">
            <img
              className="object-cover transition filter hover:brightness-75"
              src={currentHotel.imgPlace1_url}
              alt="picture-place"
            />
            <img
              className="object-cover transition filter hover:brightness-75"
              src={currentHotel.imgPlace2_url}
              alt="picture-place"
            />
          </div>
          <div className="flex items-center flex-col item gap-2">
            <img
              className="object-cover rounded-tr-xl transition filter hover:brightness-75"
              src={currentHotel.imgPlace3_url}
              alt="picture-place"
            />
            <img
              className="object-cover rounded-br-xl transition filter hover:brightness-75"
              src={currentHotel.imgPlace4_url}
              alt="picture-place"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:hidden relative">
        <Swiper
          spaceBetween={30}
          pagination={{
            type: "fraction",
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img
              src={currentHotel.xl_picture_url}
              alt={`Slide`}
              className="sm:w-full h-auto  mb-10 px-6 relative"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={currentHotel.imgPlace1_url}
              alt={`Slide`}
              className="sm:w-full h-auto  mb-10 px-6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={currentHotel.imgPlace2_url}
              alt={`Slide`}
              className="sm:w-full h-auto  mb-10 px-6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={currentHotel.imgPlace3_url}
              alt={`Slide`}
              className="sm:w-full h-auto  mb-10 px-6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={currentHotel.imgPlace4_url}
              alt={`Slide`}
              className="sm:w-full h-auto  mb-10 px-6"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-6 max-w-[90rem] flex items-start justify-between">
        <div className="mx-6 w-full mobile-md:w-2/3 mobile-md:mx-1">
          <p className="text-xl md:text-2xl tablet:text-3xl font-semibold text-black mb-5">
            Confirm and pay
          </p>
          <p className="font-semibold text-xl md:text-2xl mb-4">Your trip</p>
          <div className="flex items-center justify-between">
            <div className="my-4">
              <p className="font-medium">Dates</p>
              <p className="text-sm sm:text-base tracking-tighter">
                {currentHotel.date}
              </p>
            </div>
            <p className="font-medium underline underline-offset-1 cursor-pointer mr-6 mobile-md:mr-0">
              Edit
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="my-4">
              <p className="font-medium">Guests</p>
              <p className="text-sm sm:text-base tracking-tighter">
                {currentHotel.guests} guests
              </p>
            </div>
            <p className="font-medium underline underline-offset-1 cursor-pointer mr-6 mobile-md:mr-0">
              Edit
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="my-4">
              <p className="font-medium">Bedrooms</p>
              <p className="text-sm sm:text-base tracking-tighter">
                {currentHotel.bedrooms} bedrooms
              </p>
            </div>
            <p className="font-medium underline underline-offset-1 cursor-pointer mr-6 mobile-md:mr-0">
              Edit
            </p>
          </div>
          <div className="h-0.5 bg-gray-100 max-w-screen-xl z-50 mr-6 mobile-md:mr-0 my-6 "></div>
          <div className="mobile-md:hidden w-full">
            <PriceDetailsCard currentHotel={currentHotel} />
          </div>
          <div>
            <p className="font-bold text-xl sm:font-semibold sm:text-2xl my-8">
              Residence time regulations
            </p>
            <div className=" w-full sm:flex sm:items-center sm:justify-start gap-6 mb-8">
              <div className=" px-4 py-2  border border-solid border-gray-400 rounded-lg w-2/3 sm:w-1/3 mobile-md:w-2/3 ExtraLarge:w-1/3 h-auto">
                <p className="my-2 font-semibold text-sm sm:text-base md:text-lg  text-gray-400">
                  arrival time
                </p>
                <p className="my-2 font-semibold text-sm md:text-lg  text-gray-600">
                  Time 14:00 - 24:00
                </p>
              </div>
              <div className="mt-5 sm:mt-0 px-4 py-2  border border-solid border-gray-400 rounded-lg w-2/3 sm:w-1/3 mobile-md:w-2/3 ExtraLarge:w-1/3 h-auto">
                <p className="my-2 font-semibold text-sm sm:text-base md:text-lg  text-gray-400">
                  Departure Time
                </p>
                <p className="my-2 font-semibold text-sm md:text-lg  text-gray-600">
                  Time 12:00
                </p>
              </div>
            </div>
          </div>
          <div className="h-0.5 bg-gray-100 max-w-screen-xl z-50 my-6 mr-6  mobile-md:mr-0"></div>
          <div>
            <p className="font-bold text-xl sm:font-semibold sm:text-2xl my-8">
              Reservation cancellation policy
            </p>
            <div className=" flex flex-col gap-2">
              <CancellationPolicy />
            </div>
          </div>
        </div>
        <div className="hidden mobile-md:block w-2/4  py-4  md:sticky md:top-4 ">
          <PriceDetailsCard currentHotel={currentHotel} />
        </div>
      </div>
      <div className="h-0.5 bg-gray-100 w-full  z-50 my-6"></div>
      <div>
        <GuestComments />
      </div>
    </div>
  );
}
export default React.memo(Reservation);
function CancellationPolicy() {
  return (
    <div>
      <div className="mb-2 flex items-start justify-start gap-4">
        <div>
          <img className="w-8 h-8" src="img/cancel2day.svg" alt="cancel" />
        </div>
        <div className="tracking-tighter">
          <p className="text-green-600 font-medium sm:text-lg mb-2">
            Cancelation up to 48 hours before check-in.
          </p>
          <p className="text-gray-500 text-sm">
            Deducting 15% of the total amount for all nights.
          </p>
        </div>
      </div>
      <div className="bg-border mb-2 flex items-start justify-start gap-4 my-6 mr-6 mobile-md:mr-0">
        <div>
          <img className="w-8 h-8 mt-2" src="img/cancel48.svg" alt="cancel" />
        </div>
        <div className="tracking-tighter mt-2">
          <p className="text-amber-500 font-medium sm:text-lg mb-2">
            Cancelation within 48 hours before check-in.
          </p>
          <p className="text-gray-500 text-sm">
            Full charge for canceled nights.
          </p>
        </div>
      </div>
      <div className="bg-border mb-2 flex items-start justify-start gap-4 my-6 mr-6 mobile-md:mr-0">
        <div>
          <img
            className="w-8 h-8 mt-2"
            src="img/cancel-during.svg"
            alt="cancel"
          />
        </div>
        <div className="tracking-tighter mt-2">
          <p className="text-rose-500 font-medium sm:text-lg mb-2">
            Cancellation after check-in.
          </p>
          <p className="text-gray-500 text-sm">
            Cost of nights stayed + cost of the next two nights + 15% of
            remaining nights
          </p>
        </div>
      </div>
    </div>
  );
}

function PriceDetailsCard({ currentHotel }) {
  return (
    <div className="mobile-md:mx-6 mr-6 mobile-md:mr-0 border border-solid border-gray-200 rounded-xl shadow-xl">
      <div className="flex items-center justify-start gap-4 p-4">
        <div>
          <img
            className="hidden md:block w-28 rounded-lg  object-cover"
            src={currentHotel.xl_picture_url}
            alt={currentHotel.name}
          />
        </div>
        <div className="flex flex-col gap-1 items-start justify-between tracking-tighter ">
          <p className="font-semibold lg:text-lg">{currentHotel.name}</p>
          <p>{currentHotel.smart_location}</p>
          <div className="flex item-center justify-start gap-2">
            <div className="flex items-center">
              <span className="font-medium mr-1">
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
              <span className="font-medium">{currentHotel.star}</span>
            </div>
            <div>( {currentHotel.reviews} reviews )</div>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-gray-100 max-w-screen-xl z-50 my-3 mx-3"></div>
      <div className="flex flex-col gap-4 p-4">
        <p className="font-semibold text-xl mb-2">Price details</p>
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm lg:text-base flex items-start justify-center">
            <p className="font-semibold"> € {currentHotel.PricePerNight}</p>{" "}
            &nbsp; x &nbsp;
            {currentHotel.numberOfNights}
            &nbsp;nights
          </div>
          <p className="text-sm lg:text-base">
            €&nbsp;
            {currentHotel.roomPrice}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm lg:text-base"> Cleaning fee</p>
          <p className="text-sm lg:text-base">€ {currentHotel.cleaningFee}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm lg:text-base">service fee</p>
          <p className="text-sm lg:text-base">€ {currentHotel.ServiceFee}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm lg:text-base">Taxes</p>
          <p className="text-sm lg:text-base">€ {currentHotel.taxes}</p>
        </div>
      </div>
      <div className="h-0.5 bg-gray-100 max-w-screen-xl z-50 my-3 mx-3"></div>
      <div>
        <div className="flex items-center justify-between gap-3 p-4">
          <p className="font-semibold">Total (EUR)</p>
          <p className="font-semibold">€ {currentHotel.totalPrice}</p>
        </div>
        <div className="m-4">
          <button className="font-semibold w-full rounded-xl bg-rose-500 text-with cursor-pointer  hover:bg-rose-600 px-4 py-2 ">
            Rezerve
          </button>
        </div>
      </div>
    </div>
  );
}
