var soundEffect = new Audio();
soundEffect.src =
  "https://uploads.twitchalerts.com/000/140/296/153/superuber.mp3";

var targetNode = document.getElementById("killBox");
var observer = new MutationObserver(function () {
  if (targetNode.style.display != "none") {
    console.log("you got a kill!");
    soundEffect.play();
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
