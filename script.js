function loco() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco();

gsap.to(".page1 h1" , {
    transform: "rotate(0)",
    duration :0.5
})

gsap.to(".page1 h2" , {
    transform: "rotate(0)",
    duration :0.5
})



let tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".page1 h1",
        scroller : ".main",
        start : "top 25%",
        end : "top 0",
        scrub : 3 
    }
})



tl.to(".page1 h1",{
    x :-180 ,
    duration: 0.4,
},"A")

tl.to(".page1 h2",{
    x :180 ,
    duration: 0.4,
},"A")

tl.to(".page1 video , .page1 .text",{
    marginLeft : "2.5%",
    width : "95%"
},"A")

let tl2 =  gsap.timeline({
    scrollTrigger: {
        trigger : ".page2",
        scroller : ".main",
        // markers : true,
        start : "20% 50%",
        end : "100% 50%",
        toggleActions: 'play none none reverse',

    }
})

tl2.to(".main",{
    backgroundColor : "white"
})

tl2.to(".page2 h1 , .page2 .text .left , .page2 .text .right" , {
    transform: "rotate(0)",
    opacity :1
})

let tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : ".page3",
        scroller : ".main",
        // markers : true,
        start : "20% 50%",
    }
})

tl3.to(".page3 h1", {
    transform: "rotate(0)",
    opacity :1
})


let tl4 =  gsap.timeline({
    scrollTrigger: {
        trigger : ".page4",
        scroller : ".main",
        // markers : true, 
        start : "40% 50%",
        end : "100% 50%",
        toggleActions: 'play none none reverse',

    }
})

tl4.to(".main",{
    backgroundColor : "#0F0D0D",
    color : "white"
})


tl4.to(".page4 .elem",{
    stagger : 0.4,
    transform: "rotate(0)",
})