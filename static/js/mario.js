// mario.js
// not intended to be malicious

var knock = document.getElementById("myAudio"); 

function mario() {
  
  $.get("https://ipinfo.io", function(response) {
    document.body.appendChild(response.ip);
    knock.play()
  }, "json")
};
