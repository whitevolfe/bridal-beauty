
import { useRef, useEffect } from 'react';
import { Clock, Calendar, Gift } from 'lucide-react';

const offers = [
  {
    icon: <Gift size={24} className="text-spa-coral" />,
    title: "Gift Vouchers",
    description: "Perfect for any occasion"
  },
  {
    icon: <Calendar size={24} className="text-spa-coral" />,
    title: "Book in Advance",
    description: "Get 25% off on advance bookings"
  },
  {
    icon: <Clock size={24} className="text-spa-coral" />,
    title: "Happy Hours",
    description: "Special rates on weekday mornings"
  }
];

const SpecialOffers = () => {
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
          <h3 className="section-subtitle">Limited Time</h3>
          <h2 className="section-title">Our Special Offers</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Take advantage of our special offers and experience premium treatments at exceptional value. These limited-time promotions are designed to make luxury more accessible.
          </p>
        </div>
        
        <div className="bg-spa-beige rounded-[40px] overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8 p-10 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offers.map((offer, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 hover-scale">
                      {offer.icon}
                    </div>
                    <h3 className="text-lg font-serif font-medium text-spa-dark mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-spa-dark/70">{offer.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 relative">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Special offers" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
