
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4, 
    nav: true,
    loop: true, 
    lazyLoad:  true,
    margin: 5,
    padding: 5,
    stagePadding:5,
    responsive: {
      0 : {
        items: 1,
        dots: false
      },
      800 : {
        items: 2,
        dots: true
      },
      1000 : {
        items: 3,
        dots: true
      },
      1800 : {
        items: 4,
        dots: true
      },

    }
  })
// scroll to top
  const scrollBtn = document.querySelector('.scrBtn');
  console.log(scrollBtn);
  scrollBtn.onclick = () =>{
      window.scrollTo (0,0);
  }
  // animation
  gsap.from(".content", { scrollTrigger: {
    trigger:".content",
    toggleActions: "restart restart restart restart"}, 
 duration:2, delay:0.5, opacity:0})

 gsap.from(".card", { scrollTrigger: {
  trigger:".card",
  toggleActions: "restart restart restart restart"}, 
duration:2, delay:0.5, opacity:0})

gsap.from(".about-img", { scrollTrigger: {
  trigger:".about-img",
  toggleActions: "restart restart restart restart"}, 
duration:2, delay:0.5, opacity:0})

gsap.from(".about-info", { scrollTrigger: {
  trigger:".about-info",
  toggleActions: "restart restart restart restart"}, 
duration:2, delay:1.5, opacity:0})

gsap.from(".first", { scrollTrigger: {
  trigger:".steps-container",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, delay:0.5, opacity:0})

gsap.from(".second", { scrollTrigger: {
  trigger:".steps-container",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, delay:1, opacity:0})

gsap.from(".third", { scrollTrigger: {
  trigger:".steps-container",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, delay:1.5, opacity:0})

gsap.from(".owl-carousel", { scrollTrigger: {
  trigger:".owl-carousel",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, opacity:0})

// about page
gsap.from(".banner-cont", { scrollTrigger: {
  trigger:".banner-cont",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, opacity:0})

gsap.from(".slogan", { scrollTrigger: {
  trigger:".slogan",
  toggleActions: "restart restart restart restart"}, 
x:150, duration:2, delay:0.5, opacity:0})

gsap.from(".about-text", { scrollTrigger: {
  trigger:".about-text",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, delay:1, opacity:0})

gsap.from(".education", { scrollTrigger: {
  trigger:".education",
  toggleActions: "restart restart restart restart"}, 
stagger:1, duration:2, delay:0.5, opacity:0})

gsap.from(".program-one", { scrollTrigger: {
  trigger:".program-one",
  toggleActions: "restart restart restart restart"}, 
scale:1.2, duration:2, delay:0.5, opacity:0})

gsap.from(".program-two", { scrollTrigger: {
  trigger:".program-two",
  toggleActions: "restart restart restart restart"}, 
scale:1.2, duration:2, delay:1, opacity:0})

gsap.from(".program-three", { scrollTrigger: {
  trigger:".program-three",
  toggleActions: "restart restart restart restart"}, 
scale:1.2, duration:2, delay:1.5, opacity:0})

gsap.from(".program-anim1", { scrollTrigger: {
  trigger:".program-anim1",
  toggleActions: "restart restart restart restart"}, 
x:150, duration:2, delay:0.5, opacity:0})

gsap.from(".program-anim2", { scrollTrigger: {
  trigger:".program-anim2",
  toggleActions: "restart restart restart restart"}, 
x:-150, duration:2, delay:1, opacity:0})

gsap.from(".program-anim3", { scrollTrigger: {
  trigger:".program-anim3",
  toggleActions: "restart restart restart restart"}, 
x:150, duration:2, delay:1.5, opacity:0})

gsap.from(".btn1", { scrollTrigger: {
  trigger:".btn1",
  toggleActions: "restart restart restart restart"}, 
  stagger:1, duration:1.5, delay:0.5, opacity:0})

  gsap.from(".snack-info", { scrollTrigger: {
    trigger:".snack-info",
    toggleActions: "restart restart restart restart"}, 
    stagger:1, duration:1.5, delay:0.5, opacity:0})