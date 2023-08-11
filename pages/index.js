import Card from "@/components/card";
import Navigation from "../components/navigation";
import { Inter } from "next/font/google";

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
      <div className="flex overflow-x-auto">
        <Card color="bg-green-500" />
        <Card color="bg-white" />
      </div>
      <Navigation />
    </main>
  );
}
