'use client'
import React from 'react'
import Chart from "chart.js/auto";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);




const Features = () => {
  return (
    
    <section className="container mx-auto px-6 p-10">
      <div className="App">
      <div style={{ width: 700 }}>
        
      </div>
      <div style={{ width: 700 }}>
        
      </div>
      <div style={{ width: 700 }}>
        
      </div>
    </div>
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      Features
    </h2>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">
          Exercise Metrics
        </h4>
        <p className="text-gray-600 mb-8">
          Our Smart Health Monitoring Wristwatch is able to capture you vitals
          while you exercise. You can create different category of exercises and
          can track your vitals on the go.
        </p>
      </div>
      <div className="w-full md:w-1/2">
      <BarChart />
      </div>
    </div>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <LineChart />
      </div>
      <div className="w-full md:w-1/2 pl-10">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
        <p className="text-gray-600 mb-8">
          Our Smart Health Monitoring Wristwatch can generate a comprehensive
          report on your vitals depending on your settings either daily, weekly,
          monthly, quarterly or yearly.
        </p>
      </div>
    </div>
    <div className="flex items-center flex-wrap mb-20">
      <div className="w-full md:w-1/2">
        <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
        <p className="text-gray-600 mb-8">
          Our Smart Health Monitoring Wristwatch allows you to sync data across
          all your mobile devices whether iOS, Android or Windows OS and also to
          your laptop whether MacOS, GNU/LInux or Windows OS.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:pl-60">
        <PieChart  />
      </div>
    </div>
  </section>
  )
}

export default Features