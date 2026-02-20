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
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-transparent dark:border-white/10 group hover:bg-secondary/50 dark:hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    vodurisathvik@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sathvik-bhaskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-transparent dark:border-white/10 group hover:bg-secondary/50 dark:hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    Sathvik Bhaskar
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/SathvikBhaskar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl glass-card border border-transparent dark:border-white/10 group hover:bg-secondary/50 dark:hover:bg-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">GitHub</p>
                  <p className="text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    SathvikBhaskar
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl glass-card border border-transparent dark:border-white/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base text-foreground font-medium">Chennai, India</p>
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
              className="space-y-5 p-8 rounded-2xl glass-card border border-transparent dark:border-white/10"
            >
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 dark:bg-white/5 border border-input dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 dark:bg-white/5 border border-input dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/30 dark:bg-white/5 border border-input dark:border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-lg hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] transition-all hover:-translate-y-0.5"
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
