const targetNode = document.getElementById("killBox");
const playerName = document.querySelector(".playerSlot-player-is-me");

var soundEffect = new Audio();
soundEffect.src = "https://berrybroscrypto.com/images/witchlaugh.mp3";

var img = document.createElement("img");
img.src = "https://berrybroscrypto.com/images/animated-witch.gif";
targetNode.appendChild(img);

var observer = new MutationObserver(function () {
  if (targetNode.style.display != "none") {
    console.log("you got a kill!");
    soundEffect.play();
    playerName.setAttribute("font-size", "3em");
    setTimeout(() => {
      playerName.setAttribute("font-size", "1em");
    }, 5000);
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
