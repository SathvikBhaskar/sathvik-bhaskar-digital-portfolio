import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projectSections = [
  {
    category: "Backend / Systems",
    projects: [
      {
        title: "Art Gallery Management System",
        description:
          "Database-backed system for managing artworks, artists, exhibitions, and sales. Focus on schema design, normalization, and SQL queries.",
        tags: ["SQL", "Database Design", "CRUD"],
      },
    ],
  },
  {
    category: "Embedded / Cryptography Hardware",
    projects: [
      {
        title: "256-Point NTT Hardware Module",
        description:
          "Verilog-based RTL implementation for lattice-based post-quantum cryptography. Includes butterfly units, modular arithmetic, and simulation-based verification.",
        tags: ["Verilog", "RTL", "PQC", "NTT"],
      },
      {
        title: "Modular Reduction (Barrett & Montgomery)",
        description:
          "Hardware-friendly implementations of modular reduction techniques for cryptographic pipelines, with analysis of efficiency and trade-offs.",
        tags: ["Cryptography", "Hardware", "Modular Arithmetic"],
      },
    ],
  },
  {
    category: "Machine Learning",
    projects: [
      {
        title: "Crop Yield Prediction Model",
        description:
          "ML model using environmental and soil data to predict suitable crops. Emphasis on preprocessing, feature selection, and evaluation.",
        tags: ["Python", "ML", "Data Science"],
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16">
            Selected Work
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {projectSections.map((section, si) => (
            <div key={section.category}>
              <AnimatedSection delay={si * 0.1}>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary inline-block" />
                  {section.category}
                </h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6">
                {section.projects.map((project, pi) => (
                  <AnimatedSection key={project.title} delay={si * 0.1 + pi * 0.1}>
                    <div className="group p-8 rounded-2xl glass-card h-full flex flex-col relative overflow-hidden">
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent transition-colors mt-1 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-1 relative z-10">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium font-body text-primary-foreground bg-primary/20 border border-primary/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
