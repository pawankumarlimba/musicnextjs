"use client";
import React from "react";
import Image from "next/image";

import { TracingBeam } from "@/componets/ui/tracing-beam";

 function Page() {
  return (

<div className="min-h-screen bg-black py-12 pt-36">
<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white mt-4">Projects</h1>
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            

            <p className={ "text-xl mb-4 text-base text-teal-600 font-semibold tracking-wide uppercase"}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
            <div className="flex flex-row">
            <h2 className=" m-4 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <h2 className="m-4 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">mongodb</h2>
            <h2 className="m-4 bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">Node js</h2>
            
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  );
}


export default Page

const dummyContent = [
  {
    title: "foodly-collage cumpas food order ",
    description: (
      <>
         <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">1. User Registration/Login/Logout:</p>
      
        <p>
        Users should be able to register, login, and logout securely. You&apos;ll need to implement authentication mechanisms to manage user sessions.
        </p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">2. Profile Management:</p>
      
      
      <p>Both users and restaurant owners should be able to update their profiles. This might include information like name, contact details, and profile picture.</p>
      <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">3. Restaurant Owner Features:</p>
    <p>Restaurant owners will need additional functionalities like menu management. They should be able to add, update, and remove menu items.</p>
      <p>They might also need a feature to indicate whether the restaurant is open or closed.</p>
      <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">4.User Features:</p>
 <p>Users should be able to browse the menu, place orders, and choose between different payment options (cash on delivery or online payment).</p>
      <p>After placing an order, users should receive confirmation details.</p>
      <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">5. Admin Dashboard:</p>
      <p>The admin dashboard should provide an overview of all registered restaurants.</p>
      <p>It should allow the admin to verify whether a restaurant is open or closed. This might involve a manual verification process or integration with a system that tracks restaurant opening hours.</p>
      
      </>
    ),
    badge: "next.js",
    image:"/uploads/foodly.png"
       },
  {
    title: "Music school",
    description: (
      <>
      <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">1 Project Overview:</p>
      <p>Briefly describe the project and its objectives. Mention that it&apos;s a music course website designed to offer interactive music courses with instructor profiles and a contact form for user inquiries.</p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">2 Course Display:</p>
        <p>course catalog page displaying different music courses with descriptions, instructor details, and course duration.</p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">3 Instructor Profiles:</p>
        <p>Provide photos or mockups of the instructor profile pages, highlighting their expertise and experience</p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">4 Contact Form/Message Box:</p>
        <p>a contact form or message box where users can ask questions or request more information. </p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">5 Responsive Design:</p>
        <p> the website on different devices (mobile phones, tablets, laptops) to demonstrate its responsiveness</p>
        <p className="text-base text-black text-teal-600 font-semibold tracking-wide uppercase ">6 Footer:</p>
        <p>Design a footer that includes important links, social media icons, contact information.</p>
        
      </>
    ),
    badge: "next.js",
    
    image:"/uploads/music-school.jpg"
       },
  
];



