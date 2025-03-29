import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            {/* Placeholder logo */}
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">FC</span>
            </div>
            <span className="font-bold text-xl">Vanier FLOSS Club</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/" className={cn("text-foreground hover:text-primary transition-colors")}>
            Home
          </Link>
          <Link to="/mdx-test" className={cn("text-foreground hover:text-primary transition-colors")}>
            MDX Test
          </Link>
          <Link to="/about" className={cn("text-foreground hover:text-primary transition-colors")}>
            About
          </Link>
          <Link to="/projects" className={cn("text-foreground hover:text-primary transition-colors")}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
