
import { useRef, useEffect } from 'react';

const specialists = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    name: "Melanie Conrad",
    role: "Skin Specialist"
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    name: "Sarah Johnson",
    role: "Massage Therapist"
  },
  {
    image: "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Emma Roberts",
    role: "Beauty Consultant"
  }
];

const Specialists = () => {
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
    <section ref={sectionRef} className="py-20 bg-white animate-on-scroll">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Meet Our Team</h3>
          <h2 className="section-title">Our Experience Specialists</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Our team of experienced specialists is dedicated to providing you with exceptional service. With extensive training and expertise in their respective fields, they ensure that every treatment exceeds your expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialists.map((specialist, index) => (
            <div 
              key={index} 
              className="group"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="image-frame rounded-lg overflow-hidden mb-6">
                <img 
                  src={specialist.image} 
                  alt={specialist.name} 
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-serif font-medium text-spa-dark mb-1">
                  {specialist.name}
                </h3>
                <p className="text-spa-gold">{specialist.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
