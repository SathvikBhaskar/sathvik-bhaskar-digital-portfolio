import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

// Hanging ID Card Component
const HangingIDCard = () => {
  return (
    <div className="relative w-[300px] h-[400px] group perspective-1000 origin-top animate-swing hover:[animation-play-state:paused] z-20">
      {/* Lanyard String */}
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-2 h-48 bg-neutral-800 z-10 flex flex-col items-center">
        {/* Lanyard Clip */}
        <div className="absolute bottom-0 w-8 h-12 bg-neutral-900 rounded-md border border-neutral-700"></div>
        <div className="absolute bottom-[-10px] w-4 h-6 border-4 border-neutral-400 rounded-full"></div>
      </div>

      {/* Card Container */}
      <div className="relative w-full h-full bg-[#e8e8e8] rounded-2xl shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-12 border-t-8 border-neutral-900 cursor-grab active:cursor-grabbing">

        {/* Top Hole */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3 bg-neutral-300 rounded-full z-20 shadow-inner"></div>

        {/* Card Content */}
        <div className="flex flex-col items-center pt-16 px-6 h-full text-center">

          {/* Profile Photo */}
          <div className="w-40 h-40 rounded-xl overflow-hidden border-4 border-white shadow-lg mb-6 bg-neutral-200 contrast-125 grayscale group-hover:grayscale-0 transition-all duration-500">
            <img
              src="./sathvik photo new-min.jpg"
              alt="Sathvik Bhaskar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Role */}
          <h3 className="text-3xl font-heading font-bold text-neutral-900 mb-1">
            SATHVIK
          </h3>
          <p className="text-sm font-body font-medium text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-300 pb-4 w-full">
            Backend / Systems
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-lime/20 border border-neon-lime/50 text-neutral-800 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
            Available for work
          </div>

        </div>

        {/* Card Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      </div>
    </div>
  );
};

// Marquee Component
const Marquee = () => {
  const items = [
    "Backend Development", "Systems Programming", "Post-Quantum Cryptography",
    "Machine Learning", "Embedded Systems", "Cloud Computing"
  ];

  return (
    <div className="absolute bottom-[8vh] left-0 right-0 bg-neon-lime text-neutral-900 py-3 overflow-hidden z-20 rotate-[-2deg] scale-110 border-y-4 border-neutral-900 shadow-xl">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-lg md:text-xl font-heading font-black uppercase tracking-tighter">
              {item}
            </span>
            <span className="ml-6 text-xl">+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-background flex items-center justify-center pt-20 pb-32 transition-colors duration-500">

      {/* Light Mode Background Blobs - hidden in dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-2xl animate-wave">👋</span>
            <span className="text-muted-foreground font-body text-lg md:text-xl">Hello, great to have you here</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[0.9] mb-8 tracking-tight">
            I'M A <span className="text-primary selection:bg-primary selection:text-white">BACKEND & SYSTEMS</span><br />
            <span className="text-foreground">DEVELOPER</span> <br />
            <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl">CRAFTING ROBUST CODE</span>
          </h1>

          <p className="text-neutral-600 dark:text-neutral-400 font-body text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Specializing in secure backend architectures, high-performance systems, and cryptographic hardware integration. Designing the backbone of modern tech.
          </p>
        </motion.div>

        {/* Hanging Card Section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="hidden lg:flex justify-center items-start h-full pt-10"
        >
          <HangingIDCard />
        </motion.div>

      </div>

      {/* Marquee Band */}
      <Marquee />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <a href="#about" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors flex flex-col items-center gap-2 group">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">Scroll Down</span>
          <div className="w-[1px] h-12 bg-neutral-300 dark:bg-neutral-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-primary dark:bg-primary animate-scroll-down"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
