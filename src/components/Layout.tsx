import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {children}
        </div>
      </main>
      <footer className="border-t border-border py-8 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vanier FLOSS Club</h3>
              <p className="text-muted-foreground">
                Promoting Free/Libre and Open Source Software at Vanier College.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/vanier-floss-club" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                  GitHub
                </a>
                <a href="https://discord.gg/example" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Vanier FLOSS Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
