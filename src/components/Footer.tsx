import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-spa-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-2xl font-serif text-white">Royal Bridal Center</h3>
            <p className="text-white/70 leading-relaxed">
              A sanctuary of wellness, beauty, and rejuvenation. We provide premium bridal and beauty treatments to help you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold transition-all duration-300">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold transition-all duration-300">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold transition-all duration-300">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-spa-gold transition-all duration-300">
                <Youtube size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-lg font-serif text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Pricing', 'Contact', 'Gallery'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-spa-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-lg font-serif text-white">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/70">Monday - Friday</span>
                <span className="text-white">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Saturday</span>
                <span className="text-white">10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-lg font-serif text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-spa-gold shrink-0 mt-1" />
                <span className="text-white/70">330A,1, 1 Court Rd, Trincomalee 31000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-spa-gold" />
                <span className="text-white/70">0262 221 377</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-spa-gold" />
                <span className="text-white/70">royalbridal20@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Royal Bridal Center. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
