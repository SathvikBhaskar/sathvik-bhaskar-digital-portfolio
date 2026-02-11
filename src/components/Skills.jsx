import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "Verilog"],
  },
  {
    title: "Backend / Web",
    skills: ["Node.js", "Next.js", "HTML", "CSS", "JavaScript", "REST APIs"],
  },
  {
    title: "Databases & Services",
    skills: ["Firebase Auth", "Firestore", "SQL"],
  },
  {
    title: "Embedded / Hardware",
    skills: ["Keil", "Cadence Virtuoso", "RTL Design", "MCU Programming"],
  },
  {
    title: "Machine Learning",
    skills: ["Data Preprocessing", "Model Training", "Evaluation", "Python ML"],
  },
  {
    title: "Tools",
    skills: ["MATLAB", "Git", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16">
            Technical Stack
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.08}>
              <div className="p-8 rounded-2xl glass-card h-full transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-heading font-bold text-lg text-primary mb-6 tracking-wide">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium font-body text-foreground/80 bg-white/5 border border-white/10 rounded-lg hover:bg-primary/20 hover:border-primary/30 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
