/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitInLineWord, SplitInLine } from './splitTextUtils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

gsap.config({
  nullTargetWarn: false,
});

/**
 * lazyEachInView
 *
 * Defers per-element animation setup (SplitType text-splitting + GSAP
 * ScrollTrigger creation) until the element is within rootMargin of the
 * viewport, instead of running it for every match on the page eagerly at
 * mount. SplitType's DOM manipulation and ScrollTrigger.create() cost adds
 * up across dozens of elements - including sections far below the fold like
 * the FAQ - when done all at once during initial hydration.
 */
function lazyEachInView(selector, setup, contextSafe) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return () => {};

  const safeSetup = contextSafe ? contextSafe(setup) : setup;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        safeSetup(entry.target);
      });
    },
    { rootMargin: "800px 0px 800px 0px" }
  );

  elements.forEach((el) => observer.observe(el));

  // React (Strict Mode in dev) can mount -> cleanup -> mount an effect in
  // the same tick. Without disconnecting here, the first mount's observer
  // is left dangling: when it later fires against a context useGSAP already
  // reverted, the animation's "from" state gets applied but the tween never
  // completes, leaving the element permanently stuck invisible.
  return () => observer.disconnect();
}

export function titleAnim() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView("[data-title-anim]", (heading) => {
      SplitInLineWord(heading);
      let headingWord = heading.querySelectorAll(".word");
      gsap.from(headingWord, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
        rotate: "5deg",
        duration: 0.8,
        yPercent: 100,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, contextSafe);
  });
}

export function paraAnim() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView("[data-para-anim]", (paraAnimation) => {
      SplitInLine(paraAnimation);
      let paraLine = paraAnimation.querySelectorAll(".line-internal");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 90%",
        },
        duration: 0.8,
        yPercent: 100,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, contextSafe);
  });
}

export function lineAnim() {
  const isTablet = globalThis.innerWidth <= 1023 && globalThis.innerWidth > 541;

  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".lineDraw", (lineDraw) => {
      gsap.from(lineDraw, {
        scrollTrigger: {
          trigger: lineDraw,
          start: isTablet ? "top 80%" : "top 95%",
        },
        scaleX: 0,
        transformOrigin: "left",
        duration: isTablet ? 1 : 1.47,
        yPercent: 100,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, contextSafe);
  });
}

export function fadeIn() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".fadein", (content) => {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 60%",
        },
        opacity: 0,
        ease: "power3.Out",
        duration: 1,
        stagger: 0.5
      });
    }, contextSafe);
  });
}

export function fadeUp() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".fadeup", (content) => {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: "top 90%",
          end: "bottom 60%",
        },
        opacity: 0,
        delay: 0.3,
        y: 50,
        ease: "power3.Out",
        duration: 0.7,
        stagger: 0.5
      });
    }, contextSafe);
  });
}

export function imageAnimationWork() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".img-work-anim", (imageAnimation) => {
      gsap.from(imageAnimation, {
        scrollTrigger: {
          trigger: imageAnimation,
          start: "top 90%",
          end: "bottom 60%",
        },
        opacity: 0,
        delay: 0.3,
        y: 50,
        ease: "power3.Out",
        duration: 0.7,
        stagger: 0.5
      });
    }, contextSafe);
  });
}

export function imageAnimationDown() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".image-animation-down-wrapper", (img) => {
      const imgHolder = img.querySelector("div");
      const imgImage = img.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
        },
        defaults: {
          ease: 'power3.inOut',
        }
      })
      tl.fromTo(imgHolder, {
        yPercent: -100,
      }, {
        duration: 1,
        yPercent: 0,
      })
      tl.fromTo(imgImage, {
        yPercent: 100,
      }, {
        duration: 1,
        yPercent: 0,
      }, "<")
    }, contextSafe);
  })
}

export function paraAnimWordpress() {
  const { contextSafe } = useGSAP(() => {
    return lazyEachInView(".para-anim", (paraAnimation) => {
      SplitInLine(paraAnimation);
      let paraLine = paraAnimation.querySelectorAll(".line-internal");
      gsap.from(paraLine, {
        scrollTrigger: {
          trigger: paraAnimation,
          start: "top 90%",
        },
        duration: 1.47,
        yPercent: 100,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, contextSafe);
  });
}
