import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12">
            Who I Am
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm a backend-focused systems developer with an Electronics and Computer Engineering 
              background. My foundation lies in low-level and hardware design, giving me a unique 
              perspective on building reliable, performance-aware systems.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              My research internship at the Centre for Nanoelectronics and VLSI Design (CNVD), 
              VIT Chennai focused on post-quantum cryptography hardware — implementing NTT 
              modules, modular arithmetic units, and cryptographic pipeline optimizations in Verilog. 
              I also bring supporting experience in backend systems development and applied machine learning.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "256", label: "Point NTT Module" },
              { number: "5+", label: "Technical Projects" },
              { number: "3", label: "Core Domains" },
              { number: "1", label: "Research Internship" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-secondary/50 border border-border">
                <p className="text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.number}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
