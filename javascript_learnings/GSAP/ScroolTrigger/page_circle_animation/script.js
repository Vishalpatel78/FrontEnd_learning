gsap.from('#page1 #circle1',{
    scale:0,
    delay:1,
    duration:2,
    rotate:720
})
gsap.from('#page2 #circle2',{
    scale:0,
    duration:2,
    rotate:720,  
    scrollTrigger:{
        trigger:'#page2 #circle2',
        scroller:'body',
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})