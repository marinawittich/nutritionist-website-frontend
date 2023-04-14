const scrollBtn = document.querySelector('.scrBtn');
  console.log(scrollBtn);
  scrollBtn.onclick = () =>{
      window.scrollTo (0,0);
  }
//   animation
gsap.from(".text-center", { scrollTrigger: {
    trigger:".text-center",
    toggleActions: "restart restart restart restart"}, 
  stagger:1, duration:2, delay:0.5, opacity:0})

  gsap.from(".blog-title p, .blog-ul", { scrollTrigger: {
    trigger:".blog-title p"}, 
  duration:1.5, delay:0.5, opacity:0})

  