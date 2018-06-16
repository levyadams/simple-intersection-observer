//after the window loads
window.addEventListener("load", function (event) {
  var images = document.querySelectorAll('#lazy-img');
  //if the browser doesn't support IO
  if (!('IntersectionObserver' in window)) {
    LoadImagesOldWay(images);
  } else {
    createObserver(images);
  }
}, false);

function createObserver(images) {
  var options = {
    //root defaults
    root: null,
    rootMargin: "0px",
    //threshold is how much of the element is intersected before firing callback
    threshold: .01
  };
  //create an observer, add the options and callback function
  //then add each image to the observer.
  var observer = new IntersectionObserver(handleIntersect, options);
  images.forEach(function (image) {
    observer.observe(image);
  });

}
//load the smallest image for old browsers
function LoadImagesOldWay(images) {
  images.forEach(function (image) {
    var url = image.getAttribute('data-src');
    image.setAttribute('src', url);
  });
}

function handleIntersect(entries, observer) {
  // Loop through the entries
  entries.forEach(function (entry) {
    //if this entry is intersecting whatsoever
    if (entry.intersectionRatio > 0) {
      // Stop watching and load the image
      var image = entry.target;
      //we get our responsive image set
      var url = image.getAttribute('data-src');
      //and set them as the actual source
      image.setAttribute('src', url);
      //we unobserve (Separate) the image entirely
      observer.unobserve(entry.target);
      console.log('lazy-image loaded!:simpleIO.js line 49 to remove this!');
    }
  });
}