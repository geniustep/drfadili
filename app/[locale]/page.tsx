import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Why />
      <Testimonials />
      <Appointment />
      <Footer />
    </main>
  );
}
