import { motion } from 'framer-motion';

const SFSS_LOGO = "https://customer-assets.emergentagent.com/job_protect-sfu-clubs/artifacts/oob5j7lp_SFSS_COLOR_LOGO%20%281%29.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-[hsl(var(--sfss-bone))] border-t-2 border-primary py-12"
      data-testid="footer"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Info */}
          <div>
            <img 
              src={SFSS_LOGO} 
              alt="SFSS Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Simon Fraser Student Society
              <br />
              Representing SFU undergrads since 1967
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#sfss-fee" 
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  SFSS Fee Info
                </a>
              </li>
              <li>
                <a 
                  href="#cgs-groups" 
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  CGS Groups
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#get-involved" 
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary mb-4">Questions?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Reach out to SFSS or any of the CGS groups for more information about the referendum.
            </p>
            <button
              onClick={scrollToTop}
              className="px-6 py-2 bg-primary text-white font-bold text-sm border-2 border-primary shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Simon Fraser Student Society. Paid for by SFSS.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-secondary">Vote YES</span> in the 2026 Referendum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
