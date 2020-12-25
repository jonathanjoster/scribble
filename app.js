const audios = [new Audio('img/sl_c.mp3'), new Audio('img/sl_c.mp3')];
window.onload = () => {
  for (a of audios) {
    a.load();
  }
  setTimeout(() => {
    setTimeout(playAudioLoop, 1200);
    show();
  }, 1000);
}

function show() {
  const imgs = document.querySelectorAll('img');
  for (let i=0; i<imgs.length; i++) {
    setTimeout(() => {
      imgs[i].style.opacity = 1;
    }, (i+1)*1000);
  }
}

function changeText() {
  const text = document.querySelector('.text');
  const p = [
    'Memories',
    'Love you',
    'Hate you',
    'あ',
    'I need help',
    'sup',
    '????'
  ];
  
  let r = Math.floor(Math.random()*p.length);
  while (p[r] === lastP) {
    r = Math.floor(Math.random()*p.length);
  }
  text.innerText = lastP = p[r];
}
const musicDuration = 4000;
let lastP = 'Memories';
let textTimerId;
setTimeout(() => {
  textTimerId = setInterval(() => {
    changeText();
  }, musicDuration)
}, 1200)

let audioTimerId;
function playAudioLoop() {
    audios[0].play();
    let i = 1;
    audioTimerId = setInterval(function(){
        audios[i].play();
        i = i==0 ? 1 : 0;
    }, musicDuration);
}

document.querySelector('.stop').addEventListener('click', () => {
  clearInterval(textTimerId);
  document.body.style.backgroundColor = 'rgb(255, 51, 51)';
  for (a of audios) {
    clearInterval(audioTimerId);
    a.pause();
  }
})