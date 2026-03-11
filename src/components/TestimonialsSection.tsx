import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Classmate at Aptech",
    text: "Arham is incredibly dedicated and always willing to help others understand complex topics. His passion for learning AI is inspiring.",
  },
  {
    name: "Instructor – Aptech",
    role: "Faculty Member",
    text: "A hardworking student with excellent problem-solving skills. Arham shows great potential in both frontend development and AI concepts.",
  },
  {
    name: "Peer Collaborator",
    role: "Project Partner",
    text: "Working with Arham on web development projects has been a great experience. He brings creativity and attention to detail to every task.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Kind words from those I've worked and studied with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover-lift relative"
            >
              <Quote size={32} className="text-primary/20 absolute top-4 right-4" />
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary font-body">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
