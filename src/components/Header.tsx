import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* Placeholder logo */}
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">FC</span>
            </div>
            <span className="font-bold text-xl truncate">Vanier FLOSS Club</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={cn("text-foreground hover:text-primary font-medium transition-colors")}>
            Home
          </Link>
          <Link to="/mdx-test" className={cn("text-foreground hover:text-primary font-medium transition-colors")}>
            MDX Test
          </Link>
          <Link to="/about" className={cn("text-foreground hover:text-primary font-medium transition-colors")}>
            About
          </Link>
          <Link to="/projects" className={cn("text-foreground hover:text-primary font-medium transition-colors")}>
            Projects
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center p-2"
          aria-label="Toggle mobile menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-border">
          <div className="container mx-auto px-4 py-3 space-y-1">
            <Link 
              to="/" 
              className="block py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/mdx-test" 
              className="block py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              MDX Test
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="block py-2 px-3 rounded-md hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
