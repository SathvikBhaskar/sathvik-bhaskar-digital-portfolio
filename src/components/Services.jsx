import AnimatedSection from "./AnimatedSection";
import { Code, Cpu, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Website Development",
    description: "End-to-end web applications with clean architecture and reliable backend systems.",
  },
  {
    icon: FlaskConical,
    title: "Research & Technical Prototyping",
    description: "Hardware and software prototyping for research-driven projects with rigorous methodology.",
  },
  {
    icon: Cpu,
    title: "Embedded Firmware Development",
    description: "Low-level firmware, RTL design, and microcontroller programming for embedded systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16">
            What I Offer
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="p-8 rounded-xl bg-card border border-border hover-lift h-full">
                <service.icon size={28} className="text-primary mb-5" />
                <h3 className="font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
