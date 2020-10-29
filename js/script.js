let img = document.querySelectorAll('img');

img.forEach((elem) => {
        console.log(elem);
        if (supportsWebp) {
            elem.src = elem.getAttribute('data-webp');
          } else {
            elem.src = elem.getAttribute('data-otherImg');
          }

});


async function supportsWebp() {
    if (!self.createImageBitmap) return false;
    
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
  }