import { useHotels } from "../context/HotelProvider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import useHotelComments from "../../hooks/useHotelComments";
import { useState } from "react";

function GuestComments() {
  const { currentHotel } = useHotels();
  const { Reviews } = useHotelComments();

  const [showMoreReviews, setShowMoreReviews] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});

  const LONG_TEXT = 150;

  const toggleExpand = (item) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const isLongText = (text) => text.length > LONG_TEXT;

  const ReviewText = (text, isExpanded) => {
    return isExpanded ? text : `${text.slice(0, LONG_TEXT)}...`;
  };

  return (
    <>
      <div>
        <div>
          <p className="mx-6 font-bold text-xl sm:font-semibold sm:text-2xl">
            Guest comments
          </p>
          <div className="mx-6 flex items-center justify-start gap-2 my-4">
            <span className="font-medium">
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
            <p className="font-semibold">{currentHotel.star}</p>
            <p className="text-sm tablet:font-semibold">
              ( {currentHotel.reviews} reviews )
            </p>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-6 gap-4 items-center justify-between tracking-tighter my-8">
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3">
            <p className="font-medium text-sm mobile-md:text-base">Location</p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.Location}
            </p>
            <span className=" tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3 border-ltr ">
            <p className="font-medium text-sm mobile-md:text-base">Check-in</p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.residence}
            </p>
            <span className=" tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3 border-ltr ">
            <p className="font-medium text-sm mobile-md:text-base">
              Cleanliness
            </p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.Cleaning}
            </p>
            <span className=" tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3 border-ltr ">
            <p className="font-medium text-sm mobile-md:text-base">
              Communication
            </p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.Communication}
            </p>
            <span className="font-light tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3 border-ltr ">
            <p className="font-medium text-sm mobile-md:text-base">Value</p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.Accepting}
            </p>
            <span className=" tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start justify-between tablet:px-6 pl-3 border-ltr ">
            <p className="font-medium text-sm mobile-md:text-base">Accuracy</p>
            <p className="mobile-md:font-semibold tablet:text-lg">
              {currentHotel.Information}
            </p>
            <span className=" tablet:w-7 tablet:h-7 w-6 h-6 my-3">
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
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden md:block bg-border my-4">
          <div className="mx-6 grid grid-cols-2 gap-4 justify-between">
            {Reviews.length > 0 ? (
              <>
                {Reviews.slice(0, showMoreReviews ? undefined : 4).map(
                  (review) => (
                    <Review
                      key={review.id}
                      review={review}
                      isExpanded={expandedReviews[[review.id]]}
                      onToggle={() => toggleExpand([review.id])}
                      isLongText={isLongText}
                      ReviewText={ReviewText}
                    />
                  )
                )}
              </>
            ) : (
              <p className="my-6 text-lg font-semibold">
                No reviews available.
              </p>
            )}
          </div>
          {Reviews.length > 4 && (
            <div className="mx-6 font-semibold my-6">
              <div onClick={() => setShowMoreReviews(!showMoreReviews)}>
                {showMoreReviews ? (
                  <button className=" border border-solid border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-100 shadow-md bg-zinc-50">
                    Show less
                  </button>
                ) : (
                  <button className="border border-solid border-gray-300 rounded-lg py-3 px-4 hover:bg-gray-100 shadow-md bg-zinc-50">
                    Show all {Reviews.length} reviews
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={900}
            modules={[Autoplay]}
          >
            {Reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mx-auto mb-32 w-full mr-6 mobile-md:mr-0">
                  <div className="w-full gap-4 justify-between">
                    <div className="px-4 py-6 my-4 bg-zinc-50 rounded-2xl shadow-xl mx-6 h-72 md:h-64">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          className="w-12 h-12 rounded-full object-cover"
                          src={item.imgUser}
                          alt="user"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {item.namecomments}
                          </p>
                          <div className="flex items-start justify-start gap-2">
                            <div className="flex items-center gap-1">
                              <span className="flex items-center">
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
                                <p className="font-semibold text-sm">
                                  {item.starcomments}
                                </p>
                              </span>
                            </div>
                            <p className="text-sm font-semibold">
                              •&nbsp;{item.datecomments}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="tracking-tighter font-medium">
                          {item.textcomments}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default GuestComments;

function Review({ review, isExpanded, onToggle, ReviewText, isLongText }) {
  return (
    <div className="p-4 my-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={review.imgUser}
          alt="user"
        />
        <div>
          <p className="text-sm font-semibold">{review.namecomments}</p>
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1">
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

              <p className="font-semibold text-sm">{review.starcomments}</p>
            </div>
            <p className="text-sm font-semibold">
              &bull;&nbsp;{review.datecomments}
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/4 ">
        <p className="tracking-tighter font-medium">
          {ReviewText(review.textcomments, isExpanded)}
        </p>
      </div>
      {isLongText(review.textcomments) && (
        <button
          onClick={onToggle}
          className="mt-2 text-black font-semibold underline"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
