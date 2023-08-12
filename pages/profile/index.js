import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div class="bg-black">
      <div class="container mx-auto p-6">
        <div class="max-w-sm mx-auto bg-black rounded-lg shadow-md overflow-hidden">
          <div class="relative h-40 bg-hospital-bg">
            <Image
              src="/7.png"
              alt="Profile Picture"
              width={5000}
              height={5000}
              class="w-40 h-40 mx-auto mt-6 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div class="p-4">
            <h1 class="text-xl font-semibold text-white">John Doe</h1>
            <p class="text-sm text-white-600">
              Age: <span className="number">35</span> | Gender: Male
            </p>
            <p class="text-sm text-white-600">
              ID: <span className="number">123456789</span> | Blood Type: O+
            </p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-white-800 mb-2">
              Health Details
            </h2>
            <p class="text-sm text-white-600">
              <span class="font-semibold">Weight:</span>{" "}
              <span className="number">70</span> kg
            </p>
            <p class="text-sm text-white-600">
              <span class="font-semibold">Height:</span>{" "}
              <span className="number">175</span> cm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
