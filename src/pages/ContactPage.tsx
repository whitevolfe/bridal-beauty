
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      
      <section className="pt-32 pb-20 animate-on-scroll" id="contact">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">Get In Touch</h3>
            <h2 className="section-title">Contact Us</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're here to answer any questions you may have about our services, appointments, or products. Reach out to us using the contact information below.
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-6">
              <div className="bg-spa-beige p-8 rounded-lg">
                <h3 className="text-xl font-serif text-spa-dark mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-spa-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-spa-dark">Address</h4>
                      <p className="text-gray-600">330A,1, 1 Court Rd, Trincomalee 31000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-spa-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-spa-dark">Phone</h4>
                      <p className="text-gray-600">0262 221 377</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-spa-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-spa-dark">Email</h4>
                      <p className="text-gray-600">royalbridal20@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-spa-gold shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium text-spa-dark">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-spa-beige p-8 rounded-lg">
                <h3 className="text-xl font-serif text-spa-dark mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-spa-gold transition-all duration-300 text-spa-dark hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-spa-gold transition-all duration-300 text-spa-dark hover:text-white">
                    <i className="fab fa-twitter"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-spa-gold transition-all duration-300 text-spa-dark hover:text-white">
                    <i className="fab fa-instagram"></i>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-spa-gold transition-all duration-300 text-spa-dark hover:text-white">
                    <i className="fab fa-pinterest"></i>
                    <span className="sr-only">Pinterest</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif text-spa-dark mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-spa-dark">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-spa-dark">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-spa-dark">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold"
                      placeholder="Enter subject"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-spa-dark">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-spa-gold h-32"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
