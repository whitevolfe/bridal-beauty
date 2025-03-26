
import { useRef, useEffect } from 'react';
import { Sparkles, Scissors, HandMetal, Utensils, Flame } from 'lucide-react';

const services = [
  {
    icon: <Sparkles size={32} className="text-spa-gold" />,
    title: "Skin Care",
    description: "Rejuvenating facial treatments for all skin types"
  },
  {
    icon: <Scissors size={32} className="text-spa-gold" />,
    title: "Hair Styling",
    description: "Cutting-edge styles and premium hair care"
  },
  {
    icon: <HandMetal size={32} className="text-spa-gold" />,
    title: "Nail Design",
    description: "Artistic manicures and pedicures for healthy nails"
  },
  {
    icon: <Utensils size={32} className="text-spa-gold" />,
    title: "Head Therapy",
    description: "Full-body treatments to relax and rejuvenate"
  },
  {
    icon: <Flame size={32} className="text-spa-gold" />,
    title: "Make Up",
    description: "Make up for lookong attractive & wellness"
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-spa-beige animate-on-scroll" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">What We Offer</h3>
          <h2 className="section-title">Our Services</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Experience our range of premium services designed to enhance your beauty, relieve stress, and promote overall wellness. Each service is performed by our certified specialists using top-quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="icon-circle mb-6 hover-scale">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium font-serif mb-3 text-spa-dark">
                {service.title}
              </h3>
              <p className="text-sm text-spa-dark/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-4">
          {['Facial Treatment', 'Hair Coloring', 'Make Up', 'Head Message', 'Nail Treatment'].map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 py-2 px-4 bg-white rounded-lg hover:bg-spa-gold hover:text-white transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="w-2 h-2 rounded-full bg-spa-coral"></div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
