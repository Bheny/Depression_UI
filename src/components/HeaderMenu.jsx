import { React, useState } from "react";
import img from "../assets/pic.jpeg";
import NotificationModal from "../modals/NotificationModal";

const HeaderMenu = () => {
  const [hasNotificationExpanded, sethasNotificationExpanded] = useState(false);
  
  const handleItemClick = () => {
    sethasNotificationExpanded(!hasNotificationExpanded);
  };

  return (
    <>
      <div className="w-full rounded-lg p-4 bg-white shadow">
        <div className="w-1/2 inline-block p-2">
          <div className="w-full focus:border focus:border-[#016064] bg-gray-100 border-rounded flex gap-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="my-4 mx-2 w-6 h-6 text-slate-400 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="search"
              className="w-full p-3 outline-none bg-transparent"
              placeholder="find something"
            />
          </div>
        </div>
        <div className=" w-1/2 float-right p-2">
          <div className="float-right flex gap-6 ">
            <div onClick={() => handleItemClick()} className="relative">
              <div class="absolute mx-4 ">
                <span className="bg-red-500 rounded-full px-2 text-white ">
                  5
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mt-2 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              {hasNotificationExpanded && (<NotificationModal />)}
              
            </div>
            <img
              src={img}
              className="w-8 h-8  object-center object-cover rounded-full"
              alt="profile_picture"
            />
            <span className="hidden md:block text-gray-700 font-bold text-center">
              WinniFred Amuzu
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
