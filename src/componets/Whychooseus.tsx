"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicschoolcontent=[
    {
        title : 'Crescendo Academy: Elevate Your Musical Journey',
        description:'Embark on a musical odyssey with Crescendo Academy, where passion meets precision. Our institution offers a rich tapestry of courses designed to nurture talent and cultivate creativity. From classical symphonies to modern melodies, our expert faculty will guide you through every note, every beat, and every crescendo. Join us and let your musical journey soar to new heights.'
    },
    {
        title: 'Melody Masters: Where Music Comes to Life',
        description:'At Melody Masters, we believe music is more than just notes on a page—its a living, breathing expression of the soul. Our school offers a dynamic curriculum tailored to unleash your musical potential. Whether youre a beginner or a seasoned performer, our dedicated instructors will inspire you to explore new horizons, discover your unique voice, and make music that resonates with the world.'
     },
     {
        title : 'Harmony House: Building Musical Futures',
        description:
'Welcome to Harmony House, your sanctuary for musical exploration and growth. Our school is dedicated to nurturing talent, fostering creativity, and building a strong foundation for lifelong musical passion. With a diverse range of courses and experienced instructors, we provide a supportive environment where students of all ages and skill levels can thrive. Join us at Harmony House and embark on a transformative journey through the world of music.' 
   },
   {
    title :' Rhythmic Realms: Where Beats Come Alive',
    description:
'Step into the pulsating world of Rhythmic Realms, where rhythm reigns supreme. Our music school offers an immersive experience that celebrates the power and diversity of percussive expression. From drum circles to beatboxing, our dynamic curriculum will awaken your inner groove and ignite your passion for percussion. Join our vibrant community of rhythm enthusiasts and embark on a rhythmic adventure like no other.' 
 }
]

function Whychooseus() {
 
    return (
        <div >
          <StickyScroll  content={ musicschoolcontent} />
        </div>
  )
}

export default Whychooseus