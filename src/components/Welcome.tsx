
import { useEffect, useRef } from 'react';

const Welcome = () => {
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
    <section ref={sectionRef} className="py-20 bg-white animate-on-scroll" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="image-frame rounded-lg overflow-hidden">
            <img 
              src="/Images/beauty salon20.jpg"
              alt="Spa specialist" 
              className="w-full h-full object-cover rounded-lg hover-scale"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-spa-beige text-sm font-medium text-spa-brown">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-spa-dark">
              Welcome to a Bridal and Beauty Center
            </h2>
            <div className="w-16 h-0.5 bg-spa-gold" />
            <p className="text-spa-dark/80 leading-relaxed">
              Our bridal and beauty center offers a tranquil escape from the stresses of everyday life. We provide a range of premium treatments designed to rejuvenate your body and mind. Our expert therapists utilize the finest products and techniques to ensure you receive the highest quality care.
            </p>
            <p className="text-spa-dark/80 leading-relaxed">
              Whether you're seeking relaxation, beauty enhancement, or therapeutic relief, our tailored services cater to your individual needs. Experience the perfect blend of luxury, comfort, and effective treatments in our peaceful sanctuary.
            </p>
            <button className="btn-primary mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
