import React from "react";

export default function Template5() {
  return (
    <div className=" w-96 h-auto rounded-[50px] flex flex-col overflow-hidden shadow-lg shadow-white/20">
      <div className="flex items-center justify-center w-full px-3 py-4 text-lg font-semibold text-white border-b bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
        How do you feel today?
      </div>

      {/* ---- options------- */}
      <div className="flex flex-col h-full gap-5 p-8 bg-gray-100">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            A
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-emerald-400 via-lime-500 to-green-500">
            😊
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            B
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            😢
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            C
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300">
            😡
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            D
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-pink-700">
            😭
          </div>
        </div>
      </div>
    </div>
  );
}
