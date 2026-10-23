import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import styles from "@/styles/awards.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IMG = "/assets/images/homepage/awards";
const TROPHIES = {
  gold: { src: `${IMG}/transform-gold.png`, width: 393, height: 748, alt: "Transform Awards gold trophy", fit: "tall" },
  silver: { src: `${IMG}/transform-silver.png`, width: 349, height: 518, alt: "Transform Awards silver trophy", fit: "wide" },
  bronze: { src: `${IMG}/transform-bronze.png`, width: 348, height: 518, alt: "Transform Awards bronze trophy", fit: "wide" },
  campaign: { src: `${IMG}/campaign-agency-of-the-year.png`, width: 140, height: 285, alt: "Campaign Agency of the Year trophy", fit: "free" },
};

const awards = [
  {
    title: "Best Visual Identity",
    client: "Numu Early Childhood Centre",
    category: "Education",
    show: "Diamond, Transform Global 2026 · Gold, Transform MEA 2025",
    color: "#93A374",
    word: "Diamond",
    trophy: TROPHIES.gold,
    logo: { src: `${IMG}/numu.png`, width: 285, height: 97, size: "tall" },
    link: "/our-work/numu-early-childhood-centre-brand-case-study",
  },
  {
    title: "Best Digital Transformation",
    client: "Virtuzone",
    link: "/our-work/virtuzone",
    show: "Transform Awards MEA 2026",
    color: "#FF2A48",
    word: "Gold",
    trophy: TROPHIES.gold,
    logo: { src: `${IMG}/virtuzone.png`, width: 775, height: 160 },
  },
  {
    title: "Best Naming Strategy (New Name)",
    client: "Lemonade",
    link: "/our-work/lemonade",
    show: "Transform Awards MEA 2026",
    color: "#01B8E2",
    word: "Bronze",
    trophy: TROPHIES.bronze,
    logo: { src: `${IMG}/lemonade.png`, width: 153, height: 23, size: "short" },
  },
  {
    title: "Best Visual Identity by Sector",
    client: "Super Duper",
    link: "/our-work/super-duper-studio",
    category: "Sports and Leisure",
    show: "Transform Awards MEA 2026",
    color: "#F14F29",
    word: "Gold",
    trophy: TROPHIES.gold,
    logo: { src: `${IMG}/super-duper-studio.png`, width: 395, height: 240, size: "tall" },
  },
  {
    title: "Best Visual Identity",
    client: "Ovasave",
    category: "Healthcare & Pharmaceutical",
    show: "Transform Awards 2025",
    color: "#A1A1FF",
    word: "Gold",
    trophy: TROPHIES.gold,
    logo: { src: `${IMG}/ovasave.png`, width: 283, height: 50, size: "short" },
    link: "/our-work/branding-for-an-innovative-fem-tech-platform",
  },
  {
    title: "Best Visual Identity by Sector",
    client: "Virtuzone",
    link: "/our-work/virtuzone",
    category: "Professional Services",
    show: "Transform Awards MEA 2026",
    color: "#FF2A48",
    word: "Gold",
    trophy: TROPHIES.gold,
    logo: { src: `${IMG}/virtuzone.png`, width: 775, height: 160 },
  },
  {
    title: "Best Visual Identity by Sector",
    client: "Numa",
    link: "/our-work/numa-reserve",
    category: "Property, Construction and Facilities Management",
    show: "Transform Awards MEA 2026",
    color: "#7C8A7D",
    word: "Silver",
    trophy: TROPHIES.silver,
    logo: { src: `${IMG}/numa.png`, width: 300, height: 91, size: "mid" },
  },
  {
    title: "Branding Agency of the Year",
    client: "Yellow",
    show: "Campaign Agency of the Year Middle East 2025",
    color: "#F77E83",
    word: "Silver",
    trophy: TROPHIES.campaign,
    logo: { src: `${IMG}/yellow-white.svg`, width: 300, height: 93 },
    link: "/our-work",
    linkLabel: "View our work",
  },
];

const AUTOPLAY = 5; // seconds per award
const pad = (n) => String(n).padStart(2, "0");

