import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Zap className="h-8 w-8 text-electric-blue" />
            <span className="text-2xl font-bold font-sora text-primary">ResQNet</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: 'Problem', id: 'problem' },
              { label: 'Solution', id: 'solution' },
              { label: 'Demo', id: 'demo' },
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Tech', id: 'tech' },
              { label: 'Roadmap', id: 'roadmap' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-text-secondary hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('demo')}
            className="btn-electric hidden md:inline-flex"
          >
            Live Prototype
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;