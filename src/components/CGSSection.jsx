import { motion } from 'framer-motion';
import { Radio, Newspaper, Leaf, BookOpen } from 'lucide-react';

const cgsGroups = [
  {
    name: 'CJSF Radio',
    icon: Radio,
    description: 'Student-operated campus radio station providing alternative music programming, local news coverage, and community-focused broadcasting since 1957.',
    benefit: 'Maintains broadcast operations and training programs for student journalists and broadcasters.',
    image: 'https://images.unsplash.com/photo-1627667050025-be23c83837e9?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Embark Sustainability',
    icon: Leaf,
    description: 'Leading campus sustainability initiatives through education, hands-on projects, and environmental programming.',
    benefit: 'Supports community gardens, waste reduction programs, and climate action initiatives on campus.',
    image: 'https://images.pexels.com/photos/7683729/pexels-photo-7683729.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'SFPIRG',
    icon: BookOpen,
    description: 'Student-funded public interest research group supporting social and environmental justice projects through research and community engagement.',
    benefit: 'Funds student-led research on housing, food security, environmental justice, and community issues.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'The Peak',
    icon: Newspaper,
    description: 'Independent student newspaper providing campus news coverage, investigative journalism, and student commentary since 1965.',
    benefit: 'Sustains independent student journalism and provides training opportunities for aspiring journalists.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400&auto=format&fit=crop',
  },
];

export const CGSSection = () => {
  return (
    <section 
      id="cgs-groups" 
      className="section-padding bg-white"
      data-testid="cgs-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary text-white font-bold text-sm mb-6 border-2 border-primary">
            CONSTITUENCY GROUPS REFERENDUM
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
            CJSF, Embark,
            <br className="hidden sm:block" />
            SFPIRG, The Peak
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            $1.50 full-time / $0.75 part-time commencing Fall 2026. These independent, student-operated organizations provide media, sustainability programming, research, and journalism serving the SFU community.
          </p>
        </motion.div>

        {/* Context Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[hsl(var(--sfss-gold))]/20 border-2 border-primary p-6 mb-12"
        >
          <p className="text-base md:text-lg text-primary">
            <strong>Context:</strong> Simon Fraser University has implemented significant budget reductions affecting student-facing programs and staff. These constituency groups require stable, independent funding to continue serving students regardless of university budget decisions.
          </p>
        </motion.div>

        {/* CGS Group Cards - Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cgsGroups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-[hsl(var(--sfss-bone))] border-2 border-primary overflow-hidden shadow-hard hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
              data-testid={`cgs-card-${group.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border-2 border-primary">
                    <group.icon size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{group.name}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  {group.description}
                </p>
                <div className="bg-white border border-primary/20 p-4">
                  <p className="text-sm text-primary">
                    <span className="text-secondary font-bold">Your Contribution ($1.50):</span> {group.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Each organization operates independently, yet together they contribute significantly to the quality of student life at SFU. Your support ensures their continued operation.
          </p>
          <a
            href="#get-involved"
            data-testid="cgs-cta-pledge"
            className="inline-block px-8 py-4 bg-secondary text-white font-bold text-lg border-2 border-primary shadow-hard hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
          >
            Support All Referendum Questions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CGSSection;
