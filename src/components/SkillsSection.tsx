import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "Bootstrap", level: 75 },
  { name: "Git / GitHub", level: 65 },
  { name: "Responsive Design", level: 80 },
  { name: "MS Office", level: 75 },
  { name: "AI Concepts", level: 60 },
  { name: "Logic Building", level: 70 },
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm text-foreground">{name}</span>
        <span className="font-body text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-warm)" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Frontend web development, programming logic, and a growing knowledge of AI technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
