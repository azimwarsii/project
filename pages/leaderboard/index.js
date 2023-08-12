import React from "react";
import Navigation from "@/components/navigation";
import NameCard from "@/components/nameCard";

const index = () => {
  return (
    <main>
      <div className="p-4 font-bold font-body text-5xl text-primary tracking-widest text-center">
        Leaderboard
        <div className="m-auto">
          <NameCard name="Farhan" win="true" />
          <NameCard name="Hatif" />
          <NameCard name="Aman" />
          <NameCard name="Azim" />
          <NameCard name="Obey" />
        </div>
        <div className="p-4 font-bold font-body text-2xl text-danger tracking-widest text-center">
          Previous Week
          <div className="m-auto">
            <NameCard name="Azim" win="true" />
            <NameCard name="Hatif" />
            <NameCard name="Farhan" />
            <NameCard name="Aman" />
            <NameCard name="Obey" />
          </div>
        </div>
      </div>
      <Navigation />
    </main>
  );
};

export default index;
