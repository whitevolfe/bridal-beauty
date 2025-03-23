
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-spa-gold font-serif text-2xl font-bold">Royal Bridal Center</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path) 
                  ? 'text-spa-gold' 
                  : 'text-spa-dark hover:text-spa-gold'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <Link to="/booking" className="hidden md:block btn-primary">Book Now</Link>
        
        <button 
          className="md:hidden text-spa-dark"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} className="text-spa-dark" />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-6 mt-16">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-lg font-medium transition-colors ${
                isActive(item.path) 
                  ? 'text-spa-gold' 
                  : 'text-spa-dark hover:text-spa-gold'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="btn-primary mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
