
'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className= {cn("fixed w-full top-10 inset-x-0 max-w-2xl mx-auto z-50 flex flex-row bg black")}
    >
      <Menu setActive={setActive}>
      
        <Link href={'/'} >
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        
          <MenuItem setActive={setActive} active={active} item="Skills">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href='/courses'>All Skills</HoveredLink>
            <HoveredLink href='/project'>My Projects</HoveredLink>
            
          </div>
          </MenuItem>
       
        
        
          <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact me">
            

          </MenuItem>
          </Link>
        

           
        
      
      </Menu>
        
       </div>
  )
}

export default Navbar