// Yellow's arrow glyph: drawn pointing down, rotated per direction; on hover the arrow rolls out and a fresh one rolls in
const ARROW_PATH =
  "M9.44186 23C9.38605 22.9324 9.33953 22.8559 9.27442 22.7973C6.25116 19.8649 3.22791 16.9369 0.204652 14.009C0.139535 13.9459 0.0604662 13.8964 1.30208e-06 13.8468C0.576745 13.2973 1.12558 12.7748 1.66512 12.2613C3.82326 14.3514 6.01861 16.4775 8.2093 18.6036C8.23256 18.5901 8.26047 18.5811 8.28372 18.5676C8.28372 12.3829 8.28372 6.19369 8.28372 -4.68423e-07C9.09768 -4.32844e-07 9.87442 -3.98892e-07 10.6744 -3.63923e-07C10.6744 6.19369 10.6744 12.3784 10.6744 18.5901C12.893 16.4369 15.0884 14.3108 17.2651 12.2027C17.8465 12.7568 18.3907 13.2838 19 13.8739C18.9488 13.9009 18.8558 13.9324 18.7907 13.9955C15.7581 16.9279 12.7302 19.8649 9.70233 22.7973C9.64186 22.8559 9.5907 22.9324 9.53488 23C9.50698 23 9.47442 23 9.44186 23Z";

const Arrow = ({ dir }) => (
  <svg className={`yarrow yarrow--${dir}`} viewBox="0 0 19 23" aria-hidden="true">
    <path className="yarrow__in" d={ARROW_PATH} />
    <path className="yarrow__out" d={ARROW_PATH} />
  </svg>
);

