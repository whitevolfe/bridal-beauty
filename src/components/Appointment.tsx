
import { useRef, useEffect } from 'react';

const Appointment = () => {
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
    <section ref={sectionRef} className="py-20 bg-spa-dark text-white animate-on-scroll" id="contact">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle text-spa-gold">Book Now</h3>
          <h2 className="section-title text-white">Make An Appointment</h2>
          <div className="divider bg-spa-gold"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Schedule your appointment today and take the first step towards rejuvenation. Our friendly staff will help you select the perfect treatments for your needs.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/90">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-spa-gold text-white placeholder:text-white/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/90">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-spa-gold text-white placeholder:text-white/50"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-white/90">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-spa-gold text-white placeholder:text-white/50"
                  placeholder="Enter your phone"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white/90">
                  Select Service
                </label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-spa-gold text-white appearance-none"
                >
                  <option value="" className="bg-spa-dark">Select a service</option>
                  <option value="facial" className="bg-spa-dark">Facial Treatment</option>
                  <option value="massage" className="bg-spa-dark">Massage Therapy</option>
                  <option value="skincare" className="bg-spa-dark">Skin Care</option>
                  <option value="haircare" className="bg-spa-dark">Hair Treatment</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/90">
                Your Message
              </label>
              <textarea 
                id="message" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-spa-gold text-white placeholder:text-white/50 h-32 resize-none"
                placeholder="Tell us about your requirements"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn-primary">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
