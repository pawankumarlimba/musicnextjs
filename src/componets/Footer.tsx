


function Footer() {
  return (
    <footer className="bg-black text-grey-400 py-12 flex justify-center">
        <div className="max-w-6xl max-auto grid grid-cols-1 sm:grid-cols-2  lg:sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">About me</h2>
                <p className="text-grey-400">As a second-year student at NIT Agartala, I'm deeply passionate about both web development and electrical engineering. My portfolio website serves as a digital canvas where I showcase my projects and skills in these areas. </p>
            </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Follow me</h2>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/pawan-kumar-485903270/"><h2 className="hover:text-white transition-colors duration-300">Linkedin</h2></a>
            <a href="https://www.instagram.com/pawanlimbaa/"> <h2 className="hover:text-white transition-colors duration-300">Instagram</h2></a>
            </div>
            </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Contact me</h2>
            <div className="flex flex-col">
     <p>pawankumarlimba746@gmail.com</p>
     <p>7690927624</p>
    
            </div>
            </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Quick Links</h2>
            <a href="https://leetcode.com/pawankumarlimba/">
            <p>LeetCode</p> 
            </a>
           <a href="https://github.com/pawankumarlimba">Github<p></p></a>
           <a href="https://codeforces.com/profile/pawan_kumar_limba"><p>Codeforce</p></a>
           <a href="https://auth.geeksforgeeks.org/user/pawankumarr274"><p>GeeksforGeeks</p></a>

           
            </div>
           
        </div>
        
    </footer>
  )
}

export default Footer