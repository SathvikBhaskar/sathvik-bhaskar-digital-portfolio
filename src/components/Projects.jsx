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
                    <div className="group p-6 rounded-xl bg-card border border-border hover-lift h-full flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <ExternalLink size={16} className="text-muted-foreground mt-1 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-[11px] font-body text-primary bg-primary/10 rounded-md"
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
