
import { useRef, useEffect } from 'react';

const treatments = [
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Natural Beauty",
    description: "Enhance your natural beauty with our organic treatments"
  },
  
  {
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Facial Therapy",
    description: "Targeted facial treatments for different skin concerns"
  },
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Natural Beauty",
    description: "Enhance your natural beauty with our organic treatments"
  },
];

const BeautyCenter = () => {
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
    <section ref={sectionRef} className="py-20 bg-spa-beige animate-on-scroll" id="gallery">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Discover Our Treatments</h3>
          <h2 className="section-title">Beauty And Bridal Center</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Our beauty and bridal center offers a tranquil retreat where you can indulge in a wide range of premium treatments. Each service is designed to enhance your natural beauty and promote overall wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/95">
                <h3 className="text-xl font-serif text-spa-dark mb-2">{treatment.title}</h3>
                <p className="text-sm text-spa-dark/70">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyCenter;
