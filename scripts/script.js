
function svgGallery() {
    var HeroGrid = document.querySelector(".anim-hero");

    var animationIsOk = window.matchMedia("(prefers-reduced-motion: no-preference)")
        .matches;

    if (animationIsOk) {
        var tl = gsap.timeline({
            delay: 1.7,
            defaults: {
                transformOrigin: "right center",
                ease: "expo.out",
                duration: 1.2,
                stagger: {
                    each: 0.5,
                    from: "end"
                }
            }
        });
        
        tl.set(".fouc--hero", {
                opacity: 1
            })
            .from(".hero__swipe-1", {
                scaleX: 0
            })
            .from(
                ".hero__swipe-2",
                {
                    scaleX: 0
                },
                "<"
            )
            .from(
                ".hero__swipe-3",
                {
                    scaleX: 0
                },
                "<"
            )
            .from(
                ".hero__swipe-4",
                {
                    scaleX: 0
                },
                "<"
            )
            .from(
                ".hero__circle",
                {
                    duration: 0.7,
                    transformOrigin: "center",
                    opacity: 0,
                    scale: 0.7,
                    ease: "sine.out"
                },
                "<"
            );
    }

}
// * * * * INIT PIECES
init = function () {
    svgGallery();
};

// * * * * DOCUMENT READY
$(() => {
    init();
}); // * * * * END OF DOCUMENT READY


// * * * * FROM WORK COMPUTER STUFF
// * * * * Motion Path Plugin (new in GSAP 3)
// gsap.registerPlugin(MotionPathPlugin);

// gsap.to("#rect", {duration: 5});
// gsap.to("#divMotion", {
//     motionPath: {
//         path: "#path",
//         align: "#path",
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true
//     },
//     transformOrigin: "50% 50%",
//     duration: 5,
//     ease: "power1.inOut"
// });