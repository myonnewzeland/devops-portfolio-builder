import { memo, useRef, useEffect } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import gsap from "gsap";

const HeroSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);

  /* ── Hero entrance timeline ── */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isMobile: "(max-width: 799px)",
      },
      (context) => {
        const { reduceMotion, isMobile } = context.conditions as {
          reduceMotion: boolean;
          isMobile: boolean;
        };

        const dur = (base: number) => (reduceMotion ? 0 : base);
        const offsetY = isMobile ? 14 : 28;

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // Avatar: scale + fade in
        tl.from(avatarRef.current, {
          scale: 0.82,
          autoAlpha: 0,
          duration: dur(0.7),
        });

        // Tagline: slide from below
        tl.from(
          taglineRef.current,
          { y: offsetY, autoAlpha: 0, duration: dur(0.55) },
          "-=0.45"
        );

        // Headline: slide + slight letter-spacing collapse
        tl.from(
          headlineRef.current,
          { y: offsetY, autoAlpha: 0, duration: dur(0.65) },
          "-=0.4"
        );

        // Body paragraph
        tl.from(
          bodyRef.current,
          { y: offsetY * 0.7, autoAlpha: 0, duration: dur(0.55) },
          "-=0.38"
        );

        // Location badge
        tl.from(
          locationRef.current,
          { y: offsetY * 0.5, autoAlpha: 0, duration: dur(0.45) },
          "-=0.35"
        );

        // CTA links: stagger from scale + fade
        tl.from(
          [emailRef.current, linkedinRef.current],
          {
            scale: 0.92,
            y: 10,
            autoAlpha: 0,
            duration: dur(0.45),
            stagger: { each: 0.1 },
            ease: "back.out(1.7)",
          },
          "-=0.28"
        );

        return () => tl.kill();
      }
    );

    return () => mm.revert();
  }, []);

  /* ── CTA hover / press micro-animations ── */
  const makeCTAHandlers = (ref: React.RefObject<HTMLAnchorElement>) => {
    let hoverTween: gsap.core.Tween | null = null;

    return {
      onMouseEnter: () => {
        if (hoverTween) hoverTween.kill();
        hoverTween = gsap.to(ref.current, {
          scale: 1.06,
          y: -5,
          duration: 0.18,
          ease: "power1.out",
        });
      },
      onMouseLeave: () => {
        if (hoverTween) hoverTween.reverse();
      },
      onPointerDown: () => {
        gsap.to(ref.current, {
          scale: 0.97,
          y: 4,
          duration: 0.1,
          ease: "power1.inOut",
          yoyo: true,
          repeat: 1,
        });
      },
      onFocus: () => {
        gsap.to(ref.current, {
          scale: 1.04,
          y: -4,
          duration: 0.18,
          ease: "power1.out",
        });
      },
      onBlur: () => {
        gsap.to(ref.current, {
          scale: 1,
          y: 0,
          duration: 0.15,
          ease: "power1.inOut",
        });
      },
    };
  };

  const emailHandlers = makeCTAHandlers(emailRef);
  const linkedinHandlers = makeCTAHandlers(linkedinRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      <picture>
        <source
          type="image/avif"
          srcSet="/assets/hero-bg-400w.avif 400w, /assets/hero-bg-800w.avif 800w, /assets/hero-bg-1200w.avif 1200w, /assets/hero-bg-1600w.avif 1600w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/assets/hero-bg-400w.webp 400w, /assets/hero-bg-800w.webp 800w, /assets/hero-bg-1200w.webp 1200w, /assets/hero-bg-1600w.webp 1600w"
          sizes="100vw"
        />
        <source
          type="image/jpeg"
          srcSet="/assets/hero-bg-400w.jpg 400w, /assets/hero-bg-800w.jpg 800w, /assets/hero-bg-1200w.jpg 1200w, /assets/hero-bg-1600w.jpg 1600w"
          sizes="100vw"
        />
        <img
          src="/assets/hero-bg-1200w.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          width="1600"
          height="900"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
      </picture>
      {/* Stronger overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/52 via-background/78 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/62 via-transparent to-background/62" />

      <div className="relative z-10 container max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Avatar */}
          <div className="shrink-0" ref={avatarRef}>
            <div className="relative md:animate-levitate">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-docker-blue avatar-glow-ring">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="/assets/avatar-96.avif 96w, /assets/avatar-192.avif 192w, /assets/avatar-384.avif 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/avatar-96.webp 96w, /assets/avatar-192.webp 192w, /assets/avatar-384.webp 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <source
                    type="image/png"
                    srcSet="/assets/avatar-96.png 96w, /assets/avatar-192.png 192w, /assets/avatar-384.png 384w"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                  <img
                    src="/assets/avatar-192.png"
                    alt="Luis Fernando — DevOps / SRE Engineer"
                    width="192"
                    height="192"
                    decoding="async"
                    loading="eager"
                    fetchPriority="low"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="max-w-2xl">
            <p
              ref={taglineRef}
              className="font-display text-xs tracking-[0.3em] text-docker-blue text-glow-docker mb-3 uppercase"
            >
              DevOps / SRE Engineer · Auckland, NZ
            </p>
            <h1
              ref={headlineRef}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 gradient-text leading-tight"
            >
              Cloud, FinOps &amp; Observability
            </h1>
            <p
              ref={bodyRef}
              className="text-base md:text-lg font-body text-muted-foreground max-w-xl mx-auto mb-3 leading-relaxed"
            >
              I spent the last 5+ years learning the hard way how to run reliable,
              cost‑efficient cloud platforms for banks, energy and SaaS companies.
              Now I bring that experience to New Zealand teams that want real SRE,
              FinOps and automation, not theory.
            </p>
            <p
              ref={locationRef}
              className="text-xs font-body text-muted-foreground mb-6"
            >
              <span className="inline-flex items-center justify-center gap-1.5">
                <MapPin size={13} className="text-docker-blue shrink-0" aria-hidden="true" />
                Based in Auckland on a valid NZ work visa, open to long‑term roles and sponsorship
              </span>
            </p>

            {/* CTA links */}
            <div ref={ctaRowRef} className="flex flex-wrap justify-center gap-3">
              <a
                ref={emailRef}
                href="mailto:yamoshi454@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-docker-blue"
                style={{ willChange: "transform" }}
                {...emailHandlers}
              >
                <Mail size={16} /> Email
              </a>
              <a
                ref={linkedinRef}
                href="https://www.linkedin.com/in/luis-fernando-navarrete-estrada-151878183"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg card-anime text-sm font-body text-card-foreground hover:text-k8s-blue"
                style={{ willChange: "transform" }}
                {...linkedinHandlers}
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
