import React from "react";

export default function Template2() {
  return (
    <div className="flex flex-col h-auto overflow-hidden w-96">
      <div className="flex items-center justify-center w-full px-3 py-4 text-lg font-semibold text-white bg-transparent">
        What do you prefer?
      </div>

      {/* ---- options------- */}
      <div className="flex flex-col h-full gap-5 p-8 bg-gray-100 rounded-[50px]">
        <div className="flex items-center gap-3 ">
          <div className="w-full px-6 py-3 font-medium text-left text-gray-700 bg-gray-300 rounded-full shrink-0">
            White
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="w-full px-6 py-3 font-medium text-left text-gray-700 bg-gray-300 rounded-full shrink-0">
            Black
          </div>
        </div>
      </div>
    </div>
  );
}
