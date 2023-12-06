//audio
const btn = document.querySelector('.btn')
const audio = document.querySelector('.audio')
btn.addEventListener('click',()=>{
  if (audio.paused) {
    audio.play();
  }else if (audio.played) {
    audio.pause();
  }
});
//gsap
TweenMax.to('.musk',2,{
  width: "100%",
  ease:Expo.easeInOut,
})
TweenMax.from('.nav',2,{
  opacity: 0,
  y:80, 
  ease:Expo.easeInOut,
})
TweenMax.from('.blocks',2,{
  opacity: 0,
  x:-200, 
  ease:Expo.easeInOut,
})
TweenMax.to('.hero',2.5,{
  x:-360, 
  ease:Expo.easeInOut,
})
TweenMax.to('.text',2.5,{
  scale:1,
  ease:Expo.easeInOut,
})
TweenMax.staggerFrom('.logo > div',1.5,{
  deray:4.4,
  y:300,
  ease:Elastic.easeOut.config(2,0.6),
})

TweenMax.to('.text',2.5,{
  scale:1,
  ease:Expo.easeInOut,
})