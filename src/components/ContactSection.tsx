import { memo, useState, useCallback } from "react";
import { AnimateSection, AnimateCard } from "./AnimateOnScroll";
import { Mail, Linkedin, Phone, Send } from "lucide-react";

const ContactSection = memo(() => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // mailto fallback — opens mail client with prefilled data
      const subject = encodeURIComponent(`Opportunity — ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Luis,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:yamoshi454@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    },
    [formData]
  );

  return (
    <section className="py-24 px-6" id="contact">
      <div className="container max-w-4xl">
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-2 uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4 neon-underline inline-block pb-2">
            LET'S CONNECT
          </h2>
          <p className="text-sm md:text-base font-body text-muted-foreground max-w-xl mt-6 leading-relaxed">
            Open to DevOps / SRE roles in New Zealand and remote-friendly teams.
            For interviews or opportunities, reach out via email, LinkedIn, or the form below.
          </p>
        </AnimateSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Direct links */}
          <div className="space-y-4">
            <AnimateCard className="card-anime p-5 flex items-center gap-4">
              <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30">
                <Mail size={18} className="text-docker-blue" />
              </div>
              <div>
                <p className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">Email</p>
                <a
                  href="mailto:yamoshi454@gmail.com"
                  className="text-sm font-body text-card-foreground hover:text-docker-blue transition-colors"
                >
                  yamoshi454@gmail.com
                </a>
              </div>
            </AnimateCard>

            <AnimateCard className="card-anime p-5 flex items-center gap-4">
              <div className="p-2 rounded-md bg-k8s-blue/10 border border-k8s-blue/30">
                <Linkedin size={18} className="text-k8s-blue" />
              </div>
              <div>
                <p className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-card-foreground hover:text-k8s-blue transition-colors"
                >
                  Luis Fernando Navarrete
                </a>
              </div>
            </AnimateCard>

            <AnimateCard className="card-anime p-5 flex items-center gap-4">
              <div className="p-2 rounded-md bg-docker-blue/10 border border-docker-blue/30">
                <Phone size={18} className="text-docker-blue" />
              </div>
              <div>
                <p className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">Phone</p>
                <a
                  href="tel:+64275324147"
                  className="text-sm font-body text-card-foreground hover:text-docker-blue transition-colors"
                >
                  +64 27 532 4147
                </a>
              </div>
            </AnimateCard>
          </div>

          {/* Contact form */}
          <AnimateCard className="card-anime p-6">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-docker-blue font-display text-sm tracking-wider mb-2">
                  ✓ MESSAGE PREPARED
                </p>
                <p className="text-sm font-body text-muted-foreground">
                  Your email client should have opened. If not, email me directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-display text-[10px] tracking-wider text-muted-foreground uppercase block mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-body
                      focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)] focus:border-[hsl(var(--docker-blue))]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-display text-[10px] tracking-wider text-muted-foreground uppercase block mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-body
                      focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)] focus:border-[hsl(var(--docker-blue))]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="font-display text-[10px] tracking-wider text-muted-foreground uppercase block mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm font-body resize-none
                      focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)] focus:border-[hsl(var(--docker-blue))]"
                    placeholder="Tell me about the role or project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display text-sm tracking-wider uppercase
                    bg-[hsl(var(--docker-blue))] text-white hover:bg-[hsl(var(--docker-blue)/0.85)] transition-colors
                    shadow-lg shadow-[hsl(var(--docker-blue)/0.25)] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)]"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </AnimateCard>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
