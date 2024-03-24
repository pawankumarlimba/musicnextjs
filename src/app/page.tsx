import FeacheredSection from "@/componets/FeacheredSection";
import Footer from "@/componets/Footer";
import Herosection from "@/componets/Herosection";
import Testmovingcards from "@/componets/Testmovingcards";
import Upcomingweb from "@/componets/Upcomingweb";
import Whychooseus from "@/componets/Whychooseus";



export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    
    <Herosection/>
    <FeacheredSection/>
    <Whychooseus/>
    <Testmovingcards/>
    <Upcomingweb/>
    
    <Footer/>
   </main>
  );
}
