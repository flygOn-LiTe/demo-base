var open_prototype = XMLHttpRequest.prototype.open,
  intercept_response = function (callback) {
    XMLHttpRequest.prototype.open = function (method, url) {
      if (url.indexOf("shellshock.js") > -1) this.isScript = true;
      this.addEventListener("readystatechange", function (event) {
        if (this.readyState === 4 && this.isScript) {
          var response = callback(event.target.responseText);
          Object.defineProperty(this, "response", { writable: true });
          Object.defineProperty(this, "responseText", { writable: true });
          this.response = this.responseText = response;
        }
      });
      return open_prototype.apply(this, arguments);
    };
  };

intercept_response(function (response) {
  console.log(response);
  return response;
});
