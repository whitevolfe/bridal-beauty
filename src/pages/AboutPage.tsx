
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
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
      
      <section className="pt-32 pb-20 bg-spa-beige animate-on-scroll" id="about">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">Our Story</h3>
            <h2 className="section-title">About Royal Bridal Center</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-spa-dark">Our Journey</h3>
              <p className="text-spa-dark/80 leading-relaxed">
                Founded in 2000, Royal Bridal Center began as a small wellness center with a vision to provide exceptional spa experiences that nurture both body and soul. Over the years, we've grown into a premier destination for those seeking relaxation and rejuvenation.
              </p>
              <p className="text-spa-dark/80 leading-relaxed">
                Our philosophy is rooted in the belief that true beauty comes from balance and well-being. We combine ancient healing traditions with modern techniques to create treatments that address the unique needs of each client.
              </p>
              <p className="text-spa-dark/80 leading-relaxed">
                Today, Royal Bridal Center stands as a testament to our commitment to excellence and personalized care. Our team of experienced professionals continues to uphold our founding principles while embracing innovation in wellness and beauty.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Images/beauty salon25.jpg"
                alt="Royal Bridal Center Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-spa-gold text-3xl font-serif">01</span>
              </div>
              <h4 className="text-xl font-serif text-spa-dark mb-4">Our Mission</h4>
              <p className="text-spa-dark/70">
                To create a sanctuary where clients can escape, recharge, and rediscover their inner balance through exceptional spa experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-spa-gold text-3xl font-serif">02</span>
              </div>
              <h4 className="text-xl font-serif text-spa-dark mb-4">Our Vision</h4>
              <p className="text-spa-dark/70">
                To be recognized as the leading wellness destination, setting the standard for luxury, innovation, and holistic beauty care.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-spa-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-spa-gold text-3xl font-serif">03</span>
              </div>
              <h4 className="text-xl font-serif text-spa-dark mb-4">Our Values</h4>
              <p className="text-spa-dark/70">
                Excellence, integrity, personalization, sustainability, and continuous growth form the foundation of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
