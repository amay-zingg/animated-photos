function redCircle() {
  let ele = document.getElementById("turbulenceCircle");
  gsap.set(".redCircle", { opacity: 1 });

  var tl = gsap.timeline({ repeat: -1 });

  tl.from(["#redCircle"], {
    ease: "power2.out",
    y: 100,
    x: 100,
    duration: 3,
  });

  tl.to(["#redCircle"], {
    ease: Power1.easeInOut,
    duration: 8,
    y: 50,
    x: 250,
    scale: 1.6,
  });
  tl.to(["#redCircle"], {
    opacity: 0,
    duration: 2,
  });

  gsap.to(ele, 14, { attr: { baseFrequency: "0 0" } });
}

redCircle();

function sectionOne() {
  let el = document.getElementById("turbulence");

  gsap.set(".tiger-gallery", { opacity: 1 });

  gsap.from(".tiger", 1, { opacity: 0, ease: "power1.inOut", x: -200 });

  gsap.to(".tiger", {
    duration: 1,
    opacity: 1,
    x: 0,
    stagger: 0.2,
  });

  gsap.to(el, 3, { attr: { baseFrequency: "0 0" } });
}

sectionOne();

function sectionTwo() {
  let ele = document.getElementById("turbulenceTwo");

  gsap.from(".tiger-queen-word", 1, {
    opacity: 0,
    ease: "back.out(2)",
  });

  gsap.to(".tiger-queen-word", { opacity: 1, y: 40, duration: 2, scale: 1.1 });

  gsap.to(ele, 3, { attr: { baseFrequency: "0 0" } });
}

sectionTwo();

function frameOne() {
  // var delay = 4.5;

  gsap.set(["#bg-lockup1", "#tigerSVG", "clip1"], { autoAlpha: 1 });
  gsap.set(["#tigerSVG"], { opacity: 0.98 });

  var tl = gsap.timeline({ repeat: -1 });

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
    duration: 3,
    ease: Linear.easeNone,
  });

  tl.to(["#clipPolygon1", "#clipPolygon2"], {
    attr: { points: " -20,370 45,-65  420,80" },
    duration: 3,
    // ease: Back.easeInOut.config(0),
    ease: Back.easeOut,
  });

  tl.to(["#clipPolygon1", "#clipPolygon2"], {
    attr: { points: "150,0 200,100 50,200 " },
    duration: 9,
    autoAlpha: 0,
    ease: Back.easeOut,
  });

  // gsap.delayedCall(delay, frameTwo);
}
frameOne();

function scrollFrame() {
  var boxLegal = document.querySelector("#legalCon");
  if (!boxLegal.classList.contains(".legalOn")) {
    gsap.delayedCall(3, legalPopUp);
    gsap.fromTo(
      ["#legalCopyCon"], 
    //  https://greensock.com/scrolltoplugin/
      {duration: 3.25, 
      ease: Linear.easeNone, 
      delay: 3.6,
      scrollTo: 160 
      }
      
    );
  };
  

  function legal() {
    gsap.set([".lgl"], { autoAlpha: 1 });
    gsap.set(["#legalCon"], { y: 42 });
    gsap.from(["#legalCon"], { duration: 0.3, y: 60, ease: "power2.out" });
    // console.log('legal called');

    var legal_popUp = document.querySelectorAll("#legalPopUp");
    legal_popUp[0].addEventListener(
      "click",
      function () {
        // console.log("click");
        legalPopUp();
      },
      false
    );
  }
  // Called in frameThree in example
  legal();

  function legalClose() {
    gsap.set(["#popUp", "#legalPopUp"], { autoAlpha: 1 });
    gsap.set(["#popDown", "#legalPopDown"], { autoAlpha: 0 });
    gsap.to("#legalCon", { duration: 0.3, y: 42, ease: "power2.inOut" });
    gsap.set(["#legalCopyCon"], { scrollTo: 0 });
    var boxLegal = document.querySelector("#legalCon");
    if (boxLegal.classList.contains(".legalOn")) {
      boxLegal.classList.remove(".legalOn");
    }
  }

  function legalPopUp() {
    var boxLegal = document.querySelector("#legalCon");
    if (!boxLegal.classList.contains(".legalOn")) {
      boxLegal.classList.add(".legalOn");
    }
    // console.log('up');
    gsap.to("#legalCon", { duration: 0.6, y: 0, ease: "power2.inOut" });
    gsap.set(["#popUp", "#legalPopUp"], { autoAlpha: 0 });
    gsap.set(["#popDown", "#legalPopDown"], { autoAlpha: 1 });
    gsap.to(['#legalCopyCon'], {duration: 3, scrollTo: 25});

    var lglScroll = document.getElementById("legalCopyCon");
    lglScroll.style.cursor = "grab";

    var pos = { top: 0, left: 0, x: 0, y: 0 };

    var mouseDownHandler = function (e) {
      lglScroll.style.cursor = "grabbing";
      lglScroll.style.userSelect = "none";
      pos = {
        top: lglScroll.scrollTop,
        // Get the current mouse position
        y: e.clientY,
      };
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    var mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      var dy = e.clientY - pos.y;
      // Scroll the element
      lglScroll.scrollTop = pos.top - dy;
    };

    var mouseUpHandler = function () {
      lglScroll.style.cursor = "grab";
      lglScroll.style.removeProperty("user-select");
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    // Attach the handler
    lglScroll.addEventListener("mousedown", mouseDownHandler);

    //Moves the bar up and down.
    var scrollTween = gsap.to("#thumb", {
      yPercent: 360,
      ease: "none",
      paused: true,
    });
    function updateScrollBar() {
      scrollTween.progress(
        lglScroll.scrollTop / (lglScroll.scrollHeight - lglScroll.offsetHeight)
      );
    }
    lglScroll.addEventListener("scroll", updateScrollBar);

    //Close the legal
    var popDown = document.getElementById("legalPopDown");
    popDown.addEventListener(
      "click",
      function () {
        legalClose();
      },
      false
    );
  }

  // LEGAL
}

scrollFrame();
