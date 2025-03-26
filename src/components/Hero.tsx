import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 opacity-0 translate-y-8 transition-all duration-1000"
        >
          Laser Skin Resurfacing
        </h1>
        <div className="w-24 h-0.5 bg-spa-gold mx-auto mb-8 animate-fade-in" />
        <Link 
          to="/booking"
          className="btn-primary animate-fade-in-up"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};

export default Hero;
