
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation"
import Navbar1 from "../components/Navbar1";
import Navbar from "../components/Navbar";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Welcome from "../components/Welcome";
import Contents from "../components/Contents";





function index() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    console.log(user);
    const username = user.name;
    return (
      <>
      <title>Med+</title>

    <Navbar1 />

    <Welcome user={username}/>

    <Contents />
    </>
    );
  }
    return(
    <>
      
      <link
       href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700"
       rel="stylesheet"
      />
      <title>Med+</title>
      <Navbar />

    

      <Hero />
  
      <Features />

      <Testimonials/>

      <CTA />
   
      <Footer />
    </>

    ) 
}

export default index;
