import AnimatedSection from "./AnimatedSection";
import GlowingCard from "./ui/GlowingCard";

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
              <GlowingCard className="p-8 h-full bg-card border border-transparent dark:border-white/10 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <h3 className="font-heading font-bold text-lg text-primary mb-6 tracking-wide">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium font-body text-slate-100 bg-slate-800 dark:bg-white/5 border border-transparent dark:border-white/10 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] hover:border-primary/50 hover:bg-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowingCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
