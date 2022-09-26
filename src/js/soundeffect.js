function isItHidden() {
  var x = document.getElementById("killBox");
  if (window.getComputedStyle(x).display === "none") {
    console.log("it is hidden");
  } else {
    console.log("it is showing");
  }
}
isItHidden();
