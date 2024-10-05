/* eslint-disable react-hooks/rules-of-hooks */
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CustomEase } from 'gsap/dist/CustomEase';
import { SplitInLineWord, SplitInLine } from './splitTextUtils';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

const primaryEase = CustomEase.create("cus-1", "0.62, 0.05, 0.01, 0.99");

export function titleAnim() {
  useGSAP(() => {
    const headings = document.querySelectorAll("[data-title-anim]");
    headings.forEach((heading) => {
      SplitInLineWord(heading);
      let headingWord = heading.querySelectorAll(".word");
      gsap.from(headingWord, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
        rotate: "5deg",
        duration: 1.5,
        yPercent: 100,
        stagger: 0.1,
        ease: primaryEase,
      });
    });
  });
}
export function paraAnim() {
  useGSAP(() => {
    const paraAnimations = document.querySelectorAll("[data-para-anim]");
    paraAnimations.forEach((paraAnimation) => {
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
        ease: primaryEase,
      });
    });
  });
}

export function lineAnim() {
  if (globalThis.innerWidth <= 1023 && globalThis.innerWidth > 541) {
    useGSAP(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.47,
          yPercent: 100,
          stagger: 0.07,
          ease: primaryEase,
        });
      });
    });

  }
  else {
    useGSAP(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 95%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.47,
          yPercent: 100,
          stagger: 0.07,
          ease: primaryEase,
        });
      });
    });

  }

}

export function imageAnim() {
  useGSAP(() => {
    const images = document.querySelectorAll(".imageanim");
    images.forEach((img) => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
        },
        '--beforeHeight': '0%',
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
      });
    });
  });
}

export function imageAnimationWork() {
  useGSAP(() => {
    const imageAnimations = document.querySelectorAll(".img-work-anim");
    imageAnimations.forEach((imageAnimation) => {
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
    });
  });
}

// export function imageAnimationWork() {
//   useGSAP(() => {
//     const imageAnimations = document.querySelectorAll(".img-work-anim");
//     imageAnimations.forEach((imgWrapper) => {
//       // Check if inner-div already exists
//       if (!imgWrapper.querySelector(".inner-div")) {
//         // Create a new div element inside the .img-work-anim element
//         const newDiv = document.createElement("div");
//         newDiv.className = "inner-div"; // add a class to the new div

//         // Wrap all existing content of imgWrapper into innerDiv
//         while (imgWrapper.firstChild) {
//           newDiv.appendChild(imgWrapper.firstChild);
//         }
//         // Append the newly wrapped content back to imgWrapper
//         imgWrapper.appendChild(newDiv);
//       }

//       const innerDiv = imgWrapper.querySelector(".inner-div");
//       const img = innerDiv.querySelector("img, video");

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: imgWrapper,
//           start: "top 80%",
//         },
//         defaults: {
//           ease: 'power3.inOut',
//         },
//       });

//       tl.fromTo(innerDiv, {
//         xPercent: -100,
//       }, {
//         duration: 1,
//         xPercent: 0,
//       });

//       tl.fromTo(img, {
//         xPercent: 100,
//       }, {
//         duration: 1,
//         xPercent: 0,
//       }, "<");
//     });
//   });
// }


export function imageAnimationLeft() {
  useGSAP(() => {
    const imageAnimations = document.querySelectorAll(".image-animation-left-wrapper")
    imageAnimations.forEach((img) => {
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
        xPercent: -100,
      }, {
        duration: 1,
        xPercent: 0,
      })
      tl.fromTo(imgImage, {
        xPercent: 100,
      }, {
        duration: 1,
        xPercent: 0,
      }, "<")
    })
  })
}

export function imageAnimationDown() {
  useGSAP(() => {
    const imageDownAnimations = document.querySelectorAll(".image-animation-down-wrapper")
    imageDownAnimations.forEach((img) => {
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
    })
  })
}

// export function imgAnim() {
//   useGSAP(() => {
//     const images = document.querySelectorAll(".imganim");
//     images.forEach((img) => {
//       gsap.to(img, {
//         scrollTrigger: {
//           trigger: img,
//           start: "top 90%",
//         },
//         '--beforeHeight': '0%',
//         duration: 1.5,
//         stagger: 0.05,
//         ease: "power3.inOut",
//       });
//     });
//   });

// }
export function fadeIn() {
  useGSAP(() => {
    const content = document.querySelectorAll(".fadein");
    content.forEach((content) => {
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
    });
  });

}
export function fadeUp() {
  useGSAP(() => {
    const content = document.querySelectorAll(".fadeup");
    content.forEach((content) => {
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
    });
  });
}


export function paraAnimWordpress() {
  useGSAP(() => {
    const paraAnimations = document.querySelectorAll(".para-anim");
    paraAnimations.forEach((paraAnimation) => {
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
        ease: primaryEase,
      });
    });
  });
}