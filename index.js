$(document).on("keydown", function(event) {

  let letter = event.key.toLowerCase();
  let duckLetters = {
    a: "mini",
    s: "small",
    d: "medium",
    f: "big",
  };

  let duckSize = duckLetters[letter];

  if (duckSize) {

    animatePress(duckSize)
    quackSound(duckSize);
  }
});

$(".duck-img").click(function(event) {

  let duckSize = event.target.classList[0];

  animatePress(duckSize);
  quackSound(duckSize);
});

function animatePress(duckSize) {

  let duckTag = "." + duckSize;

  $(duckTag).addClass("pressed");

  setTimeout(function() {
    $(duckTag).removeClass("pressed");
  }, 100);
}

function quackSound(duckSize) {

  let audioLocation = "sounds/" + duckSize + "Duck.mp3";

  let quack = new Audio(audioLocation);

  quack.play();
}
