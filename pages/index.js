import Card from "@/components/card";
import { Chart } from "chart.js";
import { CategoryScale } from "chart.js";
import Navigation from "../components/navigation";
import LineChart from "../components/lineChart";
import { Inter } from "next/font/google";

Chart.register(CategoryScale);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <div className="p-6">
        <div className="font-bold font-body text-5xl text-primary tracking-widest ">
          Hatif Osmani
        </div>
        <div className="font-light font-body text-xl text-left tracking-tightest text-secondary">
          Want milk? Work for it
        </div>
      </div>
      <div className="pl-6 font-inter font-bold text-xl">Today</div>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ">
          <Card color="bg-red-500" />
          <Card color="bg-green-500" />
          <Card color="bg-white" />
          <Card color="bg-white" />
          <Card color="bg-white" />
          <Card color="bg-white" />
          <Card color="bg-white" />
        </div>
      </div>
      <div className="pl-6 pt-6 font-inter font-bold text-xl">Activity</div>
      <div className="p-4">
        <LineChart />
      </div>
      <Navigation />
    </main>
  );
}
