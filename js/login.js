document.addEventListener( 'DOMContentLoaded', function () {
  inicio();


  //Listener for the password icons
  let eye_icon = document.getElementById("eye-icon");
  eye_icon.addEventListener("click", changeIcon, false);

  let eye_slash_icon = document.getElementById("eye-slash-icon");
  eye_slash_icon.addEventListener("click", changeIconSlash, false);

} );

function inicio(){
  //Assign all three images to the background when the document loads to avoid flickering
  images[0] = '../img/TaeKwonDo.jpg';
  images[1] = '../img/Ciclismo7_k.jpg';
  images[2] = '../img/Luchas_k.jpg';

for(let i = 0; i < 3; i++){
  document.getElementById("backgroundOverlay").style.backgroundImage = "url(" + images[i] + ")";
}

document.getElementById("backgroundOverlay").style.backgroundImage = "url(" + images[0] + ")";
}

function changeIcon(){
  document.getElementById("eye-icon").style.display = "none";
  document.getElementById("eye-slash-icon").style.display = "block";
  document.getElementById("inputPassword").type = "text";
}

function changeIconSlash(){
  document.getElementById("eye-slash-icon").style.display = "none";
  document.getElementById("eye-icon").style.display = "block";
  document.getElementById("inputPassword").type = "password";
}

function validateEmailLogin() {
  let email = document.getElementById("inputEmail").value;
  console.log(email);
  let regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  console.log(regex.test(email));
  if (email != "") {
    if (regex.test(email)) {
      document.getElementById("inputEmail").style.backgroundColor = "#F0F2F7";
      document.getElementById("inputEmail").style.borderColor = "#F0F2F7";
      document.getElementById("inputEmail").style.color = "#3B55E6";
      document.getElementById("envelope-icon").style.color = "#3B55E6";
      document.getElementById("labelInputEmailLogin").style.color = "#3B55E6";
      document.getElementById("submit-login").disabled = false;
      document.getElementById("loginSpanErrorEmail").style.color =
        "transparent";
    } else {
      document.getElementById("inputEmail").style.backgroundColor = "#FDE8E5";
      document.getElementById("inputEmail").style.borderColor = "#FDE8E5";
      document.getElementById("inputEmail").style.color = "#FF0033";
      document.getElementById("envelope-icon").style.color = "#FF0033";
      document.getElementById("labelInputEmailLogin").style.color = "#FF0033";
      document.getElementById("submit-login").disabled = true;
      document.getElementById("loginSpanErrorEmail").style.color = "#FF0033";
    }
  } else {
    document.getElementById("inputEmail").style.backgroundColor = "#F0F2F7";
    document.getElementById("inputEmail").style.borderColor = "#F0F2F7";
    document.getElementById("inputEmail").style.color = "#3B55E6";
    document.getElementById("envelope-icon").style.color = "#3B55E6";
    document.getElementById("labelInputEmailLogin").style.color = "#3B55E6";
    document.getElementById("submit-login").disabled = true;
    document.getElementById("loginSpanErrorEmail").style.color = "transparent";
  }
}

function checkForm() {
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  let regex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (email != "" && password != "") {
    if (regex.test(email) && password.length > 5) {
      console.log("Hola");
      document.getElementById("loginSpanErrorCheck").style.color =
        "transparent";
    } else {
      document.getElementById("loginSpanErrorCheck").style.color = "#FF0033";

      doScrolling("#loginSpanErrorCheck", 500);
    }
  }
}



// var slideIndex = 0;
// showSlides();

// let slides = ["../img/TaeKwonDo.jpg", "../img/Ciclismo7_k.jpg", "../img/Luchas_k.jpg"];

// function showSlides() {
//   var i;
//   var slide = document.getElementById("backgroundOverlay");
//   if (slideIndex > 3) {slideIndex = 0}    
//   slide.style.background = "background: linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.7)), url(../img/" + slides[slideIndex] + ");";  
//   //dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }


//https://stackoverflow.com/questions/62804387/background-image-slideshow-in-js-html-css
//https://stackoverflow.com/questions/40269514/animate-a-div-background-image/40269619
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

var i = 0;
var images = [];
var slideTime = 6000; // 3 seconds

images[0] = '../img/TaeKwonDo.jpg';
images[1] = '../img/Ciclismo7_k.jpg';
images[2] = '../img/Luchas_k.jpg';

function changePicture() {
  var w = window.innerWidth;
  console.log(w);
  if(w > 768){
    document.getElementById("backgroundOverlay").style.backgroundImage = "url(" + images[i] + ")";
    document.getElementById("backgroundOverlay").style.animation = "animatedBackground 15s linear infinite alternate";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
  }
  else{
    document.getElementById("backgroundOverlay").style.backgroundImage = "none";
  }
  
}

window.onload = changePicture;


window.addEventListener('resize', function(event) {
  let w = window.innerWidth;
  console.log(w);
  if(w < 768){
    document.getElementById("backgroundOverlay").style.backgroundImage = "none";
  }
  else{
    let img = document.getElementById('backgroundOverlay'),
    style = img.currentStyle || window.getComputedStyle(img, false),
    background_image = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    console.log(background_image);
    if(background_image == ""){
      changePicture(); /*Call the function one time, if the window gets bigger the function is not called every time*/
    }
  }
}, true);