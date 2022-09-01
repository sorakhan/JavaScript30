// using this because keyCode is deprecated
function getKey(key) {
  switch (key) {
    case "a":
      return 65;
    case "s":
      return 83;
    case "d":
      return 68;
    case "f":
      return 70;
    case "g":
      return 71;
    case "h":
      return 72;
    case "j":
      return 74;
    case "k":
      return 75;
    case "l":
      return 76;
    default:
      return;
  }
}

function playAudio(e) {
  // access data-key attribute
  const dataKey = `[data-key='${getKey(e.key)}']`;

  // ensure that we are selecting key on keyboard
  const key = document.querySelector(`.key${dataKey}`);

  // ensures we are selection <audio>
  const audio = document.querySelector(`audio${dataKey}`);

  // stop function if not an audio - if user presses another key
  if (!audio) return;

  // resets audio because if an audio is already playing,
  // cannot playaudio from the beginning again if tapping key repeatedly - unless audio is finished
  audio.currentTime = 0;

  // Adds .playing class for yellow border effect
  key.classList.add("playing");

  // Play audio
  audio.play();
}

function removeTransition(e) {
  // we only care when the `transform` property ends
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  } else return;
}

function loadListeners() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    // Once `transform` ends (in css), remove .playing
    key.addEventListener("transitionend", removeTransition);
  });

  document.addEventListener("keydown", playAudio);
}

loadListeners();
