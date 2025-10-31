import React from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mx-[5%] my-4">
      <button className="w-10 h-10 bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all text-black cursor-pointer">
        <GrLinkPrevious className="mx-auto" />
      </button>
      <div class="flex gap-2 text-gray-500 text-sm md:text-base">
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-white border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all"
        >
          1
        </button>
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-indigo-500 text-white rounded-md transition-all"
        >
          2
        </button>
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-white border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all"
        >
          3
        </button>
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-white border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all"
        >
          4
        </button>
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-white border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all"
        >
          5
        </button>
        <button
          type="button"
          class="flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square bg-white border border-gray-200 rounded-md hover:bg-gray-100/70 transition-all"
        >
          6
        </button>
      </div>
      <button className="w-10 h-10 bg-white border border-gray-200 rounded-full hover:bg-gray-100/70 transition-all text-black cursor-pointer">
        <GrLinkNext className="mx-auto" />
      </button>
    </div>
  );
};

export default Pagination;
