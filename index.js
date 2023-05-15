// window.onload = function() {
//   var bannerContainer = document.getElementById("banner-container");
//   var bannerWidth = bannerContainer.offsetWidth;

//   // Duplicate the banner contents
//   var bannerContents = bannerContainer.innerHTML;
//   bannerContainer.innerHTML += bannerContents;

//   // Set the width of the banner container to twice the original width
//   bannerContainer.style.width = bannerWidth * 2 + "px";
// }

window.addEventListener("scroll", function() {
    var img = document.getElementById("main-ramen");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    img.style.transform = "rotate(" + scrollTop/8 + "deg)";
  });
