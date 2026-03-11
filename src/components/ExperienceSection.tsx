import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Matriculation",
    subtitle: "Board of Secondary Education Karachi",
    description: "Completed secondary education with solid academic foundation.",
    type: "education",
  },
  {
    icon: Award,
    title: "CIT – Certificate in Information Technology",
    subtitle: "Completed",
    description: "Gained foundational skills in computer systems and IT operations.",
    type: "training",
  },
  {
    icon: GraduationCap,
    title: "Diploma in Artificial Intelligence",
    subtitle: "Aptech Computer Education — 3-Year Program (Ongoing)",
    description: "Currently pursuing an advanced diploma covering AI, machine learning concepts, and modern development practices.",
    type: "education",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            My academic journey and professional training.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10" />

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors duration-300 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs text-primary font-body">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
