import { Crown } from "lucide-react";
import React from "react";

export default function Template1() {
  return (
    <div className="relative w-96 h-auto rounded-[50px] flex flex-col overflow-hidden shadow-lg shadow-white/20">
      <div className="absolute flex items-center justify-center p-2 font-medium text-gray-700 border-2 border-yellow-500 rounded-full top-2 left-8 shrink-0">
        <Crown size={20} className="stroke-yellow-500" />
      </div>
      <div className="flex items-center justify-center w-full px-3 py-4 text-lg font-semibold text-white border-b bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
        MAKE A QUESTION...
      </div>

      {/* ---- options------- */}
      <div className="flex flex-col h-full gap-5 p-8 bg-gray-100">
        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            A
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-emerald-400 via-lime-500 to-green-500">
            Option A
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            B
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
            Option B
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            C
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300">
            Option C
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center w-10 h-10 p-2 font-medium text-gray-700 border-2 border-gray-700 rounded-full shrink-0">
            D
          </div>
          <div className="w-full px-4 py-2 text-lg font-medium text-white border-2 border-white rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-pink-700">
            Option D
          </div>
        </div>
      </div>
    </div>
  );
}
