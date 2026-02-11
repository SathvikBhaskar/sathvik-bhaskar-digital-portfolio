import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements are handled by AnimatedBackground component */}

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-body tracking-widest uppercase text-primary font-medium">
                Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl md:text-8xl font-heading font-bold leading-[1.05] mb-6"
            >
              Sathvik
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent animate-gradient-x">Bhaskar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl font-heading font-medium text-foreground/90 mb-4"
            >
              Backend / Systems Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base text-muted-foreground mb-10 tracking-wide max-w-lg leading-relaxed"
            >
              Embedded Systems • Post-Quantum Cryptography Hardware • Applied Machine Learning
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-bold transition-all hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.6)]"
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-foreground font-heading font-bold hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group perspective-1000">
              {/* Glassmorphism Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
              <div className="relative h-full w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                <span className="text-8xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 select-none">
                  SB
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
