import { memo, useState, useCallback, useId } from "react";
import { AnimateSection, StaggerContainer, AnimateCard } from "./AnimateOnScroll";
import {
  Mail,
  Linkedin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "recruiter" | "hiring_manager" | "cto" | "engineering_lead" | "other";

interface FormFields {
  name: string;
  email: string;
  company: string;
  role: Role;
  message: string;
}

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

// ─── Constants ────────────────────────────────────────────────────────────────

const ROLE_OPTIONS: { value: Role; label: string }[] = [
  { value: "recruiter",        label: "Recruiter" },
  { value: "hiring_manager",   label: "Hiring Manager" },
  { value: "cto",              label: "CTO" },
  { value: "engineering_lead", label: "Engineering Lead" },
  { value: "other",            label: "Other" },
];

const EMPTY_FORM: FormFields = {
  name: "",
  email: "",
  company: "",
  role: "recruiter",
  message: "",
};

const MESSAGE_MAX = 1200;

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(fields: FormFields): FieldError {
  const errors: FieldError = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.length > MESSAGE_MAX) {
    errors.message = `Keep it under ${MESSAGE_MAX} characters.`;
  }
  return errors;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function InputLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-1 font-display text-[10px] tracking-wider text-muted-foreground uppercase mb-1.5"
    >
      {children}
      {required && (
        <span aria-hidden="true" className="text-docker-blue">
          *
        </span>
      )}
    </label>
  );
}

function FieldErrorMsg({ id, message }: { id: string; message?: string }) {
  if (!message) return <span id={id} />;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1 font-body text-[11px] text-destructive">
      <AlertCircle size={11} aria-hidden="true" />
      {message}
    </p>
  );
}

// ─── Input base styles ────────────────────────────────────────────────────────

const inputBase =
  "w-full px-4 py-3 rounded-lg border bg-background/80 text-foreground text-sm font-body " +
  "transition-all duration-200 " +
  "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.35)] " +
  "focus:border-[hsl(var(--docker-blue))] " +
  "placeholder:text-muted-foreground/40 " +
  "hover:border-[hsl(var(--docker-blue)/0.4)]";

const inputIdle  = "border-border";
const inputError = "border-destructive focus:ring-[hsl(var(--destructive)/0.3)] focus:border-destructive";

// ─── Sidebar info cards data ──────────────────────────────────────────────────

const SIDEBAR_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "yamoshi454@gmail.com",
    href: "mailto:yamoshi454@gmail.com",
    ariaLabel: "Send an email to Luis Fernando",
    colorClass: "docker" as const,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/luis-fernando-navarrete",
    href: "https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183",
    ariaLabel: "Visit Luis Fernando's LinkedIn profile (opens in new tab)",
    colorClass: "k8s" as const,
    external: true,
  },
] as const;

// ─── Main component ───────────────────────────────────────────────────────────

