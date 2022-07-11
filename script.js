var modal = document.getElementById("myModal");

var img = document.getElementById("myimg");
var img2 = document.getElementById("myimg2");
var img3 = document.getElementById("myimg3");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg2.src = this.src;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg3.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}