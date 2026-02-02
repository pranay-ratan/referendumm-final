import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqs = [
  {
    question: "Is $8 per semester a significant financial burden for students?",
    answer: "The proposed fee of $8 per semester for full-time students (or $4 for part-time) equates to approximately one beverage per month. While any additional cost deserves consideration, this modest amount helps preserve club funding, campus events, and programming that would otherwise face substantial reductions. For context, SFSS has not implemented a general fee increase since 2008, during which time inflation has increased operating costs by over 40%."
  },
  {
    question: "Why are there separate questions for SFSS and Constituency Groups (CGS)?",
    answer: "Separate referendum questions provide clearer messaging and allow students to evaluate each proposal on its own merits. Research from previous referendums indicates that combined questions often lead to voter confusion, which contributed to the narrow failure of previous attempts. Each organization—SFSS and the Constituency Groups (CJSF, Embark, SFPIRG, The Peak)—has distinct functions and funding needs. This approach enables more informed decision-making while allowing students to support each initiative independently."
  },
  {
    question: "What specific programs will this fee support?",
    answer: "The SFSS general fee directly funds: club grants and operational support for over 300 registered student organizations; Departmental Student Union (DSU) programming budgets; campus-wide events including O-Week, Clubs Days, and cultural celebrations; shared resources and equipment for clubs; and cultural programming and performances. Without this revenue, each of these areas faces proportional reductions."
  },
  {
    question: "What are the consequences if the referendum does not pass?",
    answer: "If the referendum fails, SFSS projects a deficit reaching $787,000 by 2028-2029. To address this shortfall, the following measures would become necessary: reduction of club grants by up to 40%; scaling back or cancellation of major campus events; constrained DSU programming budgets; and limited resources available for clubs. These are not hypothetical—budget pressures have already resulted in programming constraints that will intensify without additional revenue."
  },
  {
    question: "Why has there been no fee increase since 2008?",
    answer: "Previous referendum attempts encountered challenges including complex multi-part questions that confused voters and insufficient campaign outreach. The March 2025 referendum failed by only 43 votes, indicating that student support exists but requires effective mobilization. The current approach addresses these issues through simplified, separate questions and focused communication of each proposal's value and necessity."
  },
  {
    question: "How does this relate to broader SFU budget pressures?",
    answer: "Simon Fraser University currently faces a $50 million budget shortfall, resulting in cuts across most administrative units. While SFSS operates independently from university administration, these pressures affect the broader student experience and underscore that student programming cannot rely on increased university funding. The proposed fee adjustment ensures SFSS maintains its programming regardless of university budget decisions."
  },
  {
    question: "How can I participate in the referendum?",
    answer: "Voting will occur online during the designated referendum period in 2026. All undergraduate students at SFU are eligible to vote. To ensure you receive notification when voting opens, please submit your pledge on this page. We will send a reminder with voting instructions and dates. Additionally, you can support the campaign by volunteering for tabling shifts, sharing information on social media, or discussing the referendum with fellow students."
  },
];

export const FAQSection = () => {
  return (
    <section 
      id="faq" 
      className="section-padding bg-white"
      data-testid="faq-section"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary text-white font-bold text-sm mb-6 border-2 border-primary">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Comprehensive answers regarding the 2026 referendum proposal.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[hsl(var(--sfss-bone))] border-2 border-primary shadow-hard-sm data-[state=open]:shadow-none data-[state=open]:translate-x-[2px] data-[state=open]:translate-y-[2px] transition-all"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-base md:text-lg font-bold text-primary hover:no-underline hover:text-secondary [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-4xl"
        >
          <div className="bg-[hsl(var(--sfss-gold))]/20 border-2 border-primary p-6 md:p-8">
            <h4 className="font-bold text-primary mb-2">Additional Questions?</h4>
            <p className="text-muted-foreground">
              For further information, please contact the SFSS Student Centre at <strong>studentcentre@sfss.ca</strong> or <strong>778-782-3870</strong>. 
              Representatives are available Monday through Friday, 10:00 AM to 4:00 PM.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
