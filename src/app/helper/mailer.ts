import nodemailer from 'nodemailer';

export const sendemail = async ({email ,message}:any)=>{
  try {
    
      
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
    secure: true,
        auth: {
          user: "llimba53@gmail.com",
          pass: "eexx ziyr ruoi imnv"
        }
      });


      const mailOptions = {
        from:'llimba53@gmail.com',
        to: 'pawankumarlimba746@gmail.com',
        subject: 'New message from your portfolio website',
        text: `Email: ${email}\n\nMessage: ${message}`,
        html : `${message} ${email}`,
      }
      const mailresponse=await transport.sendMail(mailOptions);
      return mailresponse;
    
   
    
  } catch (error:any) {
    throw new Error(error.message)
  }
}
