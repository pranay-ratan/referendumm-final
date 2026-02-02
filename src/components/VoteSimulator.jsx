import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slider } from '../components/ui/slider';
import { 
  Users, 
  PartyPopper, 
  Heart, 
  TrendingDown, 
  AlertTriangle,
  Sparkles,
  Coffee,
  BookOpen,
  Calendar,
  HandHeart,
  Scissors,
  DollarSign,
  GraduationCap,
  Ban,
  Music,
  Palette
} from 'lucide-react';

const lowFundingImpacts = [
  { icon: Scissors, title: "Significant Club Grant Reductions", desc: "Discretionary grants for 300+ clubs reduced by 40-60%" },
  { icon: Calendar, title: "Major Event Cancellations", desc: "O-Week, Clubs Days, and cultural programming cancelled or severely scaled back" },
  { icon: Ban, title: "DSU Funding Eliminated", desc: "Departmental Student Unions lose most programming support" },
  { icon: Music, title: "Cultural Events Cut", desc: "Student cultural celebrations and performances discontinued" },
  { icon: Palette, title: "Club Resources Limited", desc: "Shared resources and equipment for clubs unavailable" },
  { icon: DollarSign, title: "Severe Deficit", desc: "Projected deficit exceeds $700,000 by 2028-2029" },
];

const mediumFundingImpacts = [
  { icon: Scissors, title: "Moderate Club Grant Reductions", desc: "Discretionary grants reduced by 20-30%" },
  { icon: Calendar, title: "Reduced Events", desc: "Some campus events scaled back or cancelled" },
  { icon: Ban, title: "DSU Funding Cuts", desc: "DSU programming budgets reduced" },
  { icon: Music, title: "Fewer Cultural Programs", desc: "Cultural events reduced in frequency" },
  { icon: Palette, title: "Limited Resources", desc: "Club resources and equipment less available" },
  { icon: DollarSign, title: "Ongoing Deficit", desc: "Deficit remains a concern, limiting future planning" },
];

const highFundingImpacts = [
  { icon: Users, title: "Full Club Funding", desc: "Maintain grants for 300+ registered student clubs" },
  { icon: Calendar, title: "Vibrant Programming", desc: "O-Week, Clubs Days, and events continue at full capacity" },
  { icon: GraduationCap, title: "DSU Support", desc: "Departmental Student Unions receive stable funding" },
  { icon: Music, title: "Cultural Celebrations", desc: "Full calendar of cultural events and performances" },
  { icon: Palette, title: "Club Resources", desc: "Equipment and shared resources available for all clubs" },
  { icon: BookOpen, title: "Long-term Planning", desc: "Financial stability enables multi-year initiatives" },
];

const dollarSteps = [1, 2, 3, 4, 5, 6, 7, 8];

