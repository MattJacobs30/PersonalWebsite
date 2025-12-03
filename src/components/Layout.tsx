import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-stone-900">
      <nav className="sticky top-0 z-50 bg-[#FFFBF7] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3 text-xl font-bold text-amber-600">
                <img src="/favicon.png" alt="Logo" className="h-8 w-8 rounded-full" />
                Matthew Jacobs
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-stone-600 hover:text-amber-600 transition-colors">About</a>
              <a href="#education" className="text-stone-600 hover:text-amber-600 transition-colors">Education</a>
              <a href="#experience" className="text-stone-600 hover:text-amber-600 transition-colors">Experience</a>
              <a href="#projects" className="text-stone-600 hover:text-amber-600 transition-colors">Projects</a>
              <a href="#leadership" className="text-stone-600 hover:text-amber-600 transition-colors">Leadership</a>
              <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-stone-200">
                <a href="https://github.com/MattJacobs30" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/matthew-sw-jacobs/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:mattswjacobs22@gmail.com" className="text-stone-400 hover:text-stone-900">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-stone-200">
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#education" 
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
              <a 
                href="#experience" 
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#leadership" 
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-600 hover:text-amber-600 hover:bg-stone-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Leadership
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-[#FFFBF7] border-t border-stone-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-stone-900">Thank you for visiting!</h3>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              If you want to reach me or see more about me, feel free to look at my LinkedIn, email me, or check out my GitHub.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a href="https://github.com/MattJacobs30" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors group">
              <Github size={28} className="text-stone-400 group-hover:text-amber-600 transition-colors" />
              <span className="font-semibold text-lg">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/matthew-sw-jacobs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors group">
              <Linkedin size={28} className="text-stone-400 group-hover:text-amber-600 transition-colors" />
              <span className="font-semibold text-lg">LinkedIn</span>
            </a>
            <a href="mailto:mattswjacobs22@gmail.com" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition-colors group">
              <Mail size={28} className="text-stone-400 group-hover:text-amber-600 transition-colors" />
              <span className="font-semibold text-lg">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

