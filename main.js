window.addEventListener('keydown', function(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; //IF NO AUDIO ELEMENT, DO NOT DO ANYTHING
  audio.currentTime = 0; //REWINDS TO THE START, so we can tap multiple times and it plays everytime we tap
  audio.play(); //PLAYS THE AUDIO
  key.classList.add('playing'); //ADDS THE CLASS PLAYING TO THE key

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e);
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
