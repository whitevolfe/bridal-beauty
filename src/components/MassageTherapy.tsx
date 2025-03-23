import { useRef, useEffect } from 'react';
const MassageTherapy = () => {
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
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 bg-spa-beige p-8 rounded-2xl">
            <div className="flex flex-col space-y-6">
              <h3 className="text-2xl font-serif text-spa-dark">Bridal Makeup</h3>
              <div className="w-12 h-0.5 bg-spa-gold"></div>
              <p className="text-spa-dark/80 leading-relaxed">
                Our bridal makeup services are designed to enhance your natural beauty, boost your confidence, and create a flawless look for your special day. Each makeup session is customized to suit your unique style, skin type, and wedding theme, ensuring a picture-perfect finish.
              </p>
              <p className="text-spa-dark/80 leading-relaxed">
              Our professional makeup artists use high-quality products and expert techniques, from soft glam and airbrush makeup to traditional and HD bridal looks, to achieve the perfect balance of elegance and radiance. Experience the artistry of bridal beauty in a luxurious and relaxing setting.
              </p>
              <button className="btn-primary self-start mt-4">Learn More</button>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="image-frame rounded-full overflow-hidden aspect-square">
              <img 
                src="/Images/beautysalon1.jpg" 
                alt="Massage Therapy" 
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassageTherapy;
