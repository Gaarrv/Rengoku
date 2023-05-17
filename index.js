// window.onload = function() {
//   var bannerContainer = document.getElementById("banner-container");
//   var bannerWidth = bannerContainer.offsetWidth;

//   // Duplicate the banner contents
//   var bannerContents = bannerContainer.innerHTML;
//   bannerContainer.innerHTML += bannerContents;

//   // Set the width of the banner container to twice the original width
//   bannerContainer.style.width = bannerWidth * 2 + "px";
// }

  // ROTATE_RAMEN
  window.addEventListener("scroll", function() {
      var img = document.getElementById("main-ramen");
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
      img.style.transform = "rotate(" + scrollTop/8+ "deg)";
  });

  // HOVER_HIDE
  const hoveredDiv1 = document.querySelector('.text1');
  const hiddenDiv1 = document.querySelector('.stick1');
  const hoveredDiv2 = document.querySelector('.text2');
  const hiddenDiv2 = document.querySelector('.stick2');
  const hiddenDiv3 = document.querySelector('.stick3');
  const hiddenDiv4 = document.querySelector('.stick4');
  const hoveredDiv3 = document.querySelector('.hero-button');
  const hiddenDiv5 = document.querySelector('.chop');
  
  hoveredDiv1.addEventListener('mouseover', () => {
    hiddenDiv1.classList.add('hidden');
    hiddenDiv2.classList.add('hidden');
  });
  
  hoveredDiv1.addEventListener('mouseout', () => {
    hiddenDiv1.classList.remove('hidden');
    hiddenDiv2.classList.remove('hidden');
  });

  hoveredDiv2.addEventListener('mouseover', () => {
    hiddenDiv3.classList.add('hidden');
    hiddenDiv4.classList.add('hidden');
  });
  
  hoveredDiv2.addEventListener('mouseout', () => {
    hiddenDiv3.classList.remove('hidden');
    hiddenDiv4.classList.remove('hidden');
  });

  hoveredDiv3.addEventListener('mouseover', () => {
    hiddenDiv5.classList.add('hidden');
    hiddenDiv5.classList.add('hidden');
  });
  
  hoveredDiv3.addEventListener('mouseout', () => {
    hiddenDiv5.classList.remove('hidden');
    hiddenDiv5.classList.remove('hidden');
  });
  
  // VIEW_RAMEN
  function showImagesOnDivIntersection(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var photoDiv = document.getElementById('photoDiv');
        photoDiv.style.opacity = 1;
  
        var images = photoDiv.querySelectorAll('.scroll-image');
        var delay = 500; // Delay between each image appearance in milliseconds
  
        images.forEach(function(image, index) {
          setTimeout(function() {
            image.style.opacity = 1;
          }, delay * (index + 1));
        });
  
        // Disconnect the observer once the images are shown
        observer.disconnect();
      }
    });
  }
  
  var options = {
    threshold: 0.4 // Adjust the threshold as needed to determine when the div is visible
  };
  
  var observer = new IntersectionObserver(showImagesOnDivIntersection, options);
  observer.observe(document.getElementById('aboveDiv'));
  // end

