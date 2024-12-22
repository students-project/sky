gsap.from(".page1 .box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360,
    
})

gsap.from(".page2 .box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 30%",
        scrub:2
        
    }
})
gsap.from(".page3 .box",{
    scale:0,
    duration:1,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2
    }
})