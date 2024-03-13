

function Footer() {
  return (
    <footer className="bg-black text-grey-400 py-12 flex justify-center">
        <div className="max-w-6xl max-auto grid grid-cols-1 sm:grid-cols-2  lg:sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                <p className="text-grey-400">Welcome to our music school, where passion meets proficiency. Our expert instructors foster creativity and skill development, guiding students on a transformative journey through the world of music.</p>
                
                 </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Follow us</h2>
            <div className="flex space-x-4">
            <h2 className="hover:text-white transition-colors duration-300">Facebook</h2>
            <h2 className="hover:text-white transition-colors duration-300">Instagram</h2>
            </div>
            </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Contect us</h2>
            <div className="flex flex-col">
     <p>pawankumarlimba746@gmail.com</p>
     <p>7690927624</p>
    
            </div>
            </div>
            <div>
            <h2 className="text-white text-lg font-semibold mb-4"> Quick Links</h2>
            <p>Home </p>
            <p>about</p>
            <p>Our Courses</p>
           
            </div>
           
        </div>
        
    </footer>
  )
}

export default Footer