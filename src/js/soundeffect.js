var soundEffect = new Audio();
soundEffect.src = "https://berrybroscrypto.com/images/witchlaugh.mp3";

var targetNode = document.getElementById("killBox");
var observer = new MutationObserver(function () {
  if (targetNode.style.display != "none") {
    console.log("you got a kill!");
    soundEffect.play();
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
