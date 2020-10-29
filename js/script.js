const  img = document.querySelectorAll('img');
const isSupported = supportWebpCheck();
img.forEach((elem) => {

  console.log(isSupported);

  if (!isSupported) {
    elem.src = elem.getAttribute('data-otherImg');
    console.log(elem.src);
  } else {
    elem.src = elem.getAttribute('data-webp');
    console.log(elem.src);
  }
});


function supportWebpCheck() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation

      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}