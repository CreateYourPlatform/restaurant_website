import Navbar2 from '@/components/Navbar2';
import Hero3 from '@/components/Hero3';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SignatureDishes from './components/SignatureDishes';
import DiningExperience from './components/DiningExperience';
import GuestTestimonials from './components/GuestTestimonials';
import ReservationFooter from './components/ReservationFooter';
import ChefSection from './components/ChefSection';
import FloatingCTA from './components/FloatingCTA';


function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar2 />
      <main>
        <FloatingCTA />
        <Hero3 />
        <SignatureDishes />
        <DiningExperience />
        <GuestTestimonials />
        <ChefSection />
        <ReservationFooter />
      </main>
    </div>
  );
}

export default App;
