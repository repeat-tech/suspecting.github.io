function reqListener () {
  var img = document.createElement("img");
  img.src = JSON.parse(foodSource.responseText).image;
  document.body.appendChild(img);
}

var foodSource = new XMLHttpRequest();
foodSource.addEventListener("load", reqListener);
foodSource.open("GET", "https://foodish-api.herokuapp.com/api/");
foodSource.send();
