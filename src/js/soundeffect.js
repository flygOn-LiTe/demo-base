const targetNode = document.getElementById("killBox");

var soundEffect = new Audio();
soundEffect.src = "https://berrybroscrypto.com/images/witchlaugh.mp3";

var img = document.createElement("img");
img.src = "https://berrybroscrypto.com/images/animated-witch.gif";
targetNode.appendChild(img);

var observer = new MutationObserver(function () {
  const playerName = document.querySelector(".playerSlot-player-is-me");
  if (targetNode.style.display != "none") {
    console.log("you got a kill!");
    soundEffect.play();
    playerName.setAttribute("style", "font-size: 3em !important;");
    setTimeout(() => {
      playerName.setAttribute("style", "font-size: 1em !important;");
    }, 5000);
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
