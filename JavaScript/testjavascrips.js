 var image = document.querySelector(".landing-page img");
 var myImages = 
          ["../images/01.jpg",
          "../images/02.jpg",
          "../images/03.jpg"
          ];
var boulits = document.querySelectorAll(".boulits span");

/* change auto
function changeimg(image , myImages){
          
          setInterval(function(){
                    var mynum = Math.floor(Math.random() * myImages.length);
                    image.src = myImages[mynum]
                    
          }, 3000);
};
changeimg(image , myImages);
*/
function a (){
          image.src = "../images/01.jpg"
};
function b (){
          image.src = "../images/02.jpg"
};
function c (){
          image.src = "../images/03.jpg"
};

var ss = document.querySelector(".boulits");
boulits.forEach(el => {
  el.addEventListener('click', function(){
    ss.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});

var links = document.querySelector(".header .links ul");
var li = document.querySelectorAll(".header .links ul li a");
li.forEach(el =>{
  el.addEventListener('click', function(){
    links.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});



var btn = document.querySelector(".header .links i");
btn.onclick = function(e){
          e.stopPropagation();
          links.classList.toggle("active");
}; 
document.addEventListener('click' , (e) => {
          if (e.target !== btn && e.target !== links){
                    if( links.classList.contains("active")){
                      links.classList.toggle("active");
                    };
          };
});
links.onclick = function(e){
          e.stopPropagation();
};

/*
window.onscroll = function(){
  header.classList.add("scroll")
};
*/

var header = document.getElementById("header");
/*
var scrollUp = document.getElementById('scrollUp');
*/


var skills = document.querySelector(".skills");
var spans = document.querySelectorAll(".progress span");

window.onscroll = function(){
    if (this.scrollY > 100) {
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll');
    }
    /*
    if (this.scrollY > 100) {
        scrollUp.classList.add('show');
    }
    else{
        scrollUp.classList.remove('show');
    }
    */
  if(window.scrollY >= skills.offsetTop){
    spans.forEach((span) =>{
      span.style.width = span.dataset.width;
    });
  };
};

document.querySelectorAll(".gallary .content .box img").forEach(image =>{
  image.onclick = () =>{
    document.querySelector(".overlay").style.display = 'block';
    document.querySelector('.overlay img').src = image.getAttribute('src');
  }
});
document.querySelector(".overlay .conter span").onclick = () =>{
  document.querySelector(".overlay").style.display = 'none';
};