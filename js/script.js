let img = document.querySelectorAll('img');

img.forEach((elem) => {
  if (supportsWebp) {
    elem.src = elem.getAttribute('data-webp');
  } else {
    elem.src = elem.getAttribute('data-otherImg');
  }
});


async function supportsWebp() {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}