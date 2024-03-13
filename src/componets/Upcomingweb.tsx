
"use client"
import Link from "next/link"

import { HoverEffect } from "./ui/card-hover-effect";

const hovercard=[
    {
        title:"Harmony Unleashed",
        description:"Exploring Music's Depths- Dive into the intricacies of music theory and composition at our school",
        link:"HarmonyUnleashedMusicSchool.com"
    },
    {
        title:"Rhythmic Radiance",
        description:"Discover Your Musical Voice - Find your rhythm and unleash your musical potential with our expert instructors",
        link:"RhythmicRadianceMusicSchool.com"
    },{
        title:"Melodic Mastery",
        description:"Crafting Soundscapes with Precision - Elevate your musical proficiency through personalized instruction and guidance",
        link:"MelodicMasteryMusicSchool.com"
    },{
        title:"Symphony of Skills",
        description:"Fostering Musical Excellence - Join a community dedicated to excellence in musical education and performance",
        link:"SymphonyofSkillsMusicSchool.com"
    },{
        title:"Chords & Crescendos",
        description:" Building Blocks of Musical Brilliance- Learn the fundamental elements of music and build a solid foundation for your musical journey.",
        link:"ChordsCrescendosMusicSchool.com"
    }
]

function Upcomingweb() {
  return (
    <div
    className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
       <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
       </div>
       <div className="mt-10"><HoverEffect items={hovercard.map(webinar=>({
        title:webinar.title,
        description:webinar.description,
        link:webinar.link
       }))} /></div>
       <div className="mt-10 text-center">
       <Link href="/courses"
        className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >View All Courses</Link>
       </div>
    </div>
    </div>
  )
}

export default Upcomingweb