
"use client";
import Link from "next/link"
import coursData from "../data/music_corses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border";

interface Course{
    id:number,
    title:string,
    slug:string,
    description:string,
    price:number,
    instrucyor:string,
    isfeatured:boolean,
    
}

function FeacheredSection() {
    const feacheredcourses=coursData.courses.filter((course:Course )=>course.isfeatured)


  return (
    <div
    className="py-12 bg-gray-900">
       <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Skills</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Areas of Expertise</p>
        </div>
       </div>
       <div className="mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 justify-center m-2">
           {feacheredcourses.map((course:Course )=>(
            <div key={course.id} className="flex justify-center">
               <BackgroundGradient
               className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
               >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <p className="test-lg sm:text-xl text-black mt-1 mb-1 mr-0.25 ml-0.25 dark:text-neutral-200">{course.title}</p>
                   
                    <Link href={`/courses`}></Link>
                </div>
                </BackgroundGradient>
            </div>
           ))}
        </div>
       </div>
       <div className="mt-20 text-center">
       <Button borderRadius="1.75ram"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
               >
       
        <Link href="/courses"
         >View All Skills</Link>
       </Button></div>

    </div>
  )
}

export default FeacheredSection