import Link from 'next/link';
import './globals.css'; // This import is CRITICAL for styles to work

export const metadata = {
  title: 'DocuGen AI',
  description: 'Intelligent Documentation Generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased"
        suppressHydrationWarning={true}
      >
        
        {/* Top Navbar - Professional & Spaced Out */}
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900 hover:opacity-80 transition">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                D
              </span>
              DocuGen AI
            </Link>
            
            {/* Navigation Links - Spaced out nicely */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-emerald-600 transition duration-200">
                Home
              </Link>
              <Link href="/generate" className="hover:text-emerald-600 transition duration-200">
                Generate
              </Link>
              <Link href="/about" className="hover:text-emerald-600 transition duration-200">
                About
              </Link>
            </div>

            {/* Mobile Menu Placeholder (Optional, keeps layout balanced) */}
            <div className="md:hidden">
              <span className="text-slate-500 text-sm">Menu</span>
            </div>

          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
            <p>© 2025 DocuGen AI. Web Application Development.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}