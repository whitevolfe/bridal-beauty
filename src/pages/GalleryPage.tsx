import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GalleryPage = () => {
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

  const galleryImages = [
    {
      src: "/Images/beautysalon1.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon2.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon7.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon11.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon13.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon20.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon14.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon23.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon24.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon25.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon26.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon16.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon17.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon18.jpg",
      alt: "Beauty Salon Image 1"
    },
    {
      src: "/Images/beauty salon22.jpg",
      alt: "Beauty Salon Image 1"
    },
    
    

    
  ];

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 animate-on-scroll" id="gallery">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">Our Space</h3>
            <h2 className="section-title">Gallery</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Step into the serene world of Royal Bridal Center through our gallery. Experience the ambiance and tranquility of our spaces before your visit.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`overflow-hidden rounded-lg shadow-md ${
                  index % 5 === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
