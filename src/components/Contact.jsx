import AnimatedSection from "./AnimatedSection";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="text-sm font-body tracking-widest uppercase text-primary mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-lg mb-12">
            Open to collaboration, research opportunities, and interesting backend or embedded systems work.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:vodurisathvik@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover-lift group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    vodurisathvik@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sathvik-bhaskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover-lift group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    Sathvik Bhaskar
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/SathvikBhaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover-lift group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    SathvikBhaskar
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:vodurisathvik@gmail.com";
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-heading font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
