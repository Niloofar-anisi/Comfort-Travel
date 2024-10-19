import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAuth } from "../context/AuthProvider.jsx";

export function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  const popupLoginRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true);
      document.body.classList.add("overflow-hidden");
    } else {
      setShowPopup(false);
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useOutsideClick(popupLoginRef, null, onClose);

  if (!showPopup) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) login(email, password);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 bg-gray-500 bg-opacity-70 z-200">
      <div
        ref={popupLoginRef}
        className="w-4/5 ExtraSmall:max-w-screen-ExtraSmall min-h-[4rem] absolute h-auto overflow-auto bg-slate-100  sm:p-4 rounded-2xl shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-100 popup-enter "
      >
        <button onClick={onClose} className="p-4 sm:p-0">
          <span>
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

        <h2 className="text-lg font-semibold sm:text-xl text-gray-700 text-center">
          Log in or sign up
        </h2>

        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center mb-4 sm:m-3 text-center my-8"
        >
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 sm:w-20 sm:h-20 text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            className="font-normal text-sm mobile-md:text-base text-gray-600 placeholder:text-xs md:placeholder:text-sm placeholder:font-normal mt-3 border bg-zinc-50 border-solid border-gray-400 p-2 rounded-lg w-2/3"
            type="text"
            name="email"
            id="email"
            placeholder="Username or Email : user@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="font-normal  placeholder:text-xs text-gray-600 md:placeholder:text-sm placeholder:font-normal mt-3 border border-solid border-gray-400 p-2 rounded-lg w-2/3"
            type="password"
            id="password"
            name="password"
            placeholder="Password : 1234"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex item-center text-center  mt-8 mb-6 w-3/4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </span>
            <p className="mx-0 text-[0.7rem] sm:text-xs text-gray-500 font-normal ">
              Using Travell to time means
              <span className="text-blue-500">accepting the terms</span> and
              conditions of this service.
            </p>
          </div>

          <button className="py-2 my-4 px-4 rounded-lg bg-blue-500 text-white w-2/3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
