import React, { useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  CalenderIcon,
  LocationIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "../../assets/icons";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export function Header() {
  const [searchHotel, setSearchHotel] = useState("");
  const [optionList, setOptionList] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [isOpenOptionList, setIsOpenOptionList] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const refOutside = useRef();
  useOutsideClick(refOutside, "openDate", () => setIsOpenDate(false));

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
      <div className="h-full w-full  flex items-center justify-between border border-solid border-gray-200 rounded-2xl p-1 sm:p-4 ">
        <div className=" flex items-center gap-2 ">
          <LocationIcon className="w-5 h-5 " fill="#ef4444" />
          <input
            type="text"
            className="w-full outline-none border-0 text-[.50rem] sm:text-sm"
            placeholder="Where to go?"
            value={searchHotel}
            onChange={(event) => setSearchHotel(event.target.value)}
          />
        </div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 mx-1 sm:mx-0"></span>
        <div className="relative" ref={refOutside} id="openDate">
          <div
            className="flex items-center gap-3 cursor-pointer "
            onClick={() => setIsOpenDate(!isOpenDate)}>
            <span>
              <CalenderIcon className="w-5 h-5" fill="#6b21a8" />
            </span>
            <span className="text-[.50rem] sm:text-sm">{`${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )}   to   ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          </div>
          {isOpenDate && (
            <div className="absolute top-7">
              <DateRange
                ranges={date}
                onChange={(item) => setDate([item.selection])}
                className="shadow-black"
              />
            </div>
          )}
        </div>
        <span className="h-8 border-0 border-r-2 border-solid border-gray-200 mx-1 sm:mx-0"></span>

        <div className="relative">
          <div
            className="md:flex gap-3 cursor-pointer  text-[.50rem] sm:text-sm "
            id="openOptionList"
            onClick={() => setIsOpenOptionList((isOpen) => !isOpen)}>
            <p className="text-wrap">{optionList.Adult} adult</p>
            <p className="text-nowrap">{optionList.Children} children</p>
            <p className="text-wrap">{optionList.Room} room</p>
          </div>
          {isOpenOptionList && (
            <GuestOptionList
              option={optionList}
              handleOptions={handleOptions}
              setIsOpenOptionList={setIsOpenOptionList}
            />
          )}
        </div>
        {/* <span className="h-8 border-0 border-r-2 border-solid border-gray-200 "></span> */}

        <div className="">
          <button className="bg-purple-700 p-2 rounded-xl">
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" stroke="#fff" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function GuestOptionList({ option, handleOptions, setIsOpenOptionList }) {
  const refOutside = useRef();
  useOutsideClick(refOutside, "openOptionList", () =>
    setIsOpenOptionList(false)
  );
  return (
    <div
      className="flex flex-col  gap-3 absolute-right-12 top-7 bg-white rounded-xl p-4 shadow-md shadow-gray-400"
      ref={refOutside}>
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
