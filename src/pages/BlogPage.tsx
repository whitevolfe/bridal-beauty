
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
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

  const blogPosts = [
    // {
    //   title: "The Benefits of Regular Massage Therapy",
    //   excerpt: "Discover how regular massage therapy can improve your physical and mental wellbeing, reduce stress, and enhance your quality of life.",
    //   date: "June 15, 2023",
    //   author: "Emma Johnson",
    //   category: "Wellness",
    //   image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    // },
    
    {
      title: "The Power of Aromatherapy",
      excerpt: "Explore the transformative effects of essential oils and how aromatherapy can enhance your mood, reduce anxiety, and promote healing.",
      date: "April 12, 2023",
      author: "David Chen",
      category: "Holistic",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    // {
    //   title: "Mindfulness and facial Therapy",
    //   excerpt: "Understand how combining mindfulness practices with beauty treatments can deepen relaxation and create lasting wellness benefits.",
    //   date: "March 5, 2023",
    //   author: "Olivia Martinez",
    //   category: "Mindfulness",
    //   image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    // },
    {
      title: "Natural Ingredients for Radiant Skin",
      excerpt: "Discover the power of natural ingredients that can transform your skin and how to incorporate them into your daily beauty routine.",
      date: "February 18, 2023",
      author: "Isabella Garcia",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Self-Care Practices for Busy Professionals",
      excerpt: "Learn practical self-care strategies that you can incorporate into even the busiest schedule to maintain balance and wellbeing.",
      date: "January 22, 2023",
      author: "James Wilson",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20 animate-on-scroll" id="blog">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="section-subtitle text-spa-gold">Our Insights</h3>
            <h2 className="section-title">Blog</h2>
            <div className="divider bg-spa-gold mx-auto"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our blog for expert advice, wellness tips, and the latest trends in beauty and facial treatments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-spa-gold font-medium">{post.category}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-spa-dark mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a href="#" className="text-spa-gold hover:text-spa-brown transition-colors">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
