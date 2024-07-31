import React from "react";
import Logo from "../Logo";

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex gap-5 items-center">
        <Logo />
        <div class="flex items-center justify-center ">
          <div class="w-6 h-6 border-b-2 border-white rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
