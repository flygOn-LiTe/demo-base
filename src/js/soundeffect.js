function isItHidden() {
  var x = document.getElementById("killBox");
  if (window.getComputedStyle(x).display === "none") {
    console.log("it is hidden");
  } else {
    console.log("it is showing");
  }
}
isItHidden();

var targetNode = document.getElementById("killBox");
var observer = new MutationObserver(function () {
  if (targetNode.style.display != "none") {
    console.log("something changed!");
  }
});
observer.observe(targetNode, { attributes: true, childList: true });
