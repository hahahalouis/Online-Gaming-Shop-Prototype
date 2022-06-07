var close_btm = document.querySelector(".close");
var narBar = document.querySelector(".nav-container");


close_btm.onclick = function(){
    close_btm.classList.toggle("active");
    narBar.classList.toggle("active");
}

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);

