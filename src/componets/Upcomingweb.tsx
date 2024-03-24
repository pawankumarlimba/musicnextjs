
"use client"


import { HoverEffect } from "./ui/card-hover-effect";

const hovercard=[
    {
        title:"Bachelor of Technology (B.Tech) in Electrical Engineering at NIT Agartala",
        description:"Currently pursuing a Bachelor's degree in Electrical Engineering at the prestigious National Institute of Technology (NIT), Agartala. Maintaining an impressive CGPA of 8.52 out of 10, actively engaging in coursework and practical projects to gain in-depth knowledge and skills in the field of electrical engineering.",
        link:""
    },
    {
        title:"Senior Secondary  from GSSS Pilibanga",
        description:"Attained exceptional results, with a remarkable score of 95.20%, in the Senior Secondary examination conducted by the Rajasthan Board of Secondary Education (RBSE) from Government Senior Secondary School (GSSS), Pilibanga.",
        link:""
    },{
        title:"High School  from GSSS Prempura, RBSE Board",
        description:"Graduated with distinction, securing 85.17% in the High School examination conducted by the Rajasthan Board of Secondary Education (RBSE) from Government Senior Secondary School (GSSS), Prempura.",
        link:""
    }
]

function Upcomingweb() {
  return (
    <div
    className="p-12 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
       <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Education</h2>
        <p className="mt-2 text-2xl sm:text-3xl lg:sm:text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Academic Background</p>
       </div>
       <div className="mt-10"><HoverEffect items={hovercard.map(webinar=>({
        title:webinar.title,
        description:webinar.description,
        link:"abcdefs"
       }))} /></div>
      
    </div>
    </div>
  )
}

export default Upcomingweb