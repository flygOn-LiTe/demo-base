const targetNode = document.getElementById("killBox");

var soundEffect = new Audio();
soundEffect.src = "https://berrybroscrypto.com/images/witchlaugh.mp3";

var img = document.createElement("img");
img.src = "https://berrybroscrypto.com/images/animated-witch.gif";
targetNode.appendChild(img);

var observer = new MutationObserver(function () {
  if (targetNode.style.display != "none") {
    console.log("you got a kill!");
    soundEffect.play();
    const playerName = document.querySelector(".playerSlot-player-is-me");
    playerName.setAttribute("style", "transform: scale(2);");
    setTimeout(() => {
      playerName.setAttribute("style", "transform: scale(1);");
    }, 3000);
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
