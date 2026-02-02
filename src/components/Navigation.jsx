import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const SFSS_LOGO = "https://customer-assets.emergentagent.com/job_protect-sfu-clubs/artifacts/oob5j7lp_SFSS_COLOR_LOGO%20%281%29.png";

const navLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#sfss-fee', label: 'SFSS Fee' },
  { href: '#cgs-groups', label: 'CGS Groups' },
  { href: '#stake', label: "What's at Stake" },
  { href: '#faq', label: 'FAQ' },
  { href: '#get-involved', label: 'Get Involved' },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        data-testid="main-navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled 
            ? 'bg-[hsl(var(--sfss-bone))]/95 backdrop-blur-sm border-b-2 border-primary' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-3"
              data-testid="nav-logo"
            >
              <img 
                src={SFSS_LOGO} 
                alt="SFSS Logo" 
                className="h-10 md:h-12 w-auto"
              />
              <span className="hidden sm:block font-bold text-primary text-lg">
                Vote YES 2026
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-testid={`nav-link-${link.href.slice(1)}`}
                  className="px-4 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-involved"
                onClick={(e) => scrollToSection(e, '#get-involved')}
                data-testid="nav-cta-pledge"
                className="ml-4 px-5 py-2.5 bg-secondary text-white font-bold text-sm border-2 border-primary shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                Pledge to Vote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-primary"
              data-testid="mobile-menu-button"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[hsl(var(--sfss-bone))] border-b-2 border-primary"
            data-testid="mobile-menu"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    data-testid={`mobile-nav-link-${link.href.slice(1)}`}
                    className="px-4 py-3 text-base font-medium text-primary hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#get-involved"
                  onClick={(e) => scrollToSection(e, '#get-involved')}
                  data-testid="mobile-nav-cta-pledge"
                  className="mt-2 px-5 py-3 bg-secondary text-white font-bold text-center border-2 border-primary shadow-hard-sm"
                >
                  Pledge to Vote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
