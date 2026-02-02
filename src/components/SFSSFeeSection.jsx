import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Calendar, Target, Coffee, AlertTriangle, TrendingDown } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const startValue = 0;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const factCards = [
  {
    icon: Users,
    title: 'Supports',
    description: 'Over 300 registered clubs, Departmental Student Unions, and campus-wide events',
  },
  {
    icon: Calendar,
    title: 'Implementation',
    description: 'Commencing Fall 2026 semester',
  },
  {
    icon: Target,
    title: 'Objective',
    description: 'Prevent programming reductions and maintain vibrant campus life',
  },
];

const currentCuts = [
  "Club grant pools have not increased since 2008 despite 40% inflation",
  "DSU programming budgets have been reduced in real terms",
  "Event budgets for O-Week and Clubs Days constrained",
  "Fewer resources available for new club initiatives",
];

export const SFSSFeeSection = () => {
  const containerRef = useRef(null);

  return (
    <section 
      id="sfss-fee" 
      className="section-padding bg-[hsl(var(--sfss-bone))]"
      data-testid="sfss-fee-section"
    >
      <div className="container-custom" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm mb-6 border-2 border-primary">
            SFSS GENERAL FEE REFERENDUM
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
            $8 Full-time / $4 Part-time
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            A measured investment to preserve the programming and events that define campus life at Simon Fraser University.
          </p>
        </motion.div>

        {/* Current Situation Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-red-50 border-2 border-red-300 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Budget Constraints Are Already Affecting Programming
                </h3>
                <p className="text-red-700 mb-4">
                  Due to stagnant fee revenue amid rising costs, SFSS programming has already been constrained:
                </p>
                <ul className="space-y-2">
                  {currentCuts.map((cut, index) => (
                    <li key={index} className="flex items-start gap-2 text-red-700">
                      <TrendingDown size={16} className="mt-1 flex-shrink-0" />
                      <span>{cut}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-red-800 font-medium">
                  Without the proposed fee adjustment, these constraints will intensify significantly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border-2 border-primary p-6 md:p-8 shadow-hard">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                The Case for This Referendum
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white font-bold flex items-center justify-center text-sm border border-primary">1</span>
                  <div>
                    <p className="text-base md:text-lg text-foreground font-medium">
                      No General Fee Increase Since 2008
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Operating costs have increased by over 40% due to inflation, while fee revenue has remained static for nearly two decades.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white font-bold flex items-center justify-center text-sm border border-primary">2</span>
                  <div>
                    <p className="text-base md:text-lg text-foreground font-medium">
                      Projected Deficit of $787,000
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Without additional revenue, SFSS faces an escalating deficit by 2028-2029, necessitating substantial cuts to clubs and events.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white font-bold flex items-center justify-center text-sm border border-primary">3</span>
                  <div>
                    <p className="text-base md:text-lg text-foreground font-medium">
                      Previous Referendum: 43 Votes
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      The March 2025 general fee referendum failed by merely 43 votes — demonstrating that student support exists but requires mobilization.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary text-white font-bold flex items-center justify-center text-sm border border-primary">4</span>
                  <div>
                    <p className="text-base md:text-lg text-foreground font-medium">
                      University-Wide Budget Pressures
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      SFU faces a $50 million shortfall. Student programming cannot rely on university funding increases.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Cost Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Cost Frame */}
            <div className="bg-[hsl(var(--sfss-gold))]/20 border-2 border-primary p-8 md:p-10 text-center shadow-hard">
              <Coffee size={56} className="mx-auto mb-6 text-primary" strokeWidth={1.5} />
              <p className="text-xl md:text-2xl font-bold text-primary mb-2">
                Equivalent to approximately
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                One Beverage Per Month
              </p>
              <p className="text-lg text-muted-foreground">
                $8 per semester for full-time students
              </p>
            </div>
            
            {/* What It Funds */}
            <div className="bg-white border-2 border-primary p-6">
              <h4 className="font-bold text-primary mb-4">Programming Protected by This Fee:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  Club grants and operational funding (300+ clubs)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  Departmental Student Union programming support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  O-Week, Clubs Days, and campus-wide events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  Cultural celebrations and performances
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                  Shared resources and equipment for clubs
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Key Facts Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {factCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white border-2 border-primary p-6 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              data-testid={`fact-card-${index}`}
            >
              <card.icon size={32} className="text-secondary mb-4" strokeWidth={2} />
              <h4 className="text-xl font-bold text-primary mb-2">{card.title}</h4>
              <p className="text-muted-foreground text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary text-white p-8 md:p-12 border-2 border-primary"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white/90">
            Key Financial Figures
          </h3>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">
                <AnimatedCounter end={519} prefix="$" suffix="K" />
              </p>
              <p className="text-white/80 text-sm">Additional annual revenue generated</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">
                <AnimatedCounter end={787} prefix="$" suffix="K" />
              </p>
              <p className="text-white/80 text-sm">Projected deficit without fee adjustment</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-extrabold mb-2">
                <AnimatedCounter end={43} />
              </p>
              <p className="text-white/80 text-sm">Votes that determined previous referendum</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SFSSFeeSection;
