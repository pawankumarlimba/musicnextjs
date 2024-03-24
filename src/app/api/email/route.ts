import {sendemail} from "@/app/helper/mailer"
import { NextRequest,NextResponse } from "next/server";

export async function POST(request : NextRequest){
  
   const reqBody=await request.json();
    const {email,message}=reqBody;
  
  
  const mail=await sendemail({email,message})
 

  
  return NextResponse.json({
    email,
    message,
    success:true,
    message1:"email send success fully"
  })
}