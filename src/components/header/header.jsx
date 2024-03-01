import React, { useState } from "react";
import { LocationIcon, MinusIcon, PlusIcon } from "../../assets/icons";

export function Header() {
  const [isOpenOptionList, setIsOpenOptionList] = useState(false);
  const [optionList, setOptionList] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptionList((prev) => {
      return {
        ...prev,
        [name]:
          operation === "inc" ? optionList[name] + 1 : optionList[name] - 1,
      };
    });
  };

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

        <div className="relative">
          <div
            className="cursor-pointer text-sm"
            onClick={() => setIsOpenOptionList((isOpen) => !isOpen)}>
            Adult : {optionList.Adult} &bull; Children : {optionList.Children}{" "}
            &bull; Room : {optionList.Room}
          </div>
          {isOpenOptionList && (
            <GuestOptionList
              option={optionList}
              handleOptions={handleOptions}
            />
          )}
        </div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 "></span>

        <div className="">d</div>
      </div>
    </nav>
  );
}

function GuestOptionList({ option, handleOptions }) {
  return (
    <div className="flex flex-col  gap-3 absolute -right-12 top-7 bg-white rounded-xl p-4 shadow-md shadow-gray-400">
      <OptionItem
        option={option}
        minLimit={1}
        type="Adult"
        handleOptions={handleOptions}
      />
      <OptionItem
        option={option}
        minLimit={0}
        type="Children"
        handleOptions={handleOptions}
      />
      <OptionItem
        option={option}
        minLimit={1}
        type="Room"
        handleOptions={handleOptions}
      />
    </div>
  );
}

function OptionItem({ option, type, minLimit, handleOptions }) {
  return (
    <div className="w-48 flex items-center justify-between">
      <span className="text-sm">{type}</span>
      <div className="w-1/2 flex justify-between ">
        <button
          disabled={option[type] <= minLimit}
          className=" p-1 rounded-md bg-gray-200"
          onClick={() => handleOptions(type, "dec")}>
          <MinusIcon className="w-4 h-4" />
        </button>
        <span className="">{option[type]}</span>
        <button
          className="text-start p-1 rounded-md bg-gray-200"
          onClick={() => handleOptions(type, "inc")}>
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
