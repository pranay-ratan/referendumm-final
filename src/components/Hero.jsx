import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_BG = "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop";

export const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="SFU Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,80%,18%)]/80 via-[hsl(215,80%,18%)]/70 to-[hsl(215,80%,18%)]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-[hsl(var(--sfss-gold))] text-primary font-bold text-sm border-2 border-primary shadow-hard-sm">
              2026 STUDENT REFERENDUM
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[0.95]"
            data-testid="hero-headline"
          >
            Preserve
            <br />
            <span className="text-[hsl(var(--sfss-gold))]">Campus Life</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            data-testid="hero-subheadline"
          >
            Rising costs have already constrained student services. Without a modest fee adjustment, further reductions to clubs, events, and support programs are inevitable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <button
              onClick={() => scrollToSection('#sfss-fee')}
              data-testid="hero-cta-sfss"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold text-lg border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              Review SFSS Fee Proposal
            </button>
            <button
              onClick={() => scrollToSection('#cgs-groups')}
              data-testid="hero-cta-cgs"
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold text-lg border-2 border-primary shadow-hard hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              Review CGS Proposal
            </button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('#get-involved')}
              data-testid="hero-cta-pledge"
              className="text-white/80 hover:text-[hsl(var(--sfss-gold))] font-medium underline underline-offset-4 transition-colors"
            >
              Submit your pledge to vote
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/60"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
