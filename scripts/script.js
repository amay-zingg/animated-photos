
function frameOne() {
  // var delay = 4.5;

  gsap.set(["#bg-lockup1", "#svg1", "clip1"], { autoAlpha: 1 });
  gsap.set(["#svg1"], { opacity: 0.98 });

  var tl = gsap.timeline({});

  tl.from(["#clipPolygon1", "#clipPolygon2"], {
    attr: { points: "0,-305 590,20 -450,970" },
    delay: 1.75,
  });

  tl.to(
    ["#clipPolygon1", "#clipPolygon2"],
    {
      attr: { points: " 390,80 -20,370 35,-35" },
      duration: 0.9,
      ease: Power1.easeInOut,
      delay: 2,
    },
    "r1"
  );
  tl.to(
    ["#clipPolygon1", "#clipPolygon2"],
    {
      scale: 1.2,
      transformOrigin: "50% 50%",
      duration: 0.4,
      yoyo: true,
      repeat: 1,
      ease: Power1.easeInOut,
      delay: 2,
    },
    "r1"
  );

  tl.to(["#clipPolygon1", "#clipPolygon2"], {
    attr: { points: "430,120 -20,270 55,-64 " },
    duration: 5.6,
    ease: Linear.easeNone,
  });

  tl.to(["#clipPolygon1", "#clipPolygon2"], {
    attr: { points: " -20,370 45,-65  420,80" },
    duration: 1.3,
    ease: Back.easeInOut.config(0),
  });

  // gsap.delayedCall(delay, frameTwo);
}
frameOne();
