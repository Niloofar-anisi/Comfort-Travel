import { Outlet } from "react-router-dom";
import Map from "../Map/Map";

function AppLayout() {
  return (
    <div className="mt-4 grid grid-rows-[1fr,auto] gap-14 lg:gap-20 Large:gap-24 ExtraLarge:gap-32 mb-5 max-w-[90rem] mx-auto">
      <div className=" scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thin">
        <Outlet />
      </div>
      <div>
        <Map className="w-full h-full my-5" />
      </div>
    </div>
  );
}

export default AppLayout;
