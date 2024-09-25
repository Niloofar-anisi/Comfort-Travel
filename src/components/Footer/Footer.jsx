import { Link } from "react-router-dom";

function Footer() {
  const handlescrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-zinc-100 w-full h-auto mt-28 text-center">
      <div className="text-center w-4/6 grid grid-cols-1 mb-4 tablet:grid-cols-3 gap-0 items-center justify-between mx-auto relative">
        <div className="text-center my-6 flex flex-col gap-2 tablet:my-12  items-center justify-between font-sans">
          <div>
            <p className="font-semibold text-xl mb-4 cursor-pointer">
              About us
            </p>
            <p className="text-sm p-3 leading-5">
              Plan your perfect trip with Travell
            </p>
          </div>
          <div>
            <p className="font-semibold">Contact us</p>
            <div className="flex items-center justify-start gap-2">
              <span className="w-4 h-4 text-gray-600 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <a className="text-sm" href="tel:+1235-2355-98">
                +1235-2355-98
              </a>
            </div>

            <div className="flex items-center justify-start gap-2">
              <span className="w-4 h-4 text-gray-600 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
              <a className="text-sm" href="mailto:n.anisi@yahoo.com">
                n.anisi@yahoo.com
              </a>
            </div>
          </div>
        </div>
        <div className="text-center my-6 tablet:my-10">
          <p className="font-semibold text-xl mb-3 cursor-pointer">
            Information
          </p>
          <p className="my-3 cursor-pointer mt-6">About us</p>
          <p className="my-3 cursor-pointer">Reception</p>
          <p className="my-3 cursor-pointer">Discounts</p>
          <p className="my-3 cursor-pointer">Room</p>
          <p className="my-3 cursor-pointer">Flying</p>
        </div>
        <div className="text-center flex items-center flex-col">
          <p className="font-semibold text-xl mb-3 cursor-pointer">
            Information
          </p>
          <p className="my-3 cursor-pointer">Services</p>
          <p className="my-3 cursor-pointer">Supports</p>
          <p className="my-3 cursor-pointer">Privacy Policy</p>
          <button
            aria-label="Up"
            onClick={handlescrollToTop}
            className="w-20 flex items-center flex-col text-center rounded-xl"
          >
            <span className="w-9 h-9 text-black text-center">
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
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="border-line text-center p-4 ">
        <div className="flex items-center justify-center gap-8 my-6">
          <span>
            <svg
              viewBox="0 0 25 25"
              className="size-8"
              fill="currentColor"
              title="Telegram"
            >
              <path d="m10.282 13.788-.264 3.722c.379 0 .542-.162.74-.358l1.775-1.696 3.679 2.694c.674.376 1.15.178 1.332-.621l2.414-11.315c.215-.998-.36-1.388-1.018-1.143L4.747 10.504c-.969.377-.953.916-.165 1.16l3.63 1.13L16.64 7.52c.397-.263.758-.117.46.145l-6.818 6.123Z"></path>
            </svg>
          </span>
          <Link to={"https://github.com/Niloofar-anisi?tab=repositories"}>
            <span className="w-5 h-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 496 512"
                className="w-5 h-5 size-5"
                aria-label="Github"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </span>
          </Link>
          <Link to={"https://www.linkedin.com/in/niloofar-anisi-9879a624a/"}>
            <span>
              <svg
                aria-label="Linkedin"
                viewBox="0 0 32 32"
                className="size-5"
                fill="currentColor"
                title="Linkedin logo"
              >
                <path
                  d="M25.333 0A6.667 6.667 0 0132 6.667v18.666A6.667 6.667 0 0125.333 32H6.667A6.667 6.667 0 010 25.333V6.667A6.667 6.667 0 016.667 0h18.666zm-8.637 11.13h-4.174v15.305h4.174v-7.797c0-4.331 5.565-4.686 5.565 0v7.797h4.174V17.03c0-7.309-7.797-7.043-9.74-3.445V11.13h.001zm-6.957 0H5.565v15.305H9.74V11.13h-.001zM7.652 4.458a2.445 2.445 0 00-2.435 2.454 2.445 2.445 0 002.435 2.454 2.444 2.444 0 002.435-2.454 2.444 2.444 0 00-2.435-2.454z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </Link>
          <span>
            <svg
              aria-label="Instagram"
              viewBox="0 0 32 32"
              className="size-5"
              fill="currentColor"
              title="Instagram logo"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.638.001c2.88.005 3.49.028 4.951.095 1.703.078 2.866.348 3.883.743a7.841 7.841 0 012.833 1.845 7.842 7.842 0 011.845 2.833c.395 1.018.666 2.18.743 3.883.072 1.56.093 2.149.096 5.558v2.073c-.003 3.41-.024 3.999-.096 5.558-.077 1.703-.348 2.866-.743 3.883a7.844 7.844 0 01-1.845 2.833 7.842 7.842 0 01-2.833 1.845c-1.017.395-2.18.666-3.883.743-1.56.072-2.148.093-5.558.096h-2.073c-3.41-.003-3.998-.024-5.558-.096-1.702-.077-2.865-.348-3.883-.743a7.841 7.841 0 01-2.833-1.845A7.84 7.84 0 01.84 26.472c-.395-1.017-.665-2.18-.743-3.883-.067-1.462-.09-2.071-.095-4.95V14.35c.005-2.88.028-3.489.095-4.951.078-1.702.348-2.865.743-3.883a7.84 7.84 0 011.845-2.833A7.84 7.84 0 015.517.84C6.535.444 7.697.174 9.4.096c1.462-.067 2.071-.09 4.951-.095h3.287zm-.947 2.88h-1.392l-.323.001h-.596c-2.825.006-3.403.027-4.85.093-1.559.071-2.405.332-2.969.55a4.95 4.95 0 00-1.84 1.197 4.955 4.955 0 00-1.195 1.84c-.22.563-.48 1.41-.551 2.97-.066 1.445-.087 2.023-.092 4.848v.596l-.001.323v2.31c.006 2.825.027 3.403.093 4.849.07 1.56.332 2.406.55 2.97.29.747.638 1.28 1.197 1.84.56.559 1.093.906 1.84 1.196.563.219 1.41.48 2.97.55.385.018.709.032 1.03.044l.241.009c.769.024 1.605.035 3.302.039l.565.001h2.649l.565-.001c1.876-.004 2.7-.017 3.544-.048l.242-.01c.245-.009.499-.02.788-.034 1.56-.07 2.406-.331 2.97-.55a4.956 4.956 0 001.84-1.197 4.96 4.96 0 001.196-1.839c.219-.564.48-1.41.55-2.97.014-.29.025-.544.035-.788l.01-.243c.03-.843.043-1.668.047-3.543l.001-.565v-2.648l-.001-.566c.003-1.1-.01-2.202-.04-3.302l-.008-.241a108.34 108.34 0 00-.044-1.03c-.07-1.56-.331-2.407-.55-2.97a4.957 4.957 0 00-1.197-1.84 4.956 4.956 0 00-1.839-1.196c-.564-.22-1.41-.48-2.97-.551-1.446-.066-2.024-.087-4.849-.092h-.596l-.322-.001v-.001zm-.696 4.9a8.214 8.214 0 11.181 16.426 8.214 8.214 0 01-.181-16.426zm0 2.882a5.331 5.331 0 10-.146 10.662 5.331 5.331 0 00.146-10.662zm8.538-5.126a1.92 1.92 0 11.088 3.84 1.92 1.92 0 01-.088-3.84z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <span className="text-sm mb-24 mobile-md:mb-6 inline-block">
          Copyright ©2024 All rights reserved | This template is made with by
          Niloofar Anisi
        </span>
      </div>
    </footer>
  );
}

export default Footer;
