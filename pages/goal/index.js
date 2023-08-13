import React from "react";
import AddGoal from "@/components/addGoal";

const index = () => {
  return (
    <div className="block max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <AddGoal />
    </div>
  );
};

export default index;
