"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Link from "next/link";

const musicschoolcontent=[
    {
        title : 'Project1 Foodly: Online Food Delivery and Ordering System',
        description:'"Foodly" is an innovative online platform designed for seamless food delivery and ordering. This project enables both users and restaurant owners to register, login, and update their profiles effortlessly. With user-friendly interfaces for both parties, "Foodly" revolutionizes the food delivery experience, ensuring convenience and satisfaction for customers and restaurant owners alike.',
        link:'abc'
    },
        {
            title : 'Project2 NextTunes: Music school',
            description:'NextTunes" is a dynamic music application frontend showcasing the power of Next.js and cutting-edge UI effects. Leveraging Next.js, this project integrates advanced effects libraries to create a visually stunning user experience. From text sliding animations to immersive 3D effects, "NextTunes" sets a new standard in frontend design for music schools, providing users with an engaging and memorable journey through their favorite tunes.'
            },
            {
                title :'click here',
                description:'' },
     
]

function Whychooseus() {
 
    return (
        <div >
          <Link href={"/project"}>
          <StickyScroll  content={musicschoolcontent.map(webinar=>({
        title:webinar.title,
        description:webinar.description,
        link:webinar.link
       }))} /></Link>
        </div>
  )
}

export default Whychooseus