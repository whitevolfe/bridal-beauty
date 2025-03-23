
import { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Face Cleanser",
    rating: 5,
    price: "$29.99"
  },
  {
    image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Essential Oils",
    rating: 5,
    price: "$35.50"
  },
  {
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4ee0e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    name: "Skin & Body Cleanser",
    rating: 4,
    price: "$42.99"
  },
  {
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Luxury Perfume",
    rating: 5,
    price: "$89.99"
  }
];

const Products = () => {
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
    <section ref={sectionRef} className="py-20 bg-spa-beige animate-on-scroll" id="products">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Shop With Us</h3>
          <h2 className="section-title">Our Exclusive Products</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Discover our collection of premium beauty and wellness products. Each item is carefully selected to ensure quality, effectiveness, and luxurious experience. Continue your bridal and beauty experience at home with our exclusive range.
          </p>
        </div>
        
        <div className="flex justify-end mb-8">
          <button className="btn-primary">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-medium text-spa-dark mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < product.rating ? "text-spa-gold fill-spa-gold" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-spa-dark font-medium">{product.price}</span>
                  <button className="px-3 py-1 bg-spa-gold/10 text-spa-gold rounded-full text-xs font-medium hover:bg-spa-gold hover:text-white transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
