import React from "react";

const index = () => {
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto p-6">
        <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div class="relative h-40 bg-hospital-bg">
            <img
              src="profile-pic.jpg"
              alt="Profile Picture"
              class="w-20 h-20 mx-auto mt-6 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div class="p-4">
            <h1 class="text-xl font-semibold text-gray-800">John Doe</h1>
            <p class="text-sm text-gray-600">Age: 35 | Gender: Male</p>
            <p class="text-sm text-gray-600">ID: 123456789 | Blood Type: O+</p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
              Health Details
            </h2>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Weight:</span> 70 kg
            </p>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Height:</span> 175 cm
            </p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
              Family Background
            </h2>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Father:</span> James Doe
            </p>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Mother:</span> Mary Doe
            </p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Allergies</h2>
            <p class="text-sm text-gray-600">None</p>
          </div>

          <div class="p-4 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
              Health Stats
            </h2>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Heart Rate:</span> 80 bpm
            </p>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">Blood Pressure:</span> 120/80 mmHg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
