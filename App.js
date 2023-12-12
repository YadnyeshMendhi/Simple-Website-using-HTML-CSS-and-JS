function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function CalculateTotal() {
    const productTwo = parseInt(document.getElementById("product2").value);
    const productThree= parseInt(document.getElementById("product3").value);


    const totalPrice = (productTwo)+(productThree);


    document.getElementById("total").textContent = totalPrice;
    
}

function getAddress(){
    const getAddress= (document.getElementById("address").value);

    document.getElementById("Adressid").textContent = getAddress;
}

/* Accordian added from w3 schools*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*Image slider added from w3Schools*/
var slideIndex = 1;
showDivs(slideIndex);


showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

/*---Back to top button*/

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}