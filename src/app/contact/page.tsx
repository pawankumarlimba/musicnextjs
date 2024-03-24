"use client";
import { useState } from 'react';
import axios from 'axios';
import { Meteors } from "@/componets/ui/meteors";
import { Button } from "@/componets/ui/moving-border";
import { toast } from 'react-toastify';
import { TypewriterEffectSmooth } from "@/componets/ui/typewriter-effect";

function page() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false); // State for success message

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await axios.post('/api/email', { email, message });
      if (response.data.success) {
        toast.success('Response sumbit successfully'); // Corrected toast message
       
        setEmail('');
        setMessage('');
        setSendSuccess(true); 
       
      } else {
        console.error('Failed to send email:', response.data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsSending(false);
  };
  const words = [
    {
      text: "Feel",
    },
    {
      text: "Free",
    },
    {
      text: "to",
    },
    {
      text: "Ask",
    },
   
  ];

  return (
    <div className="bg-gray-900">
      <div className="w-full relative max-w-xs h-[100vh] ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
    
        <div className="relative w-[100vw] shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
            <TypewriterEffectSmooth className=' text-3xl text-white sm:text-4xl' words={words} />
        
          <form className="block text-gray-700 font-bold mb-2 " onSubmit={handleSubmit}>
            <input className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="email" id="email" name="email" placeholder="Your Email.." value={email} onChange={(e) => setEmail(e.target.value)} required />
            <textarea className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 mt-4 h-[5rem] sm:h-[8rem] lg:h-[10rem] sm:mt-6 lg:mt-8 w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Your Opinion.." id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <div className="mt-4 sm:mt-6 flex justify-center ">
              <Button type="submit" borderRadius="1.75ram" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800" disabled={isSending}>
                {isSending ? 'Sending...' : 'Submit'}
              </Button>
            </div>
            
            
          </form>

          {/* Meaty part - Meteor effect */}
          <Meteors number={90} />
        </div>
      </div>
    </div>
  );
}

export default page;
