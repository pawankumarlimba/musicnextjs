"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      title: "LeetCode Problem-solving",
      quote:
        "Demonstrated mastery in algorithmic problem-solving by successfully solving over 100 questions on LeetCode, covering a wide range of topics and difficulty levels.",
      name: "LeetCode Mastery: 100+ Questions Solved",
     
    },
    {
      title: "Consistency Streak: 50+ Days",
      quote:
        "Maintained an impressive streak of over 50 consecutive days on both GeeksforGeeks and LeetCode platforms, showcasing dedication, discipline, and perseverance in honing programming skills.",
      name: "Consistency Streak Achievement (GeeksforGeeks and LeetCode)",
     
    },
    {
      title: "GeeksforGeeks Problem-solving",
      quote:
      "Demonstrated mastery in algorithmic problem-solving by successfully solving over 50+ questions on GeeksforGeeks, covering a wide range of topics and difficulty levels.",
      name: "GeeksforGeeks Proficiency: 50+ Questions Solved",
     
    },
    
    {
      title: "Finalist Team at Hacknita",
      quote:
        "As a backend engineer, contributed to our team's success as finalists at Hacknita. Developed a robust backend infrastructure for our web project, ensuring seamless integration with frontend elements. Leveraged expertise in backend technologies to create an innovative solution, showcasing dedication and technical proficiency.",
      name: " Role:Backend Engineer for Web Development Project",
      
    },
  ];

function Testmovingcards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overfloe-hidden">
        <h2 className="text-2xl sm:text-3xl lg:sm:text-3xl font-bold text-center mb-8 z-10">Coding Achievements</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default Testmovingcards