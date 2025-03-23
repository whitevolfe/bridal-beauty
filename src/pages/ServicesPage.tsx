
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MassageTherapy from '../components/MassageTherapy';

const ServicesPage = () => {
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
      
      <section className="pt-32 pb-20 animate-on-scroll" id="services">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">What We Offer</h3>
            <h2 className="section-title">Our Services</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Discover our comprehensive range of treatments designed to enhance your wellbeing and beauty. Each service is tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Facial Treatments",
                description: "Rejuvenate your skin with our customized facials designed for your specific skin type and concerns.",
                icon: "✨",
                price: "From $85"
              },
              {
                title: "Body Massages",
                description: "Release tension and promote relaxation with our therapeutic massage treatments.",
                icon: "👐",
                price: "From $95"
              },
              {
                title: "Aromatherapy",
                description: "Experience the healing benefits of essential oils combined with massage therapy.",
                icon: "🌿",
                price: "From $110"
              },
              {
                title: "Hot Stone Therapy",
                description: "Melt away stress with smooth, heated stones placed on key points of your body.",
                icon: "🪨",
                price: "From $120"
              },
              {
                title: "Body Scrubs & Wraps",
                description: "Exfoliate and nourish your skin for a smooth, glowing appearance.",
                icon: "✨",
                price: "From $130"
              },
              {
                title: "Nail Care",
                description: "Pamper your hands and feet with our manicure and pedicure services.",
                icon: "💅",
                price: "From $45"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-spa-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-spa-gold font-medium">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <MassageTherapy />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
