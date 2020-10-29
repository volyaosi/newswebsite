let img = document.querySelectorAll('img');

img.forEach((elem) => {
  let isSupported = supportWebpCheck();
  if (isSupported) {
    elem.src = elem.getAttribute('data-webp');
  } else {
    elem.src = elem.getAttribute('data-otherImg');
  }
});


async function supportWebpCheck() {
  var elem = document.createElement('canvas');
  console.log('hello');
  if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      console.log(elem.toDataURL('image/webp').indexOf('data:image/webp') == 0);
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}