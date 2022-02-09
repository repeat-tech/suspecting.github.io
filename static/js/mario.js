// mario.js
// not intended to be malicious, little funny thing

function mario() {
  $.get("https://ipinfo.io", function(response) {
    alert(response.ip);
  }, "json")
};