const ContactSection = memo(() => {
  const uid = useId();
  const id = (field: string) => `${uid}-${field}`;

  const [form, setForm]       = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors]   = useState<FieldError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus]   = useState<SubmitState>("idle");

  const set = useCallback(
    <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    },
    []
  );

  const handleBlur = useCallback(
    (key: keyof FormFields) => {
      setTouched((prev) => ({ ...prev, [key]: true }));
      const fieldErrors = validate({ ...form });
      setErrors((prev) => ({ ...prev, [key]: fieldErrors[key as keyof FieldError] }));
    },
    [form]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fieldErrors = validate(form);
      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
        setTouched({ name: true, email: true, message: true });
        return;
      }
      setStatus("loading");
      // Simulate async send — replace with real API (Resend, EmailJS, Formspree, etc.)
      setTimeout(() => {
        setStatus(Math.random() > 0.1 ? "success" : "error");
      }, 1800);
    },
    [form]
  );

  const handleReset = useCallback(() => {
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }, []);

  // ── Feedback states ─────────────────────────────────────────────────────────

  const renderSuccess = () => (
    <div className="flex flex-col items-center justify-center py-12 gap-5 text-center min-h-[340px]">
      <div
        className="p-4 rounded-full bg-docker-blue/10 border border-docker-blue/40 animate-pulse-glow"
        aria-hidden="true"
      >
        <CheckCircle2 size={32} className="text-docker-blue" />
      </div>
      <div className="space-y-2">
        <p className="font-display text-sm tracking-[0.2em] text-docker-blue text-glow-docker uppercase">
          TRANSMISSION COMPLETE
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
          Message received. I typically reply within 24 hours on business days.
        </p>
      </div>
      <button
        onClick={handleReset}
        className="font-display text-[10px] tracking-wider uppercase text-muted-foreground
          hover:text-docker-blue transition-colors underline underline-offset-4"
      >
        Send another message
      </button>
    </div>
  );

  const renderError = () => (
    <div className="flex flex-col items-center justify-center py-12 gap-5 text-center min-h-[340px]">
      <div
        className="p-4 rounded-full bg-destructive/10 border border-destructive/40"
        aria-hidden="true"
      >
        <AlertCircle size={32} className="text-destructive" />
      </div>
      <div className="space-y-2">
        <p className="font-display text-sm tracking-[0.2em] text-destructive uppercase">
          TRANSMISSION FAILED
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-xs leading-relaxed">
          Something went wrong. Try emailing me directly at{" "}
          <a
            href="mailto:yamoshi454@gmail.com"
            className="text-docker-blue hover:underline"
          >
            yamoshi454@gmail.com
          </a>
          {" "}or try again.
        </p>
      </div>
      <button
        onClick={handleReset}
        className="font-display text-[10px] tracking-wider uppercase text-muted-foreground
          hover:text-docker-blue transition-colors underline underline-offset-4"
      >
        Try again
      </button>
    </div>
  );

  // ── Form ────────────────────────────────────────────────────────────────────

  const msgLen = form.message.length;
  const msgNearLimit = msgLen > MESSAGE_MAX * 0.85;

  const renderForm = () => (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-5"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <InputLabel htmlFor={id("name")} required>Name</InputLabel>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={id("name-err")}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="Your full name"
            className={`${inputBase} ${touched.name && errors.name ? inputError : inputIdle}`}
          />
          <FieldErrorMsg id={id("name-err")} message={touched.name ? errors.name : undefined} />
        </div>

        <div>
          <InputLabel htmlFor={id("email")} required>Email</InputLabel>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={id("email-err")}
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="you@company.com"
            className={`${inputBase} ${touched.email && errors.email ? inputError : inputIdle}`}
          />
          <FieldErrorMsg id={id("email-err")} message={touched.email ? errors.email : undefined} />
        </div>
      </div>

      {/* Company + Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <InputLabel htmlFor={id("company")}>
            Company
            <span className="ml-1 normal-case text-[9px] text-muted-foreground/50 font-mono">(optional)</span>
          </InputLabel>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="e.g. Xero, Atlassian, ANZ…"
            className={`${inputBase} ${inputIdle}`}
          />
        </div>

        <div>
          <InputLabel htmlFor={id("role")}>I am a</InputLabel>
          <select
            id={id("role")}
            name="role"
            value={form.role}
            onChange={(e) => set("role", e.target.value as Role)}
            aria-label="Your role"
            className={`${inputBase} ${inputIdle} cursor-pointer`}
          >
            {ROLE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <InputLabel htmlFor={id("message")} required>Message</InputLabel>
          <span
            className={`font-mono text-[10px] transition-colors ${
              msgLen > MESSAGE_MAX
                ? "text-destructive"
                : msgNearLimit
                ? "text-amber-400"
                : "text-muted-foreground/40"
            }`}
            aria-live="polite"
          >
            {msgLen}/{MESSAGE_MAX}
          </span>
        </div>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={touched.message && !!errors.message}
          aria-describedby={`${id("message-hint")} ${id("message-err")}`}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          placeholder="Tell me about the opportunity…"
          className={`${inputBase} resize-none leading-relaxed ${
            touched.message && errors.message ? inputError : inputIdle
          }`}
        />
        <FieldErrorMsg id={id("message-err")} message={touched.message ? errors.message : undefined} />

        {/* Recruiter microcopy */}
        <p
          id={id("message-hint")}
          className="mt-2 font-mono text-[10px] text-muted-foreground/50 leading-relaxed"
        >
          {"// Tip for recruiters: role title · tech stack · location/remote · visa sponsorship"}
          <br />
          {"// salary band · contract type (perm/contract) → helps me reply faster."}
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        aria-disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5
          rounded-lg font-display text-sm tracking-wider uppercase text-white
          bg-[hsl(var(--docker-blue))] hover:bg-[hsl(210_93%_48%)]
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-200
          shadow-lg shadow-[hsl(var(--docker-blue)/0.25)]
          hover:shadow-[hsl(var(--docker-blue)/0.4)] hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-[hsl(var(--docker-blue)/0.5)] focus:ring-offset-2 focus:ring-offset-card
          animate-pulse-glow"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );

  // ── Section render ──────────────────────────────────────────────────────────

  return (
    <section
      className="py-16 md:py-24 px-6 bg-surface-elevated"
      id="contact"
      aria-label="Contact Luis Fernando"
    >
      <div className="container max-w-5xl">

        {/* ── Heading block ──────────────────────────────────────────────────── */}
        <AnimateSection>
          <p className="font-display text-xs tracking-[0.3em] text-k8s-blue text-glow-k8s mb-2 uppercase">
            連絡先 // Contact
          </p>
          <h2 className="text-2xl md:text-4xl font-display font-bold gradient-text neon-underline inline-block pb-2">
            LET'S TALK RELIABILITY
          </h2>

          {/* Value props — row on desktop, compact 2-col grid on mobile */}
          <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6">
            {[
              { icon: Zap,    text: "35–50% cost savings" },
              { icon: Clock,  text: "99.9% uptime" },
              { icon: MapPin, text: "NZ · Remote · Visa OK" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 font-body text-xs sm:text-sm text-card-foreground"
              >
                <Icon size={13} className="text-docker-blue shrink-0" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          <p className="text-sm font-body text-muted-foreground max-w-xl mt-3 leading-relaxed">
            Open to Senior DevOps / SRE / FinOps roles in NZ and remote,
            with or without visa sponsorship.
          </p>
        </AnimateSection>

        {/* ── Content grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 mt-12">

          {/* ── Left: quick-reach sidebar ────────────────────────────────────── */}
          <StaggerContainer className="flex flex-col gap-4">

            {/* Email + LinkedIn */}
            {SIDEBAR_ITEMS.map((item) => {
              const { icon: Icon, label, value, href, ariaLabel, colorClass } = item;
              const isDocker = colorClass === "docker";
              const isExternal = "external" in item && item.external === true;
              return (
                <AnimateCard
                  key={label}
                  className="card-anime p-5 flex items-center gap-4 group"
                >
                  <div
                    className={`p-2 rounded-md shrink-0 transition-colors ${
                      isDocker
                        ? "bg-docker-blue/10 border border-docker-blue/30 group-hover:bg-docker-blue/20"
                        : "bg-k8s-blue/10 border border-k8s-blue/30 group-hover:bg-k8s-blue/20"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isDocker ? "text-docker-blue" : "text-k8s-blue"}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">
                      {label}
                    </p>
                    <a
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={`text-sm font-body text-card-foreground transition-colors truncate block ${
                        isDocker
                          ? "hover:text-docker-blue"
                          : "hover:text-k8s-blue"
                      }`}
                      aria-label={ariaLabel}
                    >
                      {value}
                    </a>
                  </div>
                </AnimateCard>
              );
            })}

            {/* Availability status */}
            <AnimateCard className="card-anime p-5 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <p className="font-display text-[10px] tracking-wider text-muted-foreground uppercase">
                  Status
                </p>
              </div>
              <p className="font-body text-sm text-foreground font-medium">
                Open to opportunities
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-1">
                NZ / Remote · Visa sponsorship welcome
              </p>
              {/* Bottom accent bar — parent needs relative + overflow-hidden (both present) */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-30" />
            </AnimateCard>

            {/* Response time notice */}
            <p className="font-mono text-[10px] text-muted-foreground/50 px-1 leading-relaxed">
              {"// Response time: < 24 h on business days."}
            </p>

          </StaggerContainer>

          {/* ── Right: form card ──────────────────────────────────────────────── */}
          <AnimateCard className="card-anime relative overflow-hidden">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-50 pointer-events-none" />

            <div className="p-6 sm:p-7">
              {/* Form header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 rounded-md bg-docker-blue/10 border border-docker-blue/30">
                  <Send size={13} className="text-docker-blue" aria-hidden="true" />
                </div>
                <span className="font-display text-[10px] tracking-widest text-muted-foreground uppercase">
                  OPEN CHANNEL
                </span>
              </div>

              {/* Conditional rendering with stable min-height to prevent layout shift */}
              <div className={status === "idle" || status === "loading" ? "" : "min-h-[340px]"}>
                {status === "success" && renderSuccess()}
                {status === "error"   && renderError()}
                {(status === "idle" || status === "loading") && renderForm()}
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-docker-blue via-k8s-blue to-docker-blue opacity-30 pointer-events-none" />
          </AnimateCard>

        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