const Awards = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = section.querySelector("[data-cf]");
      const cards = [...stage.querySelectorAll(".cf__card")];
      const N = cards.length;
      const texts = cards.map((c) => c.querySelector(".cf__text"));
      const inners = cards.map((c) => c.querySelectorAll(".cf__arrow, .cf__title, .cf__client, .cf__category, .cf__show, .cf__logo"));
      const words = cards.map((c) => c.querySelector(".cf__word"));
      const links = cards.map((c) => c.querySelector("a"));
      const dots = [...section.querySelectorAll(".cf__dot")];
      const countEl = section.querySelector("[data-cf-current]");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const disposers = [];
      const on = (target, type, fn, opts) => {
        target.addEventListener(type, fn, opts);
        disposers.push(() => target.removeEventListener(type, fn, opts));
      };

      /* ---------- Geometry: where each offset from the active card sits ---------- */
      function layout() {
        const vw = window.innerWidth / 100;
        const mobile = window.innerWidth <= 540;
        const tablet = !mobile && window.innerWidth <= 1024;
        const active = mobile ? { w: 78, h: 124, text: 62 } : tablet ? { w: 74, h: 44, text: 34 } : { w: 56, h: 29, text: 25 };
        // desktop fans out three slim cards a side; mobile and tablet show one full-size card a side,
        // pushed mostly off-screen so only a sliver of it peeks in at the edge
        const sides = mobile ? [[78, 114]] : tablet ? [[40, 40]] : [[6.4, 23.5], [5, 19], [3.8, 15]];
        const gap = (mobile ? 3 : tablet ? 2 : 1.15) * vw;
        const slots = { 0: { x: 0, w: active.w * vw, h: active.h * vw, o: 1 } };
        for (const dir of [1, -1]) {
          let edge = (active.w * vw) / 2;
          sides.forEach(([w, h], k) => {
            const x = edge + gap + (w * vw) / 2;
            slots[dir * (k + 1)] = { x: dir * x, w: w * vw, h: h * vw, o: 1 };
            edge = x + (w * vw) / 2;
          });
          // parked just past the last visible slot, faded out
          const last = sides[sides.length - 1];
          slots[dir * (sides.length + 1)] = { x: dir * (edge + gap + (last[0] * vw) / 2), w: last[0] * vw * 0.7, h: last[1] * vw * 0.8, o: 0 };
        }
        return { slots, reach: sides.length + 1, text: active.text * vw, mobile };
      }
      // signed distance of card k from position p, wrapped into [-N/2, N/2)
      const offsetOf = (k, p) => {
        const d = (((k - p) % N) + N) % N;
        return d >= N / 2 ? d - N : d;
      };
      // blend between the two nearest slots, so any fractional position has a layout
      function slotAt(off) {
        const o = Math.max(-geo.reach, Math.min(geo.reach, off));
        const lo = Math.floor(o);
        const hi = Math.ceil(o);
        const a = geo.slots[lo];
        const b = geo.slots[hi];
        const f = o - lo;
        const mix = (key) => a[key] + (b[key] - a[key]) * f;
        return { x: mix("x"), w: mix("w"), h: mix("h"), o: mix("o") };
      }

      let current = 0;
      let geo = layout();
      // one continuous position drives every card: moving from 1 to 4 passes through 2 and 3,
      // so cards always slide in step and a card only wraps around while it is parked out of sight
      const pos = { p: 0 };
      let posTween = null;

      function render() {
        const prop = geo.mobile ? "height" : "width";
        cards.forEach((card, k) => {
          const off = offsetOf(k, pos.p);
          const dist = Math.abs(off);
          const slot = slotAt(off);
          // the text panel opens with the same progress as the card grows, so the trophy half never pushes forward
          const open = Math.max(0, 1 - dist);
          gsap.set(card, { x: slot.x, width: slot.w, height: slot.h, opacity: slot.o, zIndex: Math.round(100 - dist * 10) });
          gsap.set(texts[k], { [prop]: geo.text * open });
          gsap.set(words[k], { opacity: open });
        });
      }

      function setActive(i) {
        cards.forEach((card, k) => {
          const on = k === i;
          card.classList.toggle("is-active", on);
          card.setAttribute("aria-hidden", on ? "false" : "true");
          if (links[k]) links[k].tabIndex = on ? 0 : -1;
        });
        countEl.textContent = pad(i + 1);
        dots.forEach((d, k) => {
          d.setAttribute("aria-selected", k === i);
          d.classList.toggle("is-done", k < i);
          gsap.set(d.querySelector("i"), { scaleX: k < i ? 1 : 0 });
        });
      }

      function showCopy(i, t) {
        cards.forEach((_, k) => {
          if (k !== i) gsap.to(inners[k], { opacity: 0, duration: 0.25 * t, overwrite: "auto" });
        });
        gsap.fromTo(inners[i], { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 * t, stagger: 0.04 * t, ease: "power2.out", overwrite: "auto" });
      }

      function moveTo(i, { instant = false } = {}) {
        const t = reduce || instant ? 0 : 1;
        // shortest way round the loop from wherever the wheel is right now (even mid-move)
        let delta = (((i - pos.p) % N) + N) % N;
        if (delta > N / 2) delta -= N;
        setActive(i);
        cards.forEach((_, k) => {
          if (k !== i) gsap.to(inners[k], { opacity: 0, duration: 0.25 * t, overwrite: "auto" });
        });
        if (posTween) posTween.kill();
        if (!t) {
          pos.p = i;
          render();
          showCopy(i, 0);
          return;
        }
        const steps = Math.abs(delta);
        let copyShown = false;
        posTween = gsap.to(pos, {
          p: pos.p + delta,
          // longer jumps get a little more time, but stay one smooth glide
          duration: Math.min(1.1 + Math.max(0, steps - 1) * 0.18, 1.6),
          ease: "power2.inOut",
          onUpdate() {
            render();
            // fade the copy in while the card is still opening, not after it settles
            if (!copyShown && this.progress() >= 0.65) {
              copyShown = true;
              showCopy(i, 1);
            }
          },
          onComplete: () => {
            pos.p = i;
            render();
            if (!copyShown) showCopy(i, 1);
          },
        });
      }

      /* ---------- Autoplay: the active dash fills, then the next award opens ---------- */
      let timer = null;
      let paused = false;
      function startTimer() {
        if (timer) timer.kill();
        if (reduce) return;
        timer = gsap.fromTo(dots[current].querySelector("i"), { scaleX: 0 }, { scaleX: 1, duration: AUTOPLAY, ease: "none", onComplete: () => go(current + 1) });
        if (paused) timer.pause();
      }
      function go(i, fromUser) {
        const next = (i + N) % N;
        if (next === current && !fromUser) return;
        current = next;
        moveTo(current);
        startTimer();
      }

      /* ---------- Input: arrows, dots, side cards, drag/swipe, keyboard ---------- */
      on(section.querySelector(".cf__btn--prev"), "click", () => go(current - 1, true));
      on(section.querySelector(".cf__btn--next"), "click", () => go(current + 1, true));
      dots.forEach((d, k) => on(d, "click", () => go(k, true)));
      let downX = null;
      let dragged = false;
      cards.forEach((card, k) =>
        on(card, "click", (e) => {
          if (dragged) { e.preventDefault(); return; }
          if (k !== current) { e.preventDefault(); go(k, true); }
        })
      );
      on(stage, "keydown", (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1, true); }
      });
      on(stage, "pointerdown", (e) => { downX = e.clientX; dragged = false; });
      on(window, "pointerup", (e) => {
        if (downX === null) return;
        const dx = e.clientX - downX;
        downX = null;
        if (Math.abs(dx) > 45) { dragged = true; go(current + (dx < 0 ? 1 : -1), true); setTimeout(() => (dragged = false), 0); }
      });
      // pause only while the pointer is over the open (active) card, or keyboard focus is inside the carousel
      const pause = (state) => {
        if (state === paused) return;
        paused = state;
        if (timer) state ? timer.pause() : timer.resume();
      };
      on(stage, "mousemove", (e) => pause(!!e.target.closest(".cf__card.is-active")));
      on(stage, "mouseleave", () => pause(false));
      on(stage, "focusin", (e) => { if (e.target.matches(":focus-visible")) pause(true); });
      on(stage, "focusout", (e) => { if (!stage.contains(e.relatedTarget)) pause(false); });

      on(window, "resize", () => {
        geo = layout();
        // the text panel opens by height on mobile and by width elsewhere; drop the stale one when crossing breakpoints
        gsap.set(texts, { clearProps: geo.mobile ? "width" : "height" });
        render();
      });

      /* ---------- Entrance: the wheel fades in while gliding the first award into place ---------- */
      gsap.set(cards, { xPercent: -50, yPercent: -50 });
      gsap.set(inners.map((n) => [...n]).flat(), { opacity: 0 });
      setActive(0);
      if (reduce) {
        render();
        showCopy(0, 0);
      } else {
        pos.p = -1;
        render();
        gsap.set(stage, { opacity: 0 });
        gsap.timeline({ scrollTrigger: { trigger: section, start: "top 75%", once: true } })
          .to(stage, { opacity: 1, duration: 0.6, ease: "power1.out" }, 0.15)
          .add(() => { moveTo(0); startTimer(); }, 0.15)
          .from(section.querySelector(".cf__controls"), { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, 0.9);
      }

      return () => {
        if (timer) timer.kill();
        if (posTween) posTween.kill();
        disposers.forEach((d) => d());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={styles.root} id="awards">
      <div className="container">
        <SectionTitle text="AWARDS" />
      </div>

      <div className="cf" data-cf tabIndex={0} aria-roledescription="carousel" aria-label="Awards">
        <div className="cf__track">
          {awards.map((award, i) => (
            <article
              key={i}
              className="cf__card"
              style={{ "--c": award.color }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${awards.length}`}
            >
              <div className="cf__text">
                {/* flat grid: the arrow sits top-right on desktop/tablet and beside the logo on mobile */}
                <div className="cf__text-in">
                  {award.link ? (
                    <Link href={award.link} className="cf__arrow" aria-label={award.linkLabel || `View the ${award.client} case study`}>
                      <Arrow dir="ne" />
                    </Link>
                  ) : (
                    <span className="cf__arrow" aria-hidden="true">
                      <Arrow dir="ne" />
                    </span>
                  )}
                  <h3 className="cf__title">{award.title}</h3>
                  <p className="cf__client">{award.client}</p>
                  {award.category && <p className="cf__category">{award.category}</p>}
                  <span className="cf__show">{award.show}</span>
                  <Image
                    className="cf__logo"
                    src={award.logo.src}
                    width={award.logo.width}
                    height={award.logo.height}
                    alt={award.client}
                    data-size={award.logo.size}
                  />
                </div>
              </div>
              <div className="cf__media">
                <span className="cf__word" style={{ "--len": award.word.length }}>
                  {award.word}
                </span>
                <Image
                  className="cf__trophy"
                  src={award.trophy.src}
                  width={award.trophy.width}
                  height={award.trophy.height}
                  alt={award.trophy.alt}
                  data-fit={award.trophy.fit}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="cf__controls">
        <button className="cf__btn cf__btn--prev" type="button" aria-label="Previous award">
          <Arrow dir="w" />
        </button>
        <div className="cf__dots" role="tablist" aria-label="Choose an award">
          {awards.map((_, i) => (
            <button key={i} type="button" className="cf__dot" role="tab" aria-label={`Award ${i + 1}`}>
              <i />
            </button>
          ))}
        </div>
        <span className="cf__count">
          <span data-cf-current>01</span> / {pad(awards.length)}
        </span>
        <button className="cf__btn cf__btn--next" type="button" aria-label="Next award">
          <Arrow dir="e" />
        </button>
      </div>
    </section>
  );
};

export default Awards;
