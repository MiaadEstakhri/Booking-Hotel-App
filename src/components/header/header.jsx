import React, { useState } from "react";
import { LocationIcon } from "../../assets/icons";

export function Header() {
  const [openOptionList, setOpenOptionList] = useState(false);

  return (
    <nav className="flex justify-center">
      <div className="h-full w-full container flex items-center justify-between border border-solid border-gray-200 rounded-2xl p-4">
        <div className=" flex items-center gap-2">
          <LocationIcon className="w-5 h-5 " fill="#ef4444" />
          <input
            type="text"
            className="w-full outline-none border-0 text-sm"
            placeholder="Where to go?"
          />
        </div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 "></span>
        <div className="">b</div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 "></span>

        <div
          className=""
          onClick={() => setOpenOptionList((isOpen) => !isOpen)}>
          s {openOptionList && ""}
        </div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 "></span>

        <div className="">d</div>
      </div>
    </nav>
  );
}
