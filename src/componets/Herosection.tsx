"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import Image from "next/image";

const words =`an Electrical Engineering student at NIT Agartala and currently looking to pursue a carrer in field of Software Technology.My passion for Technology stems from my enjoyment in creating usable and functional websites`
function Herosection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:sm:grid-cols-2 items-center px-4 sm:px-6 lg:px-8   mb-8 text-center">
      
    <div 
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    <div className="p-4 flex flex-col items-center justify-center relative z-10 w-full text-center">
    

        <h1
        className=" mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-grandient-to-b from-neutral-50 to-neutral-400 text-white"
        >Hello, I&apos;m Pawan Kumar.</h1>
        
        

        <TextGenerateEffect className="mt-4  font-normal  text-base md:text-lg text-neutral-300 max-w-lg max-auto "  words={words} />
          
       
        <div className="mt-4">
            <Link href={"https://drive.google.com/file/d/1sv-QtN6rRFpUGfb2UOHFogFriYIIePqM/view?usp=drive_link"}>
              <Button
              borderRadius="1.75ram"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
              >  Resume</Button>
               
            </Link>
        </div>
    </div>
    </div>
   
    <Image className="items-center justify-center relative overflow-hidden mx-auto  md:py-0 flex  flex-row rounded-[50%] sm:rounded-[10%] lg:sm:rounded-[10%] sm:mt-4 lg:sm:mt-6 border-8 border-white  p-2 lg:sm:pt-2 lg:sm:pb-2 sm:pb-2 sm:pt-2 " src="/uploads/logo-p.avif" alt="" width={400} height={400} />
    </div>
  )
}

export default Herosection