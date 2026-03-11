import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Analytics Dashboard",
    description: "A modern data visualization dashboard with interactive charts and real-time metrics. Built with responsive design principles.",
    image: project1,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Website",
    description: "Responsive e-commerce storefront with product listings, shopping cart, and clean UI across all devices.",
    image: project2,
    tags: ["Bootstrap", "JavaScript", "Responsive"],
  },
  {
    title: "AI Concept Explorer",
    description: "An interactive visualization of neural network concepts and AI fundamentals, built as a learning showcase.",
    image: project3,
    tags: ["AI", "Web Dev", "CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Showcasing my work and creative exploration in web development and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 hover-lift"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
