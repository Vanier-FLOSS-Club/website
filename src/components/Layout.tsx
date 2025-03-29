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
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Vanier FLOSS Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
