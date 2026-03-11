import { motion } from "framer-motion";
import { ArrowDown, Phone, Mail, MapPin } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-body text-sm tracking-widest uppercase mb-4"
          >
            Hello, I'm
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Arham
            <br />
            <span className="text-gradient">Rashid</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8 max-w-lg">
            Motivated and dedicated student pursuing a 3-year Diploma in Artificial Intelligence from Aptech. 
            Seeking opportunities to apply my developing technical and analytical skills in a professional environment, 
            contribute to innovative projects, and grow within the IT industry.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone size={16} className="text-primary" />
              <span className="text-sm font-body">+92 319-2975138</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span className="text-sm font-body">arham8596638@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm font-body"> Malir, Karachi</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover-lift"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-body font-semibold text-sm hover:border-primary hover:text-primary transition-colors duration-300"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glow-border">
              <img
                src={avatarImg}
                alt="Arham Rashid"
                className="w-full h-full object-cover bg-secondary"
              />
            </div>
            {/* Floating decorations */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full border-2 border-primary/40"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
