
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import MassageTherapy from '../components/MassageTherapy';
import BeautyCenter from '../components/BeautyCenter';
import Specialists from '../components/Specialists';
import Products from '../components/Products';
import SpecialOffers from '../components/SpecialOffers';
import Appointment from '../components/Appointment';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation on scroll handling
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <MassageTherapy />
      <BeautyCenter />
      <Specialists />
      {/* <Products /> */}
      <SpecialOffers />
      {/* <Appointment /> */}
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