export const VoteSimulator = () => {
  const [feeAmount, setFeeAmount] = useState(8);
  
  const getPhase = () => {
    if (feeAmount <= 2) return 'critical';
    if (feeAmount <= 4) return 'at-risk';
    if (feeAmount <= 6) return 'partial';
    return 'full';
  };
  
  const phase = getPhase();
  
  const getStatusConfig = () => {
    switch (phase) {
      case 'critical':
        return {
          text: "Critical: Major service cuts unavoidable",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-400",
          deficitAmount: "$700,000+",
          clubImpact: "40-60% cut",
          eventImpact: "Most cancelled"
        };
      case 'at-risk':
        return {
          text: "At Risk: Significant reductions required",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          deficitAmount: "$400,000+",
          clubImpact: "25-35% cut",
          eventImpact: "Scaled back"
        };
      case 'partial':
        return {
          text: "Partial: Some services maintained with constraints",
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          deficitAmount: "$150,000+",
          clubImpact: "10-15% cut",
          eventImpact: "Minor reductions"
        };
      case 'full':
        return {
          text: "Full Funding: Services and programming maintained",
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-400",
          deficitAmount: "Balanced",
          clubImpact: "Maintained",
          eventImpact: "Full programming"
        };
      default:
        return {
          text: "Full Funding",
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-400"
        };
    }
  };
  
  const config = getStatusConfig();
  
  const getImpacts = () => {
    if (feeAmount <= 2) return { impacts: lowFundingImpacts, isNegative: true };
    if (feeAmount <= 4) return { impacts: mediumFundingImpacts, isNegative: true };
    return { impacts: highFundingImpacts, isNegative: false };
  };
  
  const { impacts, isNegative } = getImpacts();
  
  // Calculate visible impacts based on fee amount
  const getVisibleImpacts = () => {
    if (feeAmount <= 2) {
      return Math.min(6, 6 - feeAmount + 1);
    } else if (feeAmount <= 4) {
      return Math.min(6, 7 - feeAmount);
    } else {
      return Math.min(6, feeAmount - 2);
    }
  };
  
  const visibleCount = getVisibleImpacts();
  
  // Calculate annual revenue
  const getAnnualRevenue = () => {
    // $8 = $519k, so roughly $65k per dollar
    return Math.round(feeAmount * 65);
  };

  return (
    <section 
      id="overview" 
      className="section-padding bg-primary"
      data-testid="vote-simulator-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[hsl(var(--sfss-gold))] text-primary font-bold text-sm mb-6 border-2 border-white">
            INTERACTIVE FEE CALCULATOR
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            See How Your Fee Makes a Difference
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Adjust the fee amount to understand how different levels of funding affect SFSS club grants and campus programming.
          </p>
        </motion.div>

        {/* Main Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white border-2 border-white p-6 md:p-10 shadow-hard-lg">
            {/* Slider Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-red-600">$1 — Severe Cuts</span>
                <span className="text-sm font-bold text-green-600">$8 — Full Funding</span>
              </div>
              
              {/* Dollar amount markers */}
              <div className="flex justify-between mb-2 px-1">
                {dollarSteps.map((dollar) => (
                  <button
                    key={dollar}
                    onClick={() => setFeeAmount(dollar)}
                    className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                      feeAmount === dollar 
                        ? 'bg-primary text-white scale-110' 
                        : 'bg-muted text-muted-foreground hover:bg-primary/20'
                    }`}
                  >
                    ${dollar}
                  </button>
                ))}
              </div>
              
              {/* Custom slider track with gradient */}
              <div className="relative mt-4">
                <div 
                  className="absolute inset-0 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, #dc2626 0%, #f97316 25%, #eab308 50%, #22c55e 75%, #059669 100%)'
                  }}
                />
                <Slider
                  value={[feeAmount]}
                  onValueChange={(value) => setFeeAmount(value[0])}
                  min={1}
                  max={8}
                  step={1}
                  className="w-full relative z-10"
                  data-testid="vote-slider"
                />
              </div>
              
              {/* Current Status Display */}
              <div className="mt-6 text-center">
                <motion.div
                  key={feeAmount}
                  initial={{ scale: 0.95, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-block"
                >
                  <span className="text-6xl md:text-7xl font-extrabold text-primary">
                    ${feeAmount}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-muted-foreground ml-2">
                    per semester
                  </span>
                </motion.div>
                <p className={`text-xl md:text-2xl font-bold mt-2 ${config.color}`}>
                  {config.text}
                </p>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className={`grid grid-cols-3 gap-4 p-4 mb-8 border-2 ${config.borderColor} ${config.bgColor}`}>
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Projected Deficit</p>
                <p className={`text-xl font-bold ${config.color}`}>{config.deficitAmount}</p>
              </div>
              <div className="text-center border-x border-current/20">
                <p className="text-sm font-medium text-muted-foreground">Club Funding</p>
                <p className={`text-xl font-bold ${config.color}`}>{config.clubImpact}</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Events</p>
                <p className={`text-xl font-bold ${config.color}`}>{config.eventImpact}</p>
              </div>
            </div>

            {/* Revenue Generated */}
            <div className="bg-muted/50 border border-primary/20 p-4 mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                Annual Revenue Generated at ${feeAmount}/semester:
              </p>
              <p className="text-2xl font-bold text-primary">
                ~${getAnnualRevenue()},000
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {feeAmount === 8 ? 'Covers projected deficit and maintains all programming' : 
                 feeAmount >= 6 ? 'Covers most operational needs with minor constraints' :
                 feeAmount >= 4 ? 'Partially covers deficit, some cuts required' :
                 'Insufficient to prevent major programming reductions'}
              </p>
            </div>

            {/* Impact Cards Grid */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${isNegative ? 'text-red-700' : 'text-green-700'}`}>
                {isNegative ? 'Consequences at This Funding Level:' : 'Benefits at This Funding Level:'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {impacts.slice(0, visibleCount).map((impact, index) => (
                    <motion.div
                      key={`${phase}-${impact.title}`}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`p-4 border-2 ${isNegative ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 ${isNegative ? 'bg-red-100' : 'bg-green-100'}`}>
                          <impact.icon 
                            size={20} 
                            className={isNegative ? 'text-red-600' : 'text-green-600'} 
                          />
                        </div>
                        <div>
                          <h4 className={`font-bold text-sm ${isNegative ? 'text-red-800' : 'text-green-800'}`}>
                            {impact.title}
                          </h4>
                          <p className={`text-xs mt-1 ${isNegative ? 'text-red-700' : 'text-green-700'}`}>
                            {impact.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {visibleCount < 6 && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  {isNegative 
                    ? `Move slider left to see ${6 - visibleCount} more consequences...`
                    : `Move slider right to see ${6 - visibleCount} more benefits...`
                  }
                </p>
              )}
            </div>

            {/* Proposed Amount Highlight */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-4 p-4 bg-[hsl(var(--sfss-gold))]/20 border-2 border-primary/20"
            >
              <Coffee size={32} className="text-primary flex-shrink-0" />
              <p className="text-base md:text-lg font-medium text-primary">
                <span className="font-bold">The proposed $8 fee</span> — approximately one beverage per month — 
                is the minimum required to maintain current programming without cuts.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-white/70 text-sm">
            Note: The March 2025 referendum failed by only 43 votes. With focused support, this referendum is within reach.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VoteSimulator;
