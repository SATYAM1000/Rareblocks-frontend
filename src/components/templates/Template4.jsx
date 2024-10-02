import React from "react";

export default function Template4() {
  return (
    <div className="flex flex-col h-auto overflow-hidden w-96 rounded-3xl">
      <div className="flex items-center justify-center w-full px-3 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
        Do you like our new arrival?
      </div>

      {/* ---- options------- */}
      <div className="flex flex-col h-full gap-5 p-8 bg-gray-100">
        <div className="relative flex items-center justify-center gap-3">
          <div className="absolute -top-5 left-10 text-5xl translate-y-50%">🔥</div>
          <div className="w-full px-6 py-2 font-medium text-left text-gray-700 rounded-full bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 shrink-0"></div>
        </div>
      </div>
    </div>
  );
}
