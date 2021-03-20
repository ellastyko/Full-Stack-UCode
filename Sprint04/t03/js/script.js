
window.onload = (event) => {

  document.getElementById('left-sign').addEventListener('click', left);
  document.getElementById('right-sign').addEventListener('click', right);

  let image = document.getElementById('image').children;

  let first = setInterval(right, 2000);

  function left(event) {

    // if (event !== undefined)
    //   clearInterval(first)
    for (let i = (image.length - 1); i >= 0; i--) {

      if (image[i].hidden == false) {
        if (i !== 0) {
          image[i].hidden = true
          image[i-1].hidden = false
          return 0
        }
        else {
          image[i].hidden = true
          image[3].hidden = false
          return 0
        }
      }
    }
  }

  function right(event) {

    // if (event !== undefined)
    //   clearInterval(first)
    for (let i = 0; i < image.length; i++) {

      if (image[i].hidden == false) {
        if (i !== 3) {
          image[i].hidden = true
          image[i+1].hidden = false
          return 0
        }
        else {
          image[i].hidden = true
          image[0].hidden = false
          return 0
        }
      }
    }
  }



}
