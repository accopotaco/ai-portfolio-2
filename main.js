(()=>{
  gsap.registerPlugin();
  gsap.from('h2',2,{
  y:-100,
  opacity: 0,
  rotationX:'360deg',
})
 gsap.to('.dolphin' ,{
  x:1600,
  y:100,
  duration:5,
  rotation:'50deg',
  repeat:2,
});
gsap.to('.fish ',8,{
  x:'-1600',
  y:'-100',
  rotation:'40deg',
  repeat:3,
});
//moreBtn
const more = document.querySelector('h4');
const one = document.querySelector('.text.one');
const two = document.querySelector('.text.two');


  more.addEventListener('click',()=>{
    one.style.opacity = '1';
    setTimeout(() => {
      two.style.opacity = '1';
    }, 3000);
  })

})();