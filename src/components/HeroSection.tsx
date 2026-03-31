import { memo, useRef } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TAGLINE = "DevOps / SRE Engineer · Auckland, NZ";

const HeroSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const bgImgRef = useRef<HTMLDivElement>(null);

  /* ── Hero entrance timeline (cinematic) ── */
  useGSAP(
    () => {
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

          /* ─── Parallax background on scroll ─── */
          if (!reduceMotion && bgImgRef.current) {
            gsap.to(bgImgRef.current, {
              yPercent: 25,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
              },
            });
          }

          /* ─── Entrance timeline ─── */
          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          // 1) Avatar: scale in with back-ease bounce feel
          tl.from(avatarRef.current, {
            scale: 0.72,
            autoAlpha: 0,
            duration: dur(0.8),
            ease: "back.out(1.6)",
          });

          // 2) Tagline: character-by-character stagger (typewriter feel)
          if (taglineRef.current && !reduceMotion) {
            // Split into char spans at runtime
            const chars = TAGLINE.split("").map((ch) => {
              const span = document.createElement("span");
              span.textContent = ch === " " ? "\u00a0" : ch;
              span.style.display = "inline-block";
              span.style.willChange = "transform,opacity";
              return span;
            });
            taglineRef.current.textContent = "";
            chars.forEach((s) => taglineRef.current!.appendChild(s));

            gsap.set(chars, { autoAlpha: 0, y: 8 });
            tl.to(
              chars,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.025,
                ease: "none",
                stagger: { each: 0.03, from: "start" },
                clearProps: "transform",
              },
              "-=0.5"
            );
          } else {
            tl.from(
              taglineRef.current,
              {
                x: 0,
                autoAlpha: 0,
                duration: dur(0.5),
                ease: "power2.out",
              },
              "-=0.45"
            );
          }

          // 3) Headline: clip-path wipe-in from left
          if (!reduceMotion) {
            gsap.set(headlineRef.current, { clipPath: "inset(0 100% 0 0)", autoAlpha: 1 });
            tl.to(
              headlineRef.current,
              {
                clipPath: "inset(0 0% 0 0)",
                duration: dur(0.75),
                ease: "power3.inOut",
                clearProps: "clipPath",
              },
              "-=0.2"
            );
          } else {
            gsap.from(headlineRef.current, { autoAlpha: 0, duration: 0 });
          }

          // 4) Body paragraph: fade + slight y
          tl.from(
            bodyRef.current,
            {
              y: offsetY * 0.8,
              autoAlpha: 0,
              duration: dur(0.6),
              clearProps: "transform",
            },
            "-=0.38"
          );

          // 5) Location badge
          tl.from(
            locationRef.current,
            {
              y: offsetY * 0.5,
              autoAlpha: 0,
              duration: dur(0.45),
              clearProps: "transform",
            },
            "-=0.35"
          );

          // 6) CTA links: stagger scale + bounce
          tl.from(
            [emailRef.current, linkedinRef.current],
            {
              scale: 0.85,
              y: 14,
              autoAlpha: 0,
              duration: dur(0.5),
              stagger: { each: 0.12 },
              ease: "back.out(2.2)",
              clearProps: "transform",
            },
            "-=0.28"
          );

          return () => tl.kill();
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  /* ── CTA hover / press micro-animations (contextSafe) ── */
  const makeCTAHandlers = (
    ref: React.RefObject<HTMLAnchorElement>,
    contextSafe: <T extends (...args: never[]) => unknown>(fn: T) => T,
  ) => {
    const xTo = gsap.quickTo(ref.current, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 0.3, ease: "power3" });

    return {
      onMouseMove: contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = (e.currentTarget as HTMLAnchorElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        xTo(x * 0.2);
        yTo(y * 0.2 - 3);
      }),
      onMouseLeave: contextSafe(() => {
        xTo(0);
        yTo(0);
        gsap.to(ref.current, {
          scale: 1,
          duration: 0.22,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      }),
      onMouseEnter: contextSafe(() => {
        gsap.to(ref.current, {
          scale: 1.08,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }),
      onPointerDown: contextSafe(() => {
        gsap.to(ref.current, {
          scale: 0.95,
          duration: 0.07,
          ease: "power1.in",
          overwrite: "auto",
        });
      }),
      onPointerUp: contextSafe(() => {
        gsap.to(ref.current, {
          scale: 1.05,
          duration: 0.15,
          ease: "back.out(3)",
          overwrite: "auto",
        });
      }),
      onFocus: contextSafe(() => {
        gsap.to(ref.current, {
          scale: 1.05,
          y: -3,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      }),
      onBlur: contextSafe(() => {
        gsap.to(ref.current, {
          scale: 1,
          y: 0,
          duration: 0.18,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      }),
    };
  };

  const { contextSafe } = useGSAP({ scope: sectionRef });
  const emailHandlers = makeCTAHandlers(emailRef, contextSafe);
  const linkedinHandlers = makeCTAHandlers(linkedinRef, contextSafe);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Parallax bg wrapper */}
      <div
        ref={bgImgRef}
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ willChange: "transform" }}
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
            className="w-full h-full object-cover object-center"
            style={{ transform: "scale(1.15)" }}
          />
        </picture>
      </div>

      {/* Overlays */}
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
              {TAGLINE}
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
            <div className="flex flex-wrap justify-center gap-3">
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
