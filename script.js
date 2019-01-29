AOS.init({
    duration: 500,
    delay: 500,
});

$(function () {

    var scrollMagic = new scrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
            triggerElement: '#imageArea',
            offset: 50 /* offset the trigger 150px below #scene's top */
        })
        .Tween('#imageArea', {
            y: "50 %",
            ease: Liner.easeNone
        })
        .addTo(scrollMagic)
    // shows controller
    scene.addIndicators()
})