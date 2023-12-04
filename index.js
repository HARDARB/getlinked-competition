$('.menu').click (function(){
    $(this).toggleClass('open');
  });

  
  // multiple typing

var typed = new Typed('.multiType', {
    strings: [ "  Igniting a Revolution in HR Innovation "],
    loop: true,
    typeSpeed: 100,
    basckSpeed: 1500,
    backDelay: 2000,
  });
  


  function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (mins < 10) {
        mins = '0' + mins;
    }

    if (secs < 10) {
        secs = '0' + secs;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(displayTime, 10);

// -----------------------Navbar ---------------------


$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});


// Time line for preload site

let ani = gsap.timeline ()
ani.from(".hero-text ", { duration: 1, autoAlpha:0, scale: 2, });
ani.from(".star-blinks", { y: -200, duration: 1, autoAlpha:0,});
ani.from(".human", {  y: 300, duration: 2, opacity:0, });

// button blinks

ani.to (".galaxy", 
{
  scale:1.4, duration:1, repeat:-1, yoyo:true, ease: "ease",
});



let mm = gsap.matchMedia();


mm.add("(min-width: 800px)", () => {



  // section-1-after about

let tl = gsap.timeline({
  scrollTrigger: {
          trigger: ".Section-1-after",		
          start: "top 100%",
          end: "bottom bottom",
          ease: "none",
          scrub: 3,
          // markers: true,
        }
        
});

tl.from(".Section-1-after", {
  width: "40%",
  duration: 3,
  scale: -.5,
  x: 10,
  ease: "power1.inOut",
});

  // Scroll reveal for the whole body
  ScrollReveal({
    reset: true,
    distance: "150px",
    duration: 2500,
    delay: 400
  });
  

  ScrollReveal().reveal('.stagger',{delay: 300, origin: 'bottom', interval: 500});


  ScrollReveal().reveal('.sectionfive-details',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.fontendstagger ',{delay: 400, origin: 'left',});

  ScrollReveal().reveal('.graphics-text',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.graphicsstagger',{delay: 400, origin: 'left',});
  
  
  // ScrollReveal().reveal('.newproimage',{delay: 300, origin: 'left', });
  // ScrollReveal().reveal('.newpro',{delay: 400, origin: 'right', });

  ScrollReveal().reveal('.from-left',{delay: 300, origin: 'left', });
  ScrollReveal().reveal('.from-right',{delay: 400, origin: 'right', });



});

 // Scroll reveal for the whole body
 ScrollReveal({
  reset: true,
  distance: "150px",
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.bigtextbox',{delay: 300, origin: 'left', });

