import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';

const comparisonData = [
  {
    category: "Financial Position",
    without: "Escalating deficit reaching $787,000 by 2028-2029",
    with: "Deficit eliminated; financial stability through 2030",
  },
  {
    category: "Club Funding",
    without: "Discretionary grants reduced by up to 40%; smaller clubs may lose access to funding entirely",
    with: "Full grant funding maintained for 300+ registered clubs with potential for modest increases",
  },
  {
    category: "DSU Programming",
    without: "Departmental Student Union budgets further constrained; fewer faculty-specific events",
    with: "Stable DSU funding enabling consistent programming across all faculties",
  },
  {
    category: "Campus Events",
    without: "O-Week, Clubs Days, and cultural programming scaled back or cancelled",
    with: "Comprehensive event calendar maintained; capacity for new initiatives",
  },
  {
    category: "Cultural Programs",
    without: "Cultural celebrations and performances reduced or discontinued",
    with: "Full calendar of cultural events and student performances",
  },
  {
    category: "Club Resources",
    without: "Shared equipment and resources for clubs limited or unavailable",
    with: "Equipment and shared resources available for all registered clubs",
  },
];

export const StakeSection = () => {
  return (
    <section 
      id="stake" 
      className="section-padding bg-[hsl(var(--sfss-bone))]"
      data-testid="stake-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm mb-6 border-2 border-primary">
            COMPARATIVE ANALYSIS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
            What Is at Stake?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A detailed comparison of outcomes based on referendum results.
          </p>
        </motion.div>

        {/* Context Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-amber-50 border-2 border-amber-300 p-4 flex items-start gap-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-amber-800 text-sm">
              <strong>Important Context:</strong> These are not hypothetical scenarios. Budget pressures have already resulted in programming constraints, and further reductions are inevitable without additional revenue.
            </p>
          </div>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white border-2 border-primary shadow-hard overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[200px_1fr_1fr]">
              <div className="p-4 bg-muted border-r-2 border-b-2 border-primary">
                <h3 className="text-lg font-bold text-primary">Category</h3>
              </div>
              <div className="p-4 bg-red-50 border-r-2 border-b-2 border-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center">
                    <X className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-red-700">If Referendum Fails</h3>
                </div>
              </div>
              <div className="p-4 bg-green-50 border-b-2 border-primary">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 flex items-center justify-center">
                    <Check className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-green-700">If Referendum Passes</h3>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[200px_1fr_1fr] ${index < comparisonData.length - 1 ? 'border-b border-primary/20' : ''}`}
              >
                <div className="p-4 border-r-2 border-primary/20 bg-muted/50">
                  <p className="font-bold text-primary text-sm">{row.category}</p>
                </div>
                <div className="p-4 border-r-2 border-primary/20 bg-red-50/50">
                  <div className="flex items-start gap-2">
                    <X className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-red-800 text-sm">{row.without}</p>
                  </div>
                </div>
                <div className="p-4 bg-green-50/50">
                  <div className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-green-800 text-sm">{row.with}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Cards - Tablet/Mobile */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border-2 border-primary shadow-hard-sm overflow-hidden"
            >
              <div className="bg-muted p-3 border-b border-primary/20">
                <p className="font-bold text-primary">{row.category}</p>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="p-4 bg-red-50 md:border-r border-b md:border-b-0 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="text-red-500" size={16} />
                    <span className="text-xs font-bold text-red-600 uppercase">If Fails</span>
                  </div>
                  <p className="text-red-800 text-sm">{row.without}</p>
                </div>
                <div className="p-4 bg-green-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="text-green-600" size={16} />
                    <span className="text-xs font-bold text-green-600 uppercase">If Passes</span>
                  </div>
                  <p className="text-green-800 text-sm">{row.with}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-primary text-white p-6 md:p-8 border-2 border-primary">
            <p className="text-xl md:text-2xl font-bold">
              The previous referendum was decided by <span className="text-[hsl(var(--sfss-gold))]">43 votes</span>.
            </p>
            <p className="text-lg text-white/80 mt-2">
              Your participation will determine whether these programs continue or face reduction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeSection;
