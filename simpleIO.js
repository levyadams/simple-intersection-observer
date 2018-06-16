//after the window loads
window.addEventListener("load", function (event) {
  createObserver();
}, false);
function createObserver() {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: .01
  };
  //select all elements with this id
  var images = document.querySelectorAll('#lazy-img');
  var observer = new IntersectionObserver(handleIntersect, options);
  images.forEach(function(image){
    observer.observe(image);
  });

}

function handleIntersect(entries, observer) {
  // Loop through the entries
  entries.forEach(function(entry){
    //if this entry is intersecting whatsoever
    if (entry.intersectionRatio > 0) {
      // Stop watching and load the image
      //entry.target is an <img> tagged 64-bit inline svg
      var image = entry.target;
      //we get our responsive image set
      var url = image.getAttribute('data-src');
      //and set them as the actual source
      image.setAttribute('src',url);
      //we unobserve (Separate) the image entirely
      observer.unobserve(entry.target);
      console.log('lazy-image loaded!:simpleIO.js line 35 to remove this!');
    }
  });
}
