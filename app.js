const audios = [new Audio('img/sl_c.mp3'), new Audio('img/sl_c.mp3')];
window.onload = () => {
  for (a of audios) {
    a.load();
  }
}
let stoppable = false;

// button
const musicDuration = 4000;
let textTimerId;
const btn = document.querySelector('.btn');
setTimeout(() => {
  btn.style.visibility = 'initial';
}, 1000);
btn.addEventListener('click', () => {
  btn.style.visibility = 'hidden';
  setTimeout(playAudioLoop, 1200);
  show();
  setTimeout(() => {
    textTimerId = setInterval(() => {
      changeText();
    }, musicDuration)
    setTimeout(() => {
      stoppable = true;
    }, musicDuration*1);
  }, 1200);
});

// show pictures
function show() {
  const imgs = document.querySelectorAll('img');
  for (let i=0; i<imgs.length; i++) {
    setTimeout(() => {
      imgs[i].style.opacity = 1;
    }, (i+1)*1000);
  }
}

// change text
let lastP = 'Memories';
function changeText() {
  const text = document.querySelector('.text');
  const p = [
    'Memories',
    'Love you',
    'Never.',
    'あ',
    'Do you want?',
    'sup',
    '????'
  ];
  let r = Math.floor(Math.random()*p.length);
  while (p[r] === lastP) {
    r = Math.floor(Math.random()*p.length);
  }
  text.innerText = lastP = p[r];
}

// audio
let audioTimerId;
function playAudioLoop() {
  audios[0].play();
  let i = 1;
  audioTimerId = setInterval(function(){
    audios[i].play();
    i = i==0 ? 1 : 0;
  }, musicDuration);
}

// stop audios
document.querySelector('.stop').addEventListener('click', () => {
  if (!stoppable) { return; }
  clearInterval(textTimerId);
  document.body.style.backgroundColor = 'rgb(255, 51, 51)';
  for (a of audios) {
    clearInterval(audioTimerId);
    a.pause();
    document.querySelectorAll('.bar').forEach(b => {
      b.style.opacity = 'initial';
    });
  }
});