
import { useRef, useEffect } from 'react';

const articles = [
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Benefits of Regular facial Treatments For Your Skin",
    author: {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      name: "Sarah Johnson"
    },
    date: "June 15, 2023"
  },
  {
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "DIY facial Treatments For Your Skin",
    author: {
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
      name: "Emma Roberts"
    },
    date: "May 28, 2023"
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Benefits of Regular facial Treatments For Your Skin",
    author: {
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      name: "Sarah Johnson"
    },
    date: "June 15, 2023"
  }
  
];

const Blog = () => {
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
    <section ref={sectionRef} className="py-20 bg-spa-beige animate-on-scroll" id="blog">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h3 className="section-subtitle">Latest Posts</h3>
          <h2 className="section-title">Our Blog</h2>
          <div className="divider"></div>
          <p className="max-w-2xl mx-auto text-spa-dark/80">
            Stay updated with the latest beauty and wellness trends, tips, and insights through our blog. Our expert therapists share their knowledge to help you maintain your wellbeing between visits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-medium text-spa-dark mb-4 line-clamp-2 group-hover:text-spa-gold transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-spa-dark/70">{article.author.name}</span>
                  </div>
                  <span className="text-sm text-spa-dark/60">{article.date}</span>
                </div>
                <button className="mt-4 text-sm font-medium text-spa-coral hover:text-spa-brown transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